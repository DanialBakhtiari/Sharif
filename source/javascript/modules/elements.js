const searchBar = document.getElementById("searchBar");
const newSpan = document.createElement("span");
newSpan.className = "mr-2 text-primary-black/70 text-xs";
newSpan.textContent = "جستجو...";
const heroWidgetOne = document.getElementById("heroWidgetOne");
// Create the outer div
const heroWidgetOneHover = document.createElement('div');
heroWidgetOneHover.className = 'w-full h-full bg-primary-blue rounded-xl flex flex-col gap-1';

// Create the first span (for year 1403)
const widgetOneInfo = document.createElement('span');
widgetOneInfo.className = 'text-accent-navBarLineHover font-bold text-xl m-3';
widgetOneInfo.textContent = '1403';

// Create the second span (for the announcement)
const widgetTwoInfo = document.createElement('span');
widgetTwoInfo.className = 'text-primary-white font-bold text-lg';
widgetTwoInfo.textContent = 'اطلاعیه پذیرش داوطلبان امریه';

// Append the spans to the div
heroWidgetOneHover.appendChild(widgetOneInfo);
heroWidgetOneHover.appendChild(widgetTwoInfo);

const heroWidgetTwo = document.getElementById("heroWidgetTwo");
const heroWidgetThree = document.getElementById("heroWidgetThree");

export { searchBar, newSpan, heroWidgetThree, heroWidgetTwo, heroWidgetOne,heroWidgetOneHover };
