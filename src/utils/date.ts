export const convertTime = (dateString: string, withoutSpace?: boolean) => {
  const date = new Date(dateString);
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour >= 12 ? '오후' : '오전'}${withoutSpace ? '' : ' '}${
    hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
  }시 ${minute === 0 ? '' : `${minute.toString().padStart(2, '0')}분 `}`;
};
