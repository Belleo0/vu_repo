import { useSelector, shallowEqual } from 'react-redux';

export default () => {
  const { principal, isFieldView } = useSelector(
    (s: any) => s.auth,
    shallowEqual,
  );
  if (!principal) return isFieldView;
  return principal?.company?.company_type === 'CONSTRUCTION';
};
