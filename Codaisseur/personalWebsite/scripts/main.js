// switching panels begins

var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for (let i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
};

function setTabHandler(tab, tabPos) {

  tab.onclick = function() {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for (let i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  };

}; // switching panels ends

var proInput = [
  "I've worked with both corporates and startups. (but prefer startups)",
  "Having worked in the financial sector in Bulgaria, I realized banking and financial markerts don't fit my personality.",
  "After 2 years in NL, I started working with technology startups in Amsterdam and around, both as an employee and a consultant.",
  "So far, I worked in the following areas: 3D Printing Software, Ambient Intelligence (IoT+AI), Agritech/AgTech, & more.",
  "I always try to stay as much closer to the development team as possible. Understanding each other through clear communication is the key.",
  "I love tools! Everything that has buttons and graphs. I am a (power) user of Atlassian, Google and multiple social media, analytics, and CRM tools.",
  "I really enjoy and benefit from cross-department roles where I can meet and talk to different people on different positions.",
  "Understanding the bigger business picture is what I first try to get into when on a new position."
];

var eduInput = [
  "I have two Bachelor degrees.",
  "I have a BSc in Industry Economics from UNWE, Sofia.",
  "I also have BBA in Marketing from Saxion Hogeschool, Deventer.",
  "The next useful education I will get is from Codaisseur.",
  "I start to believe more and more in informal education, one that's outside of a university.",
  "I believe the professions of the future will require some (substantial) level of programming skills. Hence, attending the Codaisseur Academy."
];

var persInput = [
  "Originally, I am from Sofia, Bulgaria - born and raised.",
  "I live and work in the Netherlands for the past 6 years already - yaaay!",
  "I moved a lot within NL. I had lived in Deventer, Enschede and Rotterdam so far.",
  "I live in Amsterdam for the past two years, together with my girlfriend.",
  "I enjoy good cuisine. Recently, I appreciate the sea food even more.",
  "When it comes to physical activity, I either go to the gym or do some Freeletics at home.",
  "This year I am not smoking weed and/or hash."
];

var allInput = [proInput, eduInput, persInput];

var buttonPro = document.querySelector(".proButton");
var buttonEdu = document.querySelector(".eduButton");
var buttonPers = document.querySelector(".persButton");

var allButtons = [buttonPro, buttonEdu, buttonPers];

var proArticle = document.querySelector(".proArticle .everyDiv");
var eduArticle = document.querySelector(".eduArticle .everyDiv");
var persArticle = document.querySelector(".persArticle .everyDiv");

var allArticles = [proArticle, eduArticle, persArticle];

function randomizer(inputCategory) { // randomizer function begins
  var finalResult = [];
  for (let i = 0; i < 1; i++) {
    var fact = inputCategory.splice(Math.floor(Math.random() * inputCategory.length), 1)[0];
    finalResult.push(fact);
  };
  if (finalResult[0] !== undefined) {
    console.info(finalResult);
    return finalResult[0];
  } else {
    var message = "That was all! If you want to read it again just refresh the page. ;)";
    return message;
  };
}; //randomizer function ends

for (let i = 0; i < 99; i++) {
  var para = document.createElement("p");
  para.setAttribute("class", "Div");
  allButtons[i].onclick = function() {
    allArticles[i].textContent = " ";
    para.textContent = " ";
    var rand = randomizer(allInput[i]);
    para.textContent = rand;
    allArticles[i].append(para);
  };
};

/* // ne mi raboti toggle-a na snimkata
var seeMe = document.querySelector(".seeMeButton");

seeMe.onclick = function() {
  var myImage = document.querySelector(".profile-image");
  if (myImage.getAttribute("display") === "none") {
    myImage.getAttribute("display") = "block";
  } else {
    myImage.getAttribute("display") = "none";
  };
}; */
