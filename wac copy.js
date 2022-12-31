const villians = [
  {
    name: ["Dr. Julius No", "Honey Ryder", "Sylvia Trench", "Miss Taro"],
    movie: "Dr. No",
    fate: ["was boiled to death in his own reactor coolant after a fight with Bond",
           "dazzled cinema audiences, stepping out of the Caribbean sea wearing a white bikini with a large hunting knife at her side.", "introduced herself in the opening scene of Dr. No as Trench. Sylvia Trench, which Bond then mimicked with his now trademark Bond. James Bond.", "invited Bond to her house for dinner, where she laid a trap for his assassination. However, Bond smelled something was fishy and got his men to arrest Miss Taro so he could lay a trap for the assassin."],
    pic:  ["url(./pics/drno.jpg)", "url(./pics/honey.jpg)", "url(./pics/sylvia.jpg)", "url(./pics/taro.jpg)"],
    audio: ["./auds/drno.mp3", "./auds/honey.m4a", "./auds/sylvia.m4a", , "./auds/taro.m4a"]
  }
  ,
  {
    name: ["Rosa Klebb", "Tatiana Romanova"],
    movie: "From Russia With Love",
    fate: ["was shot in the chest by Tatiana Romanova",
           "helped Bond steal a Lektor decoding machine, and the pair escaped on the Orient Express train."],
           pic:  ["url(./pics/klebb.jpg)", "url(./pics/tatiana.jpg)"],
    audio: ["./auds/klebb.m4a", "./auds/tatiana.m4a"]
  },
  {
    name: ["Auric Goldfinger", "Pussy Galore"],
    movie: "Goldfinger",
    fate: ["was sucked out of a depressurising plane through a shattered window",
            "was an original Ian Fleming character from the novel. Ms. Galore ran a flying circus of female pilots, who were hired by Auric Goldfinger to fly over Fort Knox and gas the soldiers, so that Goldfinger could break in to the gold vault."],
    pic:  ["url(./pics/gold.jpg)", "url(./pics/pussy.jpg)"],
    audio: ["./auds/gold.mp3", "./auds/pussy.mp3"]
  },
  {
    name: ["Emilio Largo", "Domino"],
    movie: "Thunderball",
    fate: ["was shot with a harpoon from a speargun fired by his mistress Domino",
           "was the mistress of SPECTRE agent Emilio Largo. Bond discovers that Largo had killed Domino's brother, and thinks he can use that fact to get her on his side. They meet underwater as Bond untraps Domino's flipper from the coral, and Bond manages to convince her to plot against Largo"],
    pic:  ["url(./pics/largo.png)", "url(./pics/domino.jpg)"],    
    audio: ["./auds/largo.m4a", "./auds/domino.m4a"]
  },
  {
    name: ["Blofeld (Donald Pleasence)", "Aki"],
    movie: "You Only Live Twice",
    fate: ["survives; albiet with a lower arm injury from Tanaka's throwing star.",
            "was a senior agent of the Japanese secret service, working directly under its leader Tiger Tanaka. She was confident and independent, and tricked Bond into walking over a trap door, which catapulted him down a steel slide leading to Tanaka's office."],
    pic:  ["url(./pics/blofeld.jpg)", "url(./pics/aki.jpg)"],   
    audio: ["./auds/blofeld.mp3", "./auds/aki.mp3"]
  },
  {
    name: ["Blofeld (Telly Savalas)", "Tracy di Vicenzo"],
    movie: "On Her Majesty's Secret Service",
    fate: ["survives. Aids in the assassination of Tracy di Vicenzo, Bond's newly married wife on their honeymoon.",
            "was the most important girl in Bond's life, becoming Mrs Tracy Bond by the end of the film she was killed with the help of Blofeld"],
    pic:  ["url(./pics/blofeld2.jpg)", "url(./pics/tracy.jpg)"],   
    audio: ["./auds/blofeld2.mp3", "./auds/tracy.mp3"]
  },
  {
    name: ["Blofeld (Charles Grey)", "Tiffany Case"],
    movie: "Diamonds are Forever",
    fate: ["is presumed dead", "was a diamond smuggler in part of a pipeline of smugglers that ultimately ended at Ernst Stavro Blofeld. "],
    pic:  ["url(./pics/blofeld3.jpg)", "url(./pics/tiffany.jpg)"],   
    audio: ["./auds/blo3.m4a", "./auds/tiffany.m4a"]
  },
  {
    name: ["Dr. Kananga/Mr.Big", "Solitaire"],
    movie: "Live and Let Die",
    fate: ["has his body inflate and explode after Bond forces a compressed-gas capsule down his throat. ",
          "was a psychic tarot card reader working for heroin baron Dr. Kananga. She predicted the movements of James Bond and other men who posed a threat to their operations"],
    pic:  ["url(./pics/mrbig.jpg)", "url(./pics/sol.jpg)"],   
    audio: ["./auds/mrbig.m4a", "./auds/sol.mp3"]
  },
  {
    name: ["Francisco Scaramanga", "Mary Goodnight"],
    movie: "The Man with the Golden Gun",
    fate: ["was shot in the chest by Bond in the Hall of Mirrors when Bond pretends to be a statue of himself.",
          "Mary Goodnight was Bond's assistant in Hong Kong, and previously his secretary in London. She helps Bond to locate Miss Anders, the girlfriend of hitman Scaramanga."],
    pic:  ["url(./pics/scar.jpg)", "url(./pics/mary.jpg)"],
    audio: ["./auds/scar.m4a", "./auds/mary.mp3"]
  },
  {
    name: ["Karl Stromberg", "Anya Amasova"],
    movie: "The Spy Who Loved Me",
    fate: ["was shot 4 times by Bond",
          "code name 'Triple X', was a KGB agent working under General Gogol. She had the same mission as Bond, to retrieve stolen microfilms for a submarine tracking system."],
    pic:  ["url(./pics/strom.jpg)", "url(./pics/anya.jpg)"],
    audio: ["./auds/strom.mp3", "./auds/anya.mp3"]
  },
  {
    name: ["Hugo Drax", "Corinne Dufour"],
    movie: "Moonraker",
    fate: ["was shot with poison dart gun and ejected into outer space, by Bond. ",
            "was Hugo Drax's personal assistant and pilot. She flew Bond over Drax's estate, giving him a guided tour of the Moonraker complex and flying him to meet Drax. After spending the night with Bond, Corinne revealed the location of Drax's safe, where Bond photographed secret documents. Drax discovered this, and Corinne was killed by Drax's vicious pack of dogs."],
    pic:  ["url(./pics/drax.jpg)", "url(./pics/corinne.jpg)"],
    audio: ["./auds/drax.m4a", "./auds/corinne.mp3"]
  },
  {
    name: ["Aristotle Kristatos", "Melina Havelock"],
    movie: "For Your Eyes Only",
    fate: ["was killed with a knife thrown by Milos Columbo. ",
            "was the daughter of two marine explorers who did salvage work for the British Secret Service. After her parents were assassinated by henchman Hector Gonzales, Melina found the hitman and killed him with a crossbow."],
    pic:  ["url(./pics/ari.jpg)", "url(./pics/melina.jpg)"],
    audio: ["./auds/ari.m4a", "./auds/melina.mp3"]
  },
  {
    name: ["Kamal Khan", "Octopussy"],
    movie: "Octopussy",
    fate: ["dies when his plane crashes into a mountain.",
          "ran an all-women floating island, the girls of which were acrobats for a circus that was a front for a jewellery smuggling operation. She was a partner in crime with Kamal Khan, who stole the jewellery for himself and tried to kill Octopussy. "],
    pic:  ["url(./pics/khan.jpg)", "url(./pics/octo.jpg)"],
    audio: ["./auds/khan.mp3", "./auds/octo.mp3"]
  },
  {
    name: ["Max Zorin", "Stacey Sutton"],
    movie: "A View to a Kill",
    fate: ["falls to his death from the top of the Golden Gate Bridge after a fight with Bond.",
          "inherited the Sutton Oil company, which megalomaniac Max Zorin tried to take over. Zorin offered Sutton $5 million for her shares in the company, which she refused."],
    pic:  ["url(./pics/zorin.jpg)", "url(./pics/stacey.jpg)"],
    audio: ["./auds/zorin.m4a", "./auds/stacey.mp3"]
  },
  {
    name: ["General Georgi Koskov", "Kara Milovy"],
    movie: "The Living Daylights",
    fate: ["was arrested and implied to be executed by Pushkin's government offscreen.",
          "was the girlfriend of Georgi Koskov, a traitor playing both sides in the cold war. Koskov pretended to defect to the West, and got Milovy to shoot blanks at him to make it look more real."],
    pic:  ["url(./pics/georgi.jpg)", "url(./pics/kara.jpg)"],
    audio: ["./auds/georgi.mp3", "./auds/kara.mp3"]
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
let gorv = 0;

const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
let ndx=0;
let bgidx=1;  // index into Bond Girls


/* FOR EACH VILLIAN CREATE A DIV ELEMENT WITH A CLASS OF VIL AND THE BACKGROUNDIMAGE SET */
function createGrid(){
  vilTrayEl.innerHTML=""
villians.forEach((villian) => {
  console.log(villian.name[gorv]);
  const vil = document.createElement("div");
  vil.classList.add("vil");
 /* vil.innerText = villian.name; */
  console.log(villian.pic[gorv]);
  vil.style.backgroundImage = villian.pic[gorv];

  vilTrayEl.append(vil);
  console.log('vilTrayEl = ' + vilTrayEl);
  vil.addEventListener("click", () => {
    clickedVillian = villian.name[gorv];
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
}


  // GET ARRAY INDEX OF CLICKED ITEM
  function checkVil(vil) {
    return vil.name[gorv] === clickedVillian;
  }
  

function snip(ndx) {
  const audio = new Audio (villians[ndx].audio[gorv]);
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




function girls(){
  gorv = 1;
  chosenVillianEl.innerText="Choose a Bond Girl.."
  createGrid();
}

function villiansBtn(){
  chosenVillianEl.innerText="Choose a Villian.."
  gorv = 0;
  createGrid();
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
  vilBlockEl.style.backgroundImage = villians[ndx].pic[gorv];
  hitPosition = randomSquare.id
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition){
      result++;
//      score.textContent = result
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
     result + ". In " + villians[ndx].movie + ", " + villians[ndx].name[gorv] + " " + villians[ndx].fate[gorv])

    mpopup.style.display = "block";
  }
}

// END GAME ACTION
