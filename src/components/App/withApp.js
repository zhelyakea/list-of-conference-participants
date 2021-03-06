import { string, func, number, bool, array, object } from "prop-types";
import {
  compose,
  withHandlers,
  withState,
  lifecycle,
  setPropTypes,
  mapProps
} from "recompose";

import data from "../../data/data.json";
import getPages from "../../services/getPages";
import filterPage from "../../services/filterPage";

export default compose(
  //set state items view type "modules" or "list"
  withState("viewState", "changeView", "module"),
  //set fake fetch data list from json
  withState("dataList", "setList", []),
  //set count items on page
  withState("pageCount", "setCount", 0),
  //set array pages with min max parametrs of items
  withState("pages", "setPages", {}),
  //set list for render by selected count of items on page
  withState("dataPages", "setDataPages", []),
  //set selected page
  withState("selectedPage", "setSelectedPage", 0),
  withHandlers({
    changeViewHandler: ({ changeView }) => event => {
      changeView(event.target.dataset.view);
    },
    setSelectedPageHandler: ({
      setSelectedPage,
      setCount,
      setPages,
      pages,
      setDataPages,
      selectedPage,
      dataList
    }) => event => {
      let page = "";
      const pageType = event.target.dataset.page;
      const pageLen = Object.keys(pages).length;
      switch (pageType) {
        case "first":
          page = 0;
          break;
        case "last":
          page = pageLen - 1;
          break;
        case "prev":
          page = selectedPage > 0 ? selectedPage - 1 : null;
          break;
        case "next":
          page = selectedPage < pageLen - 1 ? selectedPage + 1 : null;
          break;
        default:
          page = event.target.dataset.page;
      }
      setSelectedPage(Number(page));
      if (pages.hasOwnProperty(page)) {
        setDataPages(filterPage(dataList, pages[page]));
      }
    },
    pageCountPlusHandler: ({
      setCount,
      pageCount,
      setPages,
      pages,
      dataPages,
      setDataPages,
      selectedPage,
      dataList
    }) => () => {
      setCount(pageCount + 1);
      setPages(getPages(data, pageCount + 1));
    },
    pageCountMinusHandler: ({
      setCount,
      pageCount,
      setPages,
      pages,
      setDataPages,
      selectedPage,
      dataList
    }) => () => {
      setCount(pageCount - 1);
      setPages(getPages(data, pageCount - 1));
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        setList,
        setCount,
        setSelectedPage,
        setPages,
        setDataPages
      } = this.props;
      setList(data);
      setCount(data.length);
      setPages(getPages(data, data.length));
      setSelectedPage(0);
      if (data.hasOwnProperty(0)) {
        setDataPages(data);
      }
    },
    componentWillReceiveProps(nextProps) {
      const { pages, pageCount, dataList, setDataPages } = this.props;
      if (pageCount !== nextProps.pageCount) {
        if (pages.hasOwnProperty(nextProps.selectedPage)) {
          setDataPages(
            filterPage(dataList, nextProps.pages[nextProps.selectedPage])
          );
        }
      }
    }
  }),
  mapProps(
    ({
      viewState,
      changeViewHandler,
      dataPages,
      pageCount,
      pageCountPlusHandler,
      pageCountMinusHandler,
      pages,
      selectedPage,
      setSelectedPageHandler
    }) => ({
      pageCount,
      dataPages,
      viewState,
      changeViewHandler,
      pageCountPlusHandler,
      pageCountMinusHandler,
      pages,
      selectedPage,
      setSelectedPageHandler,
      list: viewState === "list",
      module: viewState === "module"
    })
  ),
  setPropTypes({
    pages: object.isRequired,
    dataPages: array.isRequired,
    selectedPage: number.isRequired,
    pageCount: number.isRequired,
    list: bool.isRequired,
    module: bool.isRequired,
    viewState: string.isRequired,
    changeViewHandler: func.isRequired,
    pageCountPlusHandler: func.isRequired,
    pageCountMinusHandler: func.isRequired
  })
);
