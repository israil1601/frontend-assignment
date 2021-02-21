export const sortDataByTimestamp = (data, order) =>
  data.sort((item1, item2) => {
    const multiplier = order === "asc" ? 1 : -1;
    return (item1.timestamp - item2.timestamp) * multiplier;
  });

export const getDateFromTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
};
