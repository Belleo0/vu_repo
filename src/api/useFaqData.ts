import api from "@api";
import useQuery from "@hooks/useQuery";

export const FAQ_DATA = 'FAQ_DATA';

export default (isType: string) => {
  return useQuery([FAQ_DATA, isType], () => 
    api.get(`/faqs`, {
      params: {
        type: isType
      }
    })
  );
}