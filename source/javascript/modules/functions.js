import {
  heroWidgetOne,
  heroWidgetOneInfo,
  heroWidgetThree,
  heroWidgetTwo,
  newSpan,
  searchBar,
} from "./elements";

const searchBarHandler = () => {
  if (searchBar.classList.contains("w-7")) {
    searchBar.classList.remove("w-7", "justify-end");
    searchBar.classList.add("w-39", "justify-between");
    setTimeout(() => {
      searchBar.insertAdjacentElement("afterbegin", newSpan);
    }, 150);
  } else if (searchBar.classList.contains("w-39")) {
    searchBar.classList.remove("w-39", "justify-between");
    searchBar.classList.add("w-7", "justify-end");
    searchBar.removeChild(newSpan);
  }
};

const heroWidgetThreeHandler = () => {
  heroWidgetThree.innerHTML = `<div class="widgetHover">
            <span class="text-accent-navBarLineHover font-bold text-xl m-3">1403</span>
            <span class="text-primary-white font-bold text-lg">اطلاعیه پذیرش داوطلبان امریه</span>
          </div>`;
};

const heroWidgetOneHandler = () => {
  // heroWidgetOne.innerHTML = `<div class="widgetHover">
  //           <span class="text-accent-navBarLineHover font-bold text-xl m-3">1403</span>
  //           <span class="text-primary-white font-bold text-lg">تقدیر از اساتید داشنگاه شریف</span>
  //         </div>`;

  heroWidgetOneInfo.classList.remove("hidden")
};

const heroWidgetTwoHandler = () => {
  heroWidgetTwo.innerHTML = `<div class="widgetHover">
            <span class="text-accent-navBarLineHover font-bold text-xl m-3">1403</span>
            <span class="text-primary-white font-bold text-lg">معرفی دانشکده ها</span>
          </div>`;
};
export {
  searchBarHandler,
  heroWidgetOneHandler,
  heroWidgetTwoHandler,
  heroWidgetThreeHandler,
};

{
  /* <div class="w-full h-full bg-primary-blue rounded-xl flex flex-col gap-1">
            <span class="text-accent-navBarLineHover font-bold text-xl m-3">1403</span>
            <span class="text-primary-white font-bold text-lg">اطلاعیه پذیرش داوطلبان امریه</span>
          </div> */
}
