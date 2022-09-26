import { useSelector, shallowEqual } from 'react-redux';

export default () => {
  const { selectedSpaceInfo } = useSelector((s: any) => s.space, shallowEqual);
  return selectedSpaceInfo;
};
