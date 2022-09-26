export const makeComma = (v: number) => {
  return v?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') || '';
};

export const addHyphen = (v: any) => {
  return v?.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3');
};
