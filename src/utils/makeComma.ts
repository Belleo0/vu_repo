export const makeComma = (v: number) => {
  return v?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') || '';
};
