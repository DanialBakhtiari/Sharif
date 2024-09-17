import {
  heroWidgetOneInfo,
  heroWidgetThreeInfo,
  heroWidgetTwoInfo,
  newSpan,
  searchBar,
} from "./elements";

const searchBarHandler = () => {
  if (searchBar.classList.contains("searchBarClose")) {
    searchBar.classList.remove("searchBarClose");
    searchBar.classList.add("searchBarOpen");
    setTimeout(() => {
      searchBar.insertAdjacentElement("afterbegin", newSpan);
    }, 150);
  } else if (searchBar.classList.contains("searchBarOpen")) {
    searchBar.classList.remove("searchBarOpen");
    searchBar.classList.add("searchBarClose");
    searchBar.removeChild(newSpan);
  }
};

const heroWidgetThreeHandler = () => {
  heroWidgetThreeInfo.classList.remove("hidden");
};

const heroWidgetOneHandler = () => {
  heroWidgetOneInfo.classList.remove("hidden");
};

const heroWidgetTwoHandler = () => {
  heroWidgetTwoInfo.classList.remove("hidden");
};
export {
  searchBarHandler,
  heroWidgetOneHandler,
  heroWidgetTwoHandler,
  heroWidgetThreeHandler,
};

