import { heroWidgetOne, heroWidgetOneInfo, heroWidgetThree, heroWidgetTwo, newSpan, searchBar } from "./modules/elements";
import { heroWidgetOneHandler, heroWidgetThreeHandler, heroWidgetTwoHandler, searchBarHandler } from "./modules/functions";

searchBar.addEventListener("click",searchBarHandler)

heroWidgetOne.addEventListener("mouseenter",heroWidgetOneHandler)
heroWidgetOne.addEventListener("mouseleave",()=> {
    heroWidgetOneInfo.classList.add("hidden")

})
heroWidgetTwo.addEventListener("mouseenter",heroWidgetTwoHandler)
// heroWidgetTwo.addEventListener("mouseleave",()=> {
//     heroWidgetTwo.innerHTML= ``
// })
heroWidgetThree.addEventListener("mouseenter",heroWidgetThreeHandler)
// heroWidgetThree.addEventListener("mouseleave",()=>{
//     heroWidgetThree.innerHTML=``
// })