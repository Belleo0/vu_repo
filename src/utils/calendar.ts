export enum CalendarTypeState {
  DAY,
  WEEK,
}

export const days = ['일', '월', '화', '수', '목', '금', '토'];

export const generateWeekData = (date: Date) => {
  const day = date.getDay();

  const week = new Array(7)
    .fill(null)
    .map((v, i) => new Date(date.valueOf() + 86400000 * (i - day)));

  return week;
};

export const convertString = (v: any) => v.toString().padStart(2, '0');

const getWeekNumber = (date = new Date()) => {
  const dateFrom = new Date(date);
  const currentDate = dateFrom.getDate();
  const startOfMonth = new Date(dateFrom.setDate(1));
  const weekDay = startOfMonth.getDay();
  return parseInt(((weekDay - 1 + currentDate) / 7) as unknown as string) + 1;
};

const getWeekCountOfMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const lastDate = new Date(year, month + 1, 0);

  return getWeekNumber(lastDate);
};

export const generateWeekInfo = (type: CalendarTypeState, dates: any[]) => {
  if (!dates || dates.length === 0) return null;

  const year = dates[0].getFullYear();
  const realMonth = dates[0].getMonth() + 1;
  const day = dates[0].getDate();

  if (type === CalendarTypeState.DAY) {
    return `${year}년 ${convertString(realMonth)}월 ${convertString(day)}일`;
  } else {
    const realWeekNum = getWeekNumber(dates[0]);
    const maxWeekNum = getWeekCountOfMonth(dates[0]);
    console.log('maxWeekNum', dates[0], maxWeekNum);

    const weekNum = realWeekNum === maxWeekNum ? 1 : realWeekNum;
    const month = realWeekNum === maxWeekNum ? realMonth + 1 : realMonth;

    return `${year}년 ${convertString(month)}월 ${weekNum}주차`;
  }
};

export const isDateToday = (date: Date) => {
  const otherDate = new Date(date);
  const todayDate = new Date();

  if (
    otherDate.getDate() === todayDate.getDate() &&
    otherDate.getMonth() === todayDate.getMonth() &&
    otherDate.getFullYear() === todayDate.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
};
