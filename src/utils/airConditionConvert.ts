const goodValue = { label: '좋음', color: '#258fff' };
const normalValue = { label: '보통', color: '#00b448' };
const badValue = { label: '나쁨', color: '#ef0000' };
const veryBadValue = { label: '매우나쁨', color: '#ef0000' };

export const pm2Convert = (value: number) => {
  if (value <= 15) {
    return goodValue;
  } else if (value <= 35) {
    return normalValue;
  } else if (value <= 75) {
    return badValue;
  } else {
    return veryBadValue;
  }
};

export const pm10Convert = (value: number) => {
  if (value <= 30) {
    return goodValue;
  } else if (value <= 80) {
    return normalValue;
  } else if (value <= 150) {
    return badValue;
  } else {
    return veryBadValue;
  }
};
