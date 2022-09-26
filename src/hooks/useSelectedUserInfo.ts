import { useSelector, shallowEqual } from 'react-redux';

export default () => {
  const { selectedUserInfo } = useSelector((s: any) => s.chat, shallowEqual);
  return selectedUserInfo;
};
