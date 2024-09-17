import { heroWidgetOne, newSpan, searchBar } from "./modules/elements";
import { heroWidgetOneHandler, searchBarHandler } from "./modules/functions";
console.log(heroWidgetOne);
searchBar.addEventListener("click",searchBarHandler)
heroWidgetOne.addEventListener("mouseenter",heroWidgetOneHandler)