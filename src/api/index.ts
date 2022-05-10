import axios from 'axios';

export const getAPIHost = () => {
  return 'https://conaz-core-api.02.dance';
  // return 'http://localhost:3000';
};

export const api = axios.create({
  baseURL: getAPIHost(),
});

export const setToken = (cookies: any, setCookie?: any) => {
  if (!cookies?.access_token) {
    sessionStorage.setItem('token', '');
    return '';
  }

  const {
    access_token,
    refresh_token,
    access_token_start_at,
    expires_in,
    expires_at,
  } = cookies;
  if (access_token) {
    // @ts-ignore
    api.store_data = {
      access_token,
      refresh_token,
    };
    // @ts-ignore
    sessionStorage.setItem('token', JSON.stringify(api.store_data));
    window?.opener?.postMessage('reload_token', '*');
    // @ts-ignore
    return api.store_data;
  }
};

api.interceptors.request.use(async (request) => {
  // @ts-ignore
  let token = api.store_data;
  if (!token && sessionStorage.getItem('token')) {
    // @ts-ignore
    token = setToken(JSON.parse(sessionStorage.getItem('token')));
  }

  // if ((token.expires_at || 0) < moment().unix()) {
  //   const formData = new FormData();
  //   formData.append('grant_type', 'refresh_token');
  //   formData.append('refresh_token', token.refresh_token);
  //   const { data } = await api.post('/auth/login', formData);
  //   console.log('refresh', data);
  //   token = setToken(data);
  // }

  if (token?.access_token) {
    // @ts-ignore
    request.headers.common.authorization = `Bearer ${token?.access_token}`;
  }
  return request;
});

export default api;
