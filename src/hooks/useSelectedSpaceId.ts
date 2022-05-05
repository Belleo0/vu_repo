import { useSelector, shallowEqual } from 'react-redux';

export default () => {
  const { selectedSpaceId } = useSelector((s: any) => s.space, shallowEqual);
  return selectedSpaceId;
};
