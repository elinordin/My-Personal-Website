//--------------------------The navbar font-changing function--------------------------
const sections = [ //Creates an array with the sections
  document.getElementById("homepage"),
  document.getElementById("portfolio"),
  document.getElementById("about"),
  document.getElementById("feedback")
];

const navItems = { //Creates an object with every section as a property
  homepage: document.getElementById("homepageNav"),
  portfolio: document.getElementById("portfolioNav"),
  about: document.getElementById("aboutNav"),
  feedback: document.getElementById("feedbackNav")
};

const whereToLook = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}; //i.e look in on the displayed area (viewport) of webpage

function whatToDo(sections, observer) { //Function that takes in the sections and oserver
  sections.forEach((section) => { //For each section in sections
    if (section.isIntersecting){ //If section is displayed (isIntersecting property gives true or false)
      const navItem = navItems[section.target.id]; //Target the navItem whos section is being displayed
      navItem.classList.add("active-nav"); //Add class active-nav to that NavItem
      Object.values(navItems).forEach((item) => { //Reevaluate if navItem's section is still displayed
        if (item != navItem){ //If section of navItem is not displayed
          item.classList.remove("active-nav"); //Remove class of active-nav
        }
      });
    }
  });
}

const observer = new IntersectionObserver(whatToDo, whereToLook); //Creates observer

sections.forEach((section) => observer.observe(section)); //For each section in sections - oserve



//----------------------------The flipping boxes function----------------------------
let bucketBoxes = document.querySelectorAll(".overlapping-box"); //Collects all overlapping boxes in an array

for (let i = 0; i < bucketBoxes.length; i++){ //For each box
  bucketBoxes[i].addEventListener("click", function(){ //Listen for a click and execute anonymous function below
    let idOfBox = "bucket" + (i+1); //Puts together a string of the ID of the clicked box
    let clickedBox = document.getElementById(idOfBox); //Chose the right box to remove
    clickedBox.classList.add("box-animation"); //Applying the animation before the box disappering
    setTimeout(function(){ //Set a timeOut function to remove the class after 0.6 seconds
      clickedBox.remove(); //Remove the clicked box (entire element)
    },600);
  });
}
