import { useSelector, shallowEqual } from 'react-redux';

export default () => {
  const { principal } = useSelector((s: any) => s.auth, shallowEqual);
  return !!principal;
};
