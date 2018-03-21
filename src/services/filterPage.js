export const filterPage = (dataList, selectedPage) =>
  dataList.filter(
    (value, index) => index >= selectedPage.min && index < selectedPage.max
  );
export default filterPage;
