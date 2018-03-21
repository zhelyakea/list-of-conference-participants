export const getPages = (data, pageCount) => {
  let obj = {};
  let floatCount = data.length / pageCount;
  let intPath = parseInt(floatCount.toString().split(".")[0], 10);
  for (let i = 0; i <= intPath; i++) {
    let path = "";
    let min = 0;
    let max = 0;
    if (i === intPath) {
      min = i * pageCount;
      max = data.length;
      path = { min, max };
      if (min !== max) obj[i] = path;
    } else if (i < intPath) {
      min = i * pageCount;
      max = pageCount * (i + 1);
      path = { min, max };
      obj[i] = path;
    }
  }
  return obj;
};
export default getPages;
