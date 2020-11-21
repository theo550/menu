let back = document.querySelectorAll('.back')[0]
let news = document.querySelectorAll('.news')[0]
let about = document.querySelectorAll('.about')[0]
let team = document.querySelectorAll('.team')[0]
let contact = document.querySelectorAll('.contact')[0]

let x = 0;

let container = document.querySelectorAll('.container')[0];
let cross = document.querySelectorAll('.cross')[0];

let hamburger = document.querySelectorAll('.fas')[0];


news.addEventListener('mouseover', backMaker);
about.addEventListener('mouseover', backMaker);
team.addEventListener('mouseover', backMaker);
contact.addEventListener('mouseover', backMaker);

news.addEventListener('mouseout', hiddenMaker);
about.addEventListener('mouseout', hiddenMaker);
team.addEventListener('mouseout', hiddenMaker);
contact.addEventListener('mouseout', hiddenMaker);

hamburger.addEventListener('click', displayMenu);
cross.addEventListener('click', crossMenu);


function backMaker() {
  back.innerHTML = this.innerHTML;
}

function hiddenMaker() {
  back.innerHTML = "";
}

function displayMenu() {
  if (x === 0) {
    
    container.style.marginLeft = "0%"
    cross.style.opacity = "100%"
    hamburger.style.opacity = "0%"
    x ++
  }
}

function crossMenu() {
  if (x !== 0) {
    container.style.marginLeft = "-200%"
    hamburger.style.opacity = "100%"
    cross.style.opacity = "0%"
    x = 0;
  }
}
