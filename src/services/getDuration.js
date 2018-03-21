export const getDuration = string => {
  const date = new Date(null);
  date.setSeconds(string);
  const formatedDate = date
    .toISOString()
    .substr(11, 8)
    .split(":");

  return `${formatedDate[0]} ч ${formatedDate[1]} мин ${formatedDate[2]} сек`;
};
