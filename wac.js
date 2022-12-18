const villians = [
  {
    name: ["Dr. Julius No", "Honey Ryder", "Sylvia Trench", "Miss Taro", "Dr. No"],
    movie: "Dr. No",
    fate: ["was boiled to death in his own reactor coolant after a fight with Bond",
           "dazzled cinema audiences, stepping out of the Caribbean sea wearing a white bikini with a large hunting knife at her side.", "introduced herself in the opening scene of Dr. No as Trench. Sylvia Trench, which Bond then mimicked with his now trademark Bond. James Bond.", "invited Bond to her house for dinner, where she laid a trap for his assassination. However, Bond smelled something was fishy and got his men to arrest Miss Taro so he could lay a trap for the assassin.", "arrives in Jamaica to investigate the suspected murder of a fellow agent and his secretary, James Bond eludes several attempts on his life. With the help of CIA agent Felix Leiter and local fisherman Quarrel, Bond follows the sinister trail of Dr. No to his island Crab Key."],
    pic:  ["url(./pics/drno.jpg)", "url(./pics/honey.jpg)", "url(./pics/sylvia.jpg)", "url(./pics/taro.jpg)", "url(./pics/bdrno.jpg)"],
    idx: 0,
    audio: ["./auds/drno.mp3", "./auds/honey.m4a", "./auds/sylvia.m4a", "./auds/taro.m4a", "./auds/bdrno.m4a"]
  }
  ,
  {
    name: ["Rosa Klebb", "Tatiana Romanova", "From Russia With Love"],
    movie: "From Russia With Love",
    fate: ["was shot in the chest by Tatiana Romanova",
           "helped Bond steal a Lektor decoding machine, and the pair escaped on the Orient Express train.", "is assigned by his superior M to help a young Russian girl Tatiana Romanova, who has declared her desire to defect from her job as a clerk in the Russian embassy in Istanbul with an invaluable Lektor cipher machine. "],
    pic:  ["url(./pics/klebb.jpg)", "url(./pics/tatiana.jpg)", "url(./pics/brussia.jpg)"],
    idx: 0,       
    audio: ["./auds/klebb.m4a", "./auds/tatiana.m4a", "./auds/brussia.m4a"]
  },
  {
    name: ["Auric Goldfinger", "Pussy Galore", "Jill Masterson", "Goldfinger"],
    movie: "Goldfinger",
    fate: ["was sucked out of a depressurising plane through a shattered window",
            "was an original Ian Fleming character from the novel. Ms. Galore ran a flying circus of female pilots, who were hired by Auric Goldfinger to fly over Fort Knox and gas the soldiers, so that Goldfinger could break in to the gold vault.", "was killed by Goldfinger's henchman Oddjob, in revenge for her betrayal. Bond awoke to find her covered from head to toe in gold paint.", "is captured by Goldfinger’s huge manservant Oddjob, and almost killed by a deadly laser beam. Drugged, he finds himself on Goldfinger’s private jet being flown to America by Pussy Galore. Bond wins overs Pussy and she helps thwart Goldfinger’s plot to rob Fort Knox."],
    pic:  ["url(./pics/gold.jpg)", "url(./pics/pussy.jpg)", "url(./pics/jill.jpg)", "url(./pics/bgold.jpg)"],
    idx: 0,
    audio: ["./auds/gold.mp3", "./auds/pussy.m4a", "./auds/jill.m4a", "./auds/bgold.m4a"]
  },
  {
    name: ["Emilio Largo", "Domino", "Fiona Volpe", "Thunderball"],
    movie: "Thunderball",
    fate: ["was shot with a harpoon from a speargun fired by his mistress Domino",
           "was the mistress of SPECTRE agent Emilio Largo. Bond discovers that Largo had killed Domino's brother, and thinks he can use that fact to get her on his side. They meet underwater as Bond untraps Domino's flipper from the coral, and Bond manages to convince her to plot against Largo", "met her end while dancing with Bond; a henchman tried to shoot Bond in the back, but he quickly spun round and the bullet killed Fiona instead.", "contacts Domino, and sees her connection to Emilio Largo, Bond and his team hunt for the bombs on board Largo’s yacht, the Disco Volante, and at his villa, Palmyra, but without success. After dispatching SPECTRE agent Fiona Volpe, Bond enlists the help of Domino by showing her proof that Largo killed her brother. "],
    pic:  ["url(./pics/largo.png)", "url(./pics/domino.jpg)", "url(./pics/fiona.jpg)", "url(./pics/bthunderball.jpg)"],    
    idx: 0,
    audio: ["./auds/largo.m4a", "./auds/domino.m4a",, "./auds/fiona.m4a", "./auds/bthunderball.m4a"]
  },
  {
    name: ["Blofeld (Donald Pleasence)", "Aki", "Kissy Suzuki", "Helga Brandt", "You Only Live Twice"],
    movie: "You Only Live Twice",
    fate: ["survives; albiet with a lower arm injury from Tanaka's throwing star.",
            "was a senior agent of the Japanese secret service, working directly under its leader Tiger Tanaka. She was confident and independent, and tricked Bond into walking over a trap door, which catapulted him down a steel slide leading to Tanaka's office.", "was a ninja working for the head of the Japanese secret service, Tiger Tanaka. She had a mock wedding with James Bond, who underwent surgery to disguise himself as a Japanese fisherman, so that the pair could explore a quiet village without being noticed.", "was a SPECTRE henchwoman who pretended to fall in love with Bond and switch to his side, only to try and kill him the next morning. For failing to kill Bond, Brandt is killed by head of SPECTRE Blofeld, who drops her into a pool of piranha fish.", "becomes Japanese in appearance, trains with Tanaka’s ninjas, and marries Kissy Suzuki."],
    pic:  ["url(./pics/blofeld.jpg)", "url(./pics/aki.jpg)", "url(./pics/kissy.jpg)",  "url(./pics/helga.jpg)", "url(./pics/btwice.jpg)"],   
    idx: 0,
    audio: ["./auds/blo.m4a", "./auds/aki.m4a", "./auds/kissy.m4a", "./auds/helga.m4a", "./auds/btwice.m4a"]
  },
  {
    name: ["Blofeld (Telly Savalas)", "Tracy di Vicenzo", "On Her Majesty's Secret Service"],
    movie: "On Her Majesty's Secret Service",
    fate: ["survives. Aids in the assassination of Tracy di Vicenzo, Bond's newly married wife on their honeymoon.",
            "was the most important girl in Bond's life, becoming Mrs Tracy Bond by the end of the film she was killed with the help of Blofeld", "finds that Blofeld is brainwashing a group of women to act as his secret agents of biological warfare so that he can blackmail world powers. Bond infiltrates Piz Gloria disguised as Sir Hilary Bray of the College of Arms. When his real identity is discovered, Bond escapes and reunites with Tracy, but she is captured by Blofeld after being caught in an avalanche."],
    pic:  ["url(./pics/blofeld2.jpg)", "url(./pics/tracy.jpg)", "url(./pics/bsecret.jpg)"],   
    idx: 0,
    audio: ["./auds/blofeld2.mp3", "./auds/tracy.m4a", "./auds/bsecret.m4a"]
  },
  {
    name: ["Blofeld (Charles Grey)", "Tiffany Case", "Plenty O'Toole", "Diamonds are Forever"],
    movie: "Diamonds are Forever",
    fate: ["is presumed dead", "was a diamond smuggler in part of a pipeline of smugglers that ultimately ended at Ernst Stavro Blofeld.", "was a gold digger from Las Vegas. She helped a man gamble at the craps table, but when he lost all of his money, she lost interest. She turned to leave, but went back after hearing James Bond ask for $10,000 in chips.", "poses as criminal Peter Franks and meets Tiffany Case, a glamorous gemstone smuggler. Bond and Tiffany smuggle the diamonds to Las Vegas, where Bond suspects that reclusive industrialist Willard Whyte is behind the conspiracy."],
    pic:  ["url(./pics/blofeld3.jpg)", "url(./pics/tiffany.jpg)", "url(./pics/plenty.jpg)", "url(./pics/bdiamonds.jpg)"],   
    idx: 0,
    audio: ["./auds/blo3.m4a", "./auds/tiffany.m4a", "./auds/plenty.m4a", "./auds/bdiamonds.m4a"]
  },
  {
    name: ["Dr. Kananga/Mr.Big", "Solitaire", "Rosie Carver", "Miss Caruso", "Live and Let Die"],
    movie: "Live and Let Die",
    fate: ["has his body inflate and explode after Bond forces a compressed-gas capsule down his throat. ",
          "was a psychic tarot card reader working for heroin baron Dr. Kananga. She predicted the movements of James Bond and other men who posed a threat to their operations", "was an inept and incompetent double agent, working for the CIA and for heroin baron Dr. Kananga.", "was an agent of the Italian Secret Service. She was asleep with Bond at his home when, just before 6am, the doorbell rang. Bond answered the door to find M, who announced an urgent mission.", "follows leads to New Orleans, then to San Monique, where he is aided by double agent Rosie Carver. After freeing Kananga’s girlfriend, Solitaire, a seer who foretells the future with Tarot cards, Bond discovers that Kananga and Mr. Big are one and the same. "],
    pic:  ["url(./pics/mrbig.jpg)", "url(./pics/sol.jpg)", "url(./pics/rosie.jpg)", "url(./pics/caruso.jpg)", "url(./pics/blive.jpg)"],   
    idx: 0,
    audio: ["./auds/mrbig.m4a", "./auds/sol.mp3", "./auds/rosie.mp3", "./auds/caruso.mp3", "./auds/blive.m4a"]
  },
  {
    name: ["Francisco Scaramanga", "Mary Goodnight", "Andrea Anders", "The Man with the Golden Gun"],
    movie: "The Man with the Golden Gun",
    fate: ["was shot in the chest by Bond in the Hall of Mirrors when Bond pretends to be a statue of himself.",
          "Mary Goodnight was Bond's assistant in Hong Kong, and previously his secretary in London. She helps Bond to locate Miss Anders, the girlfriend of hitman Scaramanga.", "was the girlfriend of Francisco Scaramanga, the $1 million a shot assassin, the man with the golden gun. She sent a golden bullet to MI6 with 007 engraved on the side, so that it would be thought that Scaramanga had Bond on his hit list.", "receives a gold bullet inscribed with “007”, signifying he has been targeted by high-class professional assassin Francisco Scaramanga known as “The Man with the Golden Gun”."],
    pic:  ["url(./pics/scar.jpg)", "url(./pics/mary.jpg)", "url(./pics/andrea.jpg)", "url(./pics/bgolden.jpg)"],
    idx: 0,
    audio: ["./auds/scar.m4a", "./auds/mary.mp3", "./auds/andrea.mp3", "./auds/bgolden.m4a"]
  },
  {
    name: ["Karl Stromberg", "Anya Amasova", "Naomi", "Felicca", "The Spy Who Loved Me"],
    movie: "The Spy Who Loved Me",
    fate: ["was shot 4 times by Bond",
          "code name 'Triple X', was a KGB agent working under General Gogol. She had the same mission as Bond, to retrieve stolen microfilms for a submarine tracking system.", "was an aid for Karl Stromberg, and escorted Bond and Anya Amasova to Stromberg's oceanic citadel, the Atlantis. After Bond's meeting ended, Stromberg instructed henchman Jaws to kill the two spies.", "took a liking to Bond, and when she saw Sandor about to shoot him, she spun round and took the bullet herself.", " travels to Egypt, where illicit microfilm plans for a submarine tracking system are being offered for sale. In Cairo he meets KGB agent Major Anya Amasova, who is on the same mission. After their contact is murdered, they fight Jaws, a steel-toothed villain in the pay of industrialist Karl Stromberg."],
    pic:  ["url(./pics/strom.jpg)", "url(./pics/anya.jpg)", "url(./pics/naomi.jpg)", "url(./pics/felicca.jpg)", "url(./pics/bspy.jpg)"],
    idx: 0,
    audio: ["./auds/strom.mp3", "./auds/anya.mp3", "./auds/naomi.mp3", "./auds/felicca.mp3", "./auds/bspy.m4a"]
  },
  {
    name: ["Hugo Drax", "Corinne Dufour", "Moonraker"],
    movie: "Moonraker",
    fate: ["was shot with poison dart gun and ejected into outer space, by Bond. ",
            "was Hugo Drax's personal assistant and pilot. She flew Bond over Drax's estate, giving him a guided tour of the Moonraker complex and flying him to meet Drax. After spending the night with Bond, Corinne revealed the location of Drax's safe, where Bond photographed secret documents. Drax discovered this, and Corinne was killed by Drax's vicious pack of dogs.", "follows clues that lead him first to Venice, where he discovers Drax’s laboratory manufacturing a highly toxic nerve gas, and then to Rio, where he teams up with CIA agent and astrophysicist Holly Goodhead."],
    pic:  ["url(./pics/drax.jpg)", "url(./pics/corinne.jpg)", "url(./pics/bmoon.jpg)"],
    idx: 0,
    audio: ["./auds/drax.m4a", "./auds/corinne.mp3", "./auds/bmoon.m4a"]
  },
  {
    name: ["Aristotle Kristatos", "Melina Havelock", "For Your Eyes Only"],
    movie: "For Your Eyes Only",
    fate: ["was killed with a knife thrown by Milos Columbo. ",
            "was the daughter of two marine explorers who did salvage work for the British Secret Service. After her parents were assassinated by henchman Hector Gonzales, Melina found the hitman and killed him with a crossbow.", "is ordered to retrieve the Automatic Targeting Attack Communicator (ATAC), housed on a sunken spy ship, the St. Georges. When Sir Timothy Havelock, a marine archaeologist secretly helping the British to locate the ship, is murdered along with his wife, Bond is dispatched to Spain to find out who hired the hitman, Gonzales, but before he can find out, Gonzales is killed by Havelock’s daughter, Melina."],
    pic:  ["url(./pics/ari.jpg)", "url(./pics/melina.jpg)", "url(./pics/beyes.jpg)"],
    idx: 0,
    audio: ["./auds/ari.m4a", "./auds/melina.mp3", "./auds/beyes.m4a"]
  },
  {
    name: ["Kamal Khan", "Octopussy", "Octopussy"],
    movie: "Octopussy",
    fate: ["dies when his plane crashes into a mountain.",
          "ran an all-women floating island, the girls of which were acrobats for a circus that was a front for a jewellery smuggling operation. She was a partner in crime with Kamal Khan, who stole the jewellery for himself and tried to kill Octopussy.", "swaps a real Faberge egg with a fake, and drives up the bidding against exiled Afghan prince Kamal Khan, who ultimately wins the auction. Bond follows Khan back to his palace in Rajasthan, India, where he discovers that Khan is working with Orlov, a renegade Soviet general, and is using Octopussy’s circus troupe to smuggle Soviet treasures into the West."],
    pic:  ["url(./pics/khan.jpg)", "url(./pics/octo.jpg)", "url(./pics/bocto.jpg)"],
    idx: 0,
    audio: ["./auds/khan.mp3", "./auds/octo.mp3", "./auds/bocto.m4a"]
  },
  {
    name: ["Max Zorin", "Stacey Sutton", "MayDay", "A View to a Kill"],
    movie: "A View to a Kill",
    fate: ["falls to his death from the top of the Golden Gate Bridge after a fight with Bond.",
          "inherited the Sutton Oil company, which megalomaniac Max Zorin tried to take over. Zorin offered Sutton $5 million for her shares in the company, which she refused.", "maydays fate", "recovers a microchip from the body of 003 in Siberia which is a copy of one that is impervious to the magnetic pulse of a nuclear blast. It is made by a company recently acquired by Anglo-French combine Zorin Industries, so Bond is assigned to investigate Max Zorin."],
    pic:  ["url(./pics/zorin.jpg)", "url(./pics/stacey.jpg)", "url(./pics/mayday.jpg)","url(./pics/bview.png)"],
    idx: 0,
    audio: ["./auds/zorin.m4a", "./auds/stacey.mp3", "./auds/mayday.mp3", "./auds/bview.m4a"]
  },
  {
    name: ["General Georgi Koskov", "Kara Milovy", "The Living Daylights"],
    movie: "The Living Daylights",
    fate: ["was arrested and implied to be executed by Pushkin's government offscreen.",
          "was the girlfriend of Georgi Koskov, a traitor playing both sides in the cold war. Koskov pretended to defect to the West, and got Milovy to shoot blanks at him to make it look more real.", "is sent to Czechoslovakia to support the defection of a Russian Army Officer, Koskov. He becomes suspicious when the sniper he has to assassinate appears to be a glamorous cellist, Kara Milovy. "],
    pic:  ["url(./pics/georgi.jpg)", "url(./pics/kara.jpg)", "url(./pics/bliving.jpg)"],
    idx: 0,
    audio: ["./auds/georgi.mp3", "./auds/kara.mp3", "./auds/bliving.m4a"]
  }
];


const VILLIANS = 0;
const GIRLS = 1;
const BOND = 2;

let vilTrayEl = document.getElementById('villian-tray');
let clickedVillian = "";
let chosenLengthEl = document.getElementById("chosen-length");
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
let gameLength = 5;

const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
let ndx=0;
let bgidx=1;  // index into Bond Girls


/* FOR EACH VILLIAN CREATE A DIV ELEMENT WITH A CLASS OF VIL AND THE BACKGROUNDIMAGE SET */
function createGrid(){
  vilTrayEl.innerHTML=""
  villians.forEach((villian) => {
    villian.idx = 0;
    if (gorv === GIRLS){
      villian.idx=Math.floor(Math.random()*(villian.name.length-1))
      if (villian.idx === 0){
        villian.idx = 1
      }
    }
    if (gorv === BOND){
      villian.idx = villian.name.length-1
    }

    console.log(villian.name[villian.idx]);
    const vil = document.createElement("div");
    vil.classList.add("vil");
    vil.style.backgroundImage = villian.pic[villian.idx];

    vilTrayEl.append(vil);
    vil.addEventListener("click", () => {
      clickedVillian = villian.name[villian.idx];
      ndx = villians.findIndex(checkVil);
      // play audio of villian clicked
      snip(ndx);
      chosenVillianEl.textContent = "You chose " + clickedVillian;
      const startEl = document.getElementById('start')
      startEl.disabled = false;
    });
  });
}


  // GET ARRAY INDEX OF CLICKED ITEM
  function checkVil(vil) {
    return vil.name[vil.idx] === clickedVillian;
  }
  

function snip(ndx) {
  const audio = new Audio (villians[ndx].audio[villians[ndx].idx]);
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
  gorv = GIRLS;
  chosenVillianEl.innerText="Choose a Bond Girl.."
  createGrid();
}

function villiansBtn(){
  chosenVillianEl.innerText="Choose a Villian.."
  gorv = VILLIANS;
  createGrid();
}
function bondBtn(){
  chosenVillianEl.innerText="Choose a Bond.."
  gorv = BOND;
  createGrid();
}


function ten(){
  gameLength = 10;
  chosenLengthEl.textContent = "You chose 10 seconds";
}

function twentyfive(){
  gameLength = 25;
  chosenLengthEl.textContent = "You chose 25 seconds";
}

function fourtyfive(){
  gameLength = 45;
  chosenLengthEl.textContent = "You chose 45 seconds";
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
  vilBlockEl.style.backgroundImage = villians[ndx].pic[villians[ndx].idx];
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


let timerStarted = false;
let timerRunning = false;
let seconds = 10;
let clickAmount = 0;
let timer;

function startGame() {
  result = 0;
  currentTime = gameLength;
  timerStarted = false;
  if (!timerStarted) {  
    startTimer();
    moveMole();
  }

}

function startTimer() {
  timerStarted = true;
  timerRunning = true;
 	timer = setInterval(countDown,1000);
}


function countDown(){
  currentTime--;
  timerEl.textContent = currentTime;
  if (currentTime==0){
    clearInterval(timer)
    clearInterval(timerId)
     if (villians[ndx].idx === villians[ndx].name.length - 1){
     mpopupBodyEl.textContent = ('GAME OVER your score was ' +
     result + ". In " + villians[ndx].movie + ", Bond " + villians[ndx].fate[villians[ndx].idx])
    } else {
     mpopupBodyEl.textContent = ('GAME OVER your score was ' +
     result + ". In " + villians[ndx].movie + ", " + villians[ndx].name[villians[ndx].idx] + " " + villians[ndx].fate[villians[ndx].idx])
    }

    mpopup.style.display = "block";
  }
}

// END GAME ACTION
