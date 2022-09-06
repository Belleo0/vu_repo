import api from "@api";
import useQuery from "@hooks/useQuery";

export const POSTS_INFO_DATA = 'POSTS_INFO_DATA';

export default (isPostId: string) => {
  return useQuery([POSTS_INFO_DATA, isPostId], () => 
    api.get(`/posts/${isPostId}`), {
      enabled: !!isPostId,
    }
  )
}