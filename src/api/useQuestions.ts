import api from "@api";
import useQuery from "@hooks/useQuery";

export const QUESTIONS_DATA = 'QUESTIONS_DATA';

export default (isPage:number, isLimit: number) => {
  return useQuery([QUESTIONS_DATA, isPage, isLimit], () => 
    api.get(`/questions`, {
      params: {
        page: isPage,
        limit: isLimit
      }
    })
  );
}