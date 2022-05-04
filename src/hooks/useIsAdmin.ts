import { useSelector, shallowEqual } from 'react-redux';

export default () => {
  const { principal } = useSelector((s) => s.auth, shallowEqual);
  return principal.type === 'A';
};
