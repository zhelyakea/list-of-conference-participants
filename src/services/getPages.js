export const getPages = (data, pageCount) => {
  let obj = {};
  let floatCount = data.length / pageCount;
  let intPath = parseInt(floatCount.toString().split(".")[0], 10);
  for (let i = 0; i <= intPath; i++) {
    let min = 0;
    let max = 0;
    if (i === intPath) {
      min = i * pageCount;
      max = data.length;
      if (min !== max) {
        obj[i] = { min, max };
      }
    } else if (i < intPath) {
      min = i * pageCount;
      max = pageCount * (i + 1);
      obj[i] = { min, max };
    }
  }
  return obj;
};
export default getPages;
