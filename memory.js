  const villiansProto = [
    {
      name: ["Dr. Julius No", "Honey Ryder"],
      movie: "Dr. No",
      fate: ["was boiled to death in his own reactor coolant after a fight with Bond",
             "dazzled cinema audiences, stepping out of the Caribbean sea wearing a white bikini with a large hunting knife at her side."],
      pic: ['./pics/drno.jpg', './pics/honey.jpg'],
      audio: ["./auds/drno.mp3", "./auds/honey.mp3"]
    },
    {
      name: ["Rosa Klebb", "Tatiana Romanova"],
      movie: "From Russia With Love",
      fate: ["was shot in the chest by Tatiana Romanova",
             "helped Bond steal a Lektor decoding machine, and the pair escaped on the Orient Express train."],
      pic: ['./pics/klebb.jpg', './pics/tatiana.jpg'],
      audio: ["./auds/klebb.m4a", "./auds/tatiana.mp3"]
    },
    {
      name: ["Auric Goldfinger", "Pussy Galore"],
      movie: "Goldfinger",
      fate: ["was sucked out of a depressurising plane through a shattered window",
              "was an original Ian Fleming character from the novel. Ms. Galore ran a flying circus of female pilots, who were hired by Auric Goldfinger to fly over Fort Knox and gas the soldiers, so that Goldfinger could break in to the gold vault."],
      pic: ['./pics/gold.jpg', './pics/pussy.jpg'],
      audio: ["./auds/gold.mp3", "./auds/pussy.mp3"]
    },
    {
      name: ["Emilio Largo", "Domino"],
      movie: "Thunderball",
      fate: ["was shot with a harpoon from a speargun fired by his mistress Domino",
             "was the mistress of SPECTRE agent Emilio Largo. Bond discovers that Largo had killed Domino's brother, and thinks he can use that fact to get her on his side. They meet underwater as Bond untraps Domino's flipper from the coral, and Bond manages to convince her to plot against Largo"],
      pic: ['./pics/largo.png', './pics/domino.jpg'],
      audio: ["./auds/largo.mp3", "./auds/domino.mp3"]
    },
    {
      name: ["Blofeld (Donald Pleasence)", "Aki"],
      movie: "You Only Live Twice",
      fate: ["survives; albiet with a lower arm injury from Tanaka's throwing star.",
              "was a senior agent of the Japanese secret service, working directly under its leader Tiger Tanaka. She was confident and independent, and tricked Bond into walking over a trap door, which catapulted him down a steel slide leading to Tanaka's office."],
      pic: ['./pics/blofeld.jpg', './pics/aki.jpg'],
      audio: ["./auds/blofeld.mp3", "./auds/aki.mp3"]
    },
    {
      name: ["Blofeld (Telly Savalas)", "Tracy di Vicenzo"],
      movie: "On Her Majesty's Secret Service",
      fate: ["survives. Aids in the assassination of Tracy di Vicenzo, Bond's newly married wife on their honeymoon.",
              "was the most important girl in Bond's life, becoming Mrs Tracy Bond by the end of the film she was killed with the help of Blofeld"],
      pic: ['./pics/blofeld2.jpg', './pics/tracy.jpg'],
      audio: ["./auds/blofeld2.mp3", "./auds/tracy.mp3"]
    },
    {
      name: ["Blofeld (Charles Grey)", "Tiffany Case"],
      movie: "Diamonds are Forever",
      fate: ["is presumed dead", "was a diamond smuggler in part of a pipeline of smugglers that ultimately ended at Ernst Stavro Blofeld. "],
      pic: ['./pics/blofeld3.jpg', './pics/tiffany.jpg'],
      audio: ["./auds/blofeld3.m4a", "./auds/tiffany.m4a"]
    },
    {
      name: ["Dr. Kananga/Mr.Big", "Solitaire"],
      movie: "Live and Let Die",
      fate: ["has his body inflate and explode after Bond forces a compressed-gas capsule down his throat. ",
            "was a psychic tarot card reader working for heroin baron Dr. Kananga. She predicted the movements of James Bond and other men who posed a threat to their operations"],
      pic: ['./pics/mrbig.jpg', './pics/sol.jpg'],
      audio: ["./auds/mrbig.mp3", "./auds/sol.mp3"]
    },
    {
      name: ["Francisco Scaramanga", "Mary Goodnight"],
      movie: "The Man with the Golden Gun",
      fate: ["was shot in the chest by Bond in the Hall of Mirrors when Bond pretends to be a statue of himself.",
            "Mary Goodnight was Bond's assistant in Hong Kong, and previously his secretary in London. She helps Bond to locate Miss Anders, the girlfriend of hitman Scaramanga."],
      pic: ['./pics/scar.jpg', './pics/mary.jpg'],
      audio: ["./auds/scar.mp3", "./auds/mary.mp3"]
    },
    {
      name: ["Karl Stromberg", "Anya Amasova"],
      movie: "The Spy Who Loved Me",
      fate: ["was shot 4 times by Bond",
            "code name 'Triple X', was a KGB agent working under General Gogol. She had the same mission as Bond, to retrieve stolen microfilms for a submarine tracking system."],
      pic: ['./pics/strom.jpg', './pics/anya.jpg'],
      audio: ["./auds/strom.mp3", "./auds/anya.mp3"]
    },
    {
      name: ["Hugo Drax", "Corinne Dufour"],
      movie: "Moonraker",
      fate: ["was shot with poison dart gun and ejected into outer space, by Bond. ",
              "was Hugo Drax's personal assistant and pilot. She flew Bond over Drax's estate, giving him a guided tour of the Moonraker complex and flying him to meet Drax. After spending the night with Bond, Corinne revealed the location of Drax's safe, where Bond photographed secret documents. Drax discovered this, and Corinne was killed by Drax's vicious pack of dogs."],
      pic: ['./pics/drax.jpg', './pics/corinne.jpg'],
      audio: ["./auds/drax.mp3", "./auds/corinne.mp3"]
    },
    {
      name: ["Aristotle Kristatos", "Melina Havelock"],
      movie: "For Your Eyes Only",
      fate: ["was killed with a knife thrown by Milos Columbo. ",
              "was the daughter of two marine explorers who did salvage work for the British Secret Service. After her parents were assassinated by henchman Hector Gonzales, Melina found the hitman and killed him with a crossbow."],
      pic: ['./pics/ari.jpg', './pics/melina.jpg'],
      audio: ["./auds/ari.mp3", "./auds/melina.mp3"]
    },
    {
      name: ["Kamal Khan", "Octopussy"],
      movie: "Octopussy",
      fate: ["dies when his plane crashes into a mountain.",
            "ran an all-women floating island, the girls of which were acrobats for a circus that was a front for a jewellery smuggling operation. She was a partner in crime with Kamal Khan, who stole the jewellery for himself and tried to kill Octopussy. "],
      pic: ['./pics/khan.jpg', './pics/octo.jpg'],
      audio: ["./auds/khan.mp3", "./auds/octo.mp3"]
    },
    {
      name: ["Max Zorin", "Stacey Sutton"],
      movie: "A View to a Kill",
      fate: ["falls to his death from the top of the Golden Gate Bridge after a fight with Bond.",
            "inherited the Sutton Oil company, which megalomaniac Max Zorin tried to take over. Zorin offered Sutton $5 million for her shares in the company, which she refused."],
      pic: ['./pics/zorin.jpg', './pics/stacey.jpg'],
      audio: ["./auds/zorin.mp3", "./auds/stacey.mp3"]
    },
    {
      name: ["General Georgi Koskov", "Kara Milovy"],
      movie: "The Living Daylights",
      fate: ["was arrested and implied to be executed by Pushkin's government offscreen.",
            "was the girlfriend of Georgi Koskov, a traitor playing both sides in the cold war. Koskov pretended to defect to the West, and got Milovy to shoot blanks at him to make it look more real."],
      pic: ['./pics/georgi.jpg', './pics/kara.jpg'],
      audio: ["./auds/georgi.mp3", "./auds/kara.mp3"]
    }
  ];
  
let gorv = 0;


/* villians[] will eventually contain an amount of villians based on user selection. this array is built
by randomly sorting the proto array of 15 and then taking the first 'x' based on the user selection */ 
  let villians = [];

  const gridDisplay = document.querySelector('#grid');
  const resultDisplay = document.querySelector('#result')
 // let capturedDisplay = document.querySelector('.captured')
  let capturedVillians = document.querySelector('#captured-villians')

  let cardsChosen = [];

  let cardsChosenIds = [];

  let cardsWon = [];
  let captured = [];

  let numGridItems = 0;



  function createBoard(){
    /* Create villians array from the protoarray based on number of cards to display */
    villiansProto.sort(() => 0.5 - Math.random());
    for (let i=0; i<numGridItems; i++){
      villians.push(villiansProto[i])    
      villians.push(villiansProto[i])   
    }

   /* villians.sort(() => 0.5 - Math.random());*/
   shuffleArray(villians);

    for (let i=0; i<villians.length; i++){
      const card = document.createElement('img' );
      card.setAttribute('src', './pics/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard)
 //     card.style.height = '100px';
   //   card.style.width = '100px';
      gridDisplay.appendChild(card);
    }
  }
  
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(villians) {
  for (var i = villians.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = villians[i];
      villians[i] = villians[j];
      villians[j] = temp;
  }
}



function girls(){
  clearItems();
  gorv=1;
  createBoard();
}

function villiansBtn(){
  clearItems();
  gorv=0;
  createBoard();
}






  function sixVillians(){
    clearItems();
    numGridItems = 6;
    createBoard();
  }

  
  function nineVillians(){
    clearItems();
    numGridItems = 9;
    createBoard();
  }

  
  function twelveVillians(){
    clearItems();
    numGridItems = 12;
    createBoard();
  }

  
  function fifteenVillians(){
    clearItems();
    numGridItems = 15;
    createBoard();
  }


  function clearItems(){
    villians = [];
    cardsWon = [];
    captured = [];
    gridDisplay.innerHTML = "";
    capturedVillians.innerHTML = "";
    resultDisplay.innerHTML = "0";
  }

  


  function flipCard(){
   
    const cardId = this.getAttribute('data-id'); 
    
    cardsChosen.push(villians[cardId].name[gorv])
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', villians[cardId].pic[gorv])
    if (cardsChosen.length === 2){
      setTimeout(checkMatch, 1500);
    }
  }


  function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
   
    if(optionOneId == optionTwoId){
      cards[optionOneId].setAttribute('src', './pics/blank.png')
      cards[optionTwoId].setAttribute('src', './pics/blank.png')
    } else 
    if(cardsChosen[0]==cardsChosen[1]){
      cards[optionOneId].setAttribute('src', './pics/white.png')
      cards[optionTwoId].setAttribute('src', './pics/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      captured.push(cardsChosen[0])
      let capVil = document.createElement('li');
      capVil.innerText = " " + villians[optionOneId].name[gorv]
      capturedVillians.appendChild(capVil);
    } else {
      cards[optionOneId].setAttribute('src', './pics/blank.png')
      cards[optionTwoId].setAttribute('src', './pics/blank.png')
    }
    resultDisplay.innerHTML = cardsWon.length
   // capturedDisplay.innerHTML = captured;





    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == villians.length/2){
    resultDisplay.innerHTML = "Congrats you won!"
 
    }
  }  


















  