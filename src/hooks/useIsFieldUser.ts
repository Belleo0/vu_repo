import { useSelector, shallowEqual } from 'react-redux';

export default () => {
  const { principal } = useSelector((s: any) => s.auth, shallowEqual);
  if (!principal) return true;
  return principal?.company?.company_type === 'CONSTRUCTION';
};
