const villians = [
{
  name: "Dr. Julius No",
  movie: "Dr. No",
  fate: "was boiled to death in his own reactor coolant after a fight with Bond",
  pic: "url('./pics/drno.jpg')",
  audio: "./auds/drno.mp3"
},
{
  name: "Rosa Klebb",
  movie: "From Russia With Love",
  fate: "was shot in the chest by Tatiana Romanova",
  pic: "url('./pics/klebb.jpg')",
  audio: "./auds/klebb.m4a"
},
{
  name: "Auric Goldfinger",
  movie: "Goldfinger",
  fate: "was sucked out of a depressurising plane through a shattered window",
  pic: "url('./pics/gold.jpg')",
  audio: "./auds/gold.mp3"
},
{
  name: "Emilio Largo",
  movie: "Thunderball",
  fate: "was shot with a harpoon from a speargun fired by his mistress Domino",
  pic: "url('./pics/largo.png')",
  audio: "./auds/largo.m4a"
},
{
  name: "Blofeld (Donald Pleasence)",
  movie: "You Only Live Twice",
  fate: "survives; albiet with a lower arm injury from Tanaka's throwing star.",
  pic: "url('./pics/blofeld.jpg')",
  audio: "./auds/blofeld.mp3"
},
{
  name: "Blofeld (Telly Savalas)",
  movie: "On Her Majesty's Secret Service",
  fate: "survives. Aids in the assassination of Tracy di Vicenzo, Bond's newly married wife on their honeymoon.",
  pic: "url('./pics/blofeld2.jpg')",
  audio: "./auds/blofeld2.mp3"
},
{
  name: "Blofeld (Charles Grey)",
  movie: "Diamonds are Forever",
  fate: "is presumed dead",
  pic: "url('./pics/blofeld3.jpg')",
  audio: "./auds/blo3.m4a"
},
{
  name: "Dr. Kananga/Mr.Big",
  movie: "Live and Let Die",
  fate: "has his body inflate and explode after Bond forces a compressed-gas capsule down his throat. ",
  pic: "url('./pics/mrbig.jpg')",
  audio: "./auds/mrbig.m4a"
},
{
  name: "Francisco Scaramanga",
  movie: "The Man with the Golden Gun",
  fate: "was shot in the chest by Bond in the Hall of Mirrors when Bond pretends to be a statue of himself.",
  pic: "url('./pics/scar.jpg')",
  audio: "./auds/scar.m4a"
},
{
  name: "Karl Stromberg",
  movie: "The Spy Who Loved Me",
  fate: "was shot 4 times by Bond",
  pic: "url('./pics/strom.jpg')",
  audio: "./auds/strom.mp3"
},
{
  name: "Hugo Drax",
  movie: "Moonraker",
  fate: "was shot with poison dart gun and ejected into outer space, by Bond. ",
  pic: "url('./pics/drax.jpg')",
  audio: "./auds/drax.m4a"
},
{
  name: "Aristotle Kristatos",
  movie: "For Your Eyes Only",
  fate: "was killed with a knife thrown by Milos Columbo. ",
  pic: "url('./pics/ari.jpg')",
  audio: "./auds/ari.m4a"
},
{
  name: "Kamal Khan",
  movie: "Octopussy",
  fate: "dies when his plane crashes into a mountain. ",
  pic: "url('./pics/khan.jpg')",
  audio: "./auds/khan.mp3"
},
{
  name: "Max Zorin",
  movie: "A View to a Kill",
  fate: "falls to his death from the top of the Golden Gate Bridge after a fight with Bond. ",
  pic: "url('./pics/zorin.jpg')",
  audio: "./auds/zorin.m4a"
},
{
  name: "General Georgi Koskov",
  movie: "The Living Daylights",
  fate: "was arrested and implied to be executed by Pushkin's government offscreen. ",
  pic: "url('./pics/georgi.jpg')",
  audio: "./auds/georgi.mp3"
}
];

let vilTrayEl = document.getElementById('villian-tray');
let clickedVillian = "";
let chosenVillianEl = document.getElementById("chosen-villian");

let chosenDifficultyEl = document.getElementById("chosen-difficulty");

// Select modal
let mpopup = document.getElementById('mpopupBox');

let mpopupBodyEl = document.querySelector('.modal-body');

let timerEl = document.getElementById('timer')
// Select close action element
let close = document.querySelector(".close");
console.log(close)



let millisecs = 1000;

const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
let ndx=0;



/* FOR EACH VILLIAN CREATE A DIV ELEMENT WITH A CLASS OF VIL AND THE BACKGROUNDIMAG SET */
villians.forEach((villian) => {
  console.log(villian.name);
  const vil = document.createElement("div");
  vil.classList.add("vil");
 /* vil.innerText = villian.name; */
  vil.style.backgroundImage = villian.pic;

  vilTrayEl.append(vil);
  console.log(vilTrayEl);
  vil.addEventListener("click", () => {
    console.log ("clicked on " +  villian.name + " want to add logic to play sound");
    clickedVillian = villian.name;
    ndx = villians.findIndex(checkVil);
    // play audio of villian clicked
    snip(ndx);
    chosenVillianEl.textContent = "You chose " + clickedVillian;
    const startEl = document.getElementById('start')
    startEl.disabled = false;
   

  });





  /*
  btn.addEventListener("click", () => {
    console.log (location.loc);
    rNum = 1;
    rNum = locations.map(x => x.loc).indexOf(location.loc)
    navbar.classList.toggle("active");
    ham.classList.toggle("active");
    body.style.backgroundImage = locations[rNum].img;
    setInterval(updateClock, 1000);
  });*/

//   document.body.appendChild(btn);
});


  // GET ARRAY INDEX OF CLICKED ITEM
  function checkVil(vil) {
    return vil.name === clickedVillian;
  }
  

function snip(ndx) {
  const audio = new Audio (villians[ndx].audio);
  audio.play(); 
}

function jethro(){
  console.log("you clicked jethro")
  chosenDifficultyEl.textContent = "You chose Jethro";
  millisecs = 1500;
  const audio = new Audio ('./auds/jethro.m4a');
  audio.play(); 
}

function jessica(){
  chosenDifficultyEl.textContent = "You chose Jessica";
  millisecs = 1000;
  const audio = new Audio ('./auds/jessica.m4a');
  audio.play(); 
 
}

function james(){
  chosenDifficultyEl.textContent = "You chose Bond, James Bond";
  millisecs = 500;
  const audio = new Audio ('./auds/bond.m4a');
  audio.play(); 
 
}



// GAME ACTION
let result = 0
let hitPosition
let currentTime = 10
let timerId = null;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('vilblock');
    square.style.backgroundImage = "";
  })

  let randomSquare = squares[Math.floor(Math.random()*squares.length)];

  randomSquare.classList.add('vilblock'); 
  vilBlockEl = document.querySelector(".vilblock")
  vilBlockEl.style.backgroundImage = villians[ndx].pic;
  hitPosition = randomSquare.id
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition){
      result++;
      score.textContent = result
      hitPosition = null
    }
  });
})


// Close modal once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
};

/*
// Close modal when user clicks outside of the modal box
window.onclick = function(event) {
  if (event.target == mpopup) {
      mpopup.style.display = "none";
  }
};*/


function moveMole() {
   timerId = setInterval(randomSquare, millisecs);
}


var timerStarted = false;
var timerRunning = false;
var seconds = 10;
var clickAmount = 0;
var timer;

function startGame() {
  console.log("Starting game")
  result = 0;
  currentTime = 10;
  timerStarted = false;
  if (!timerStarted) {  
    startTimer();
    moveMole();
  }

}

function startTimer() {
  timerStarted = true;
  timerRunning = true;
  console.log("starting timer");
	timer = setInterval(countDown,1000);
}


function countDown(){
  console.log("entered countdown")
  currentTime--;
  timerEl.textContent = currentTime;
  if (currentTime==0){
    console.log("Time = zero");
    clearInterval(timer)
    clearInterval(timerId)
     mpopupBodyEl.textContent = ('GAME OVER your score was ' +
     result + ". In " + villians[ndx].movie + ", " + villians[ndx].name + " " + villians[ndx].fate)

    mpopup.style.display = "block";
  }
}

// END GAME ACTION




// Open modal once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
};




