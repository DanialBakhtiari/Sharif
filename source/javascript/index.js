import { heroWidgetOne, heroWidgetOneInfo, heroWidgetThree, heroWidgetThreeInfo, heroWidgetTwo, heroWidgetTwoInfo, newSpan, searchBar } from "./modules/elements";
import { heroWidgetOneHandler, heroWidgetThreeHandler, heroWidgetTwoHandler, searchBarHandler } from "./modules/functions";

searchBar.addEventListener("click",searchBarHandler)

heroWidgetOne.addEventListener("mouseenter",heroWidgetOneHandler)
heroWidgetOne.addEventListener("mouseleave",()=> {
    heroWidgetOneInfo.classList.add("hidden")

})
heroWidgetTwo.addEventListener("mouseenter",heroWidgetTwoHandler)
heroWidgetTwo.addEventListener("mouseleave",()=> {
    heroWidgetTwoInfo.classList.add("hidden")
})
heroWidgetThree.addEventListener("mouseenter",heroWidgetThreeHandler)
heroWidgetThree.addEventListener("mouseleave",()=>{
    heroWidgetThreeInfo.classList.add("hidden")
})