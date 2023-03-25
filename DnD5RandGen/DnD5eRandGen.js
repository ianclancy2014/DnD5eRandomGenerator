//Random Encounter Generator for D&D 5E

//12-24-21 Added the functionality of changing the webpage

"use strict";

/*
//Math.random() returns a random number with decimals, whereas
//Math.Floor(Math.Random()) returns an integer
*/

//NPC encounters:
//console.log(Math.floor(Math.random() * 20));
//Below gets a random number between two integers, 5 and 10 in this case
//console.log(Math.floor(Math.random() * (10 - 5 + 1) + 5));
//Or--------Math.floor(Math.random() * (max - min + 1) + min);

let numberOfEnemies = [2, 3, 4, 5, 6];
let raceOfEnemies = ["Orc", "Goblin", "Dwarf", "Elf", "Human", "Giant"];
let typeOfEnemies = ["Guards", "Bandits", "Travelers", "Merchants", "jerk"];

let enemyNumber =
  numberOfEnemies[Math.floor(Math.random() * numberOfEnemies.length)];
let enemyRace = raceOfEnemies[Math.floor(Math.random() * raceOfEnemies.length)];
let enemyType = typeOfEnemies[Math.floor(Math.random() * typeOfEnemies.length)];

//The code below is an 'easy' way to return one of the enemy races
//without having to write a long function or loop
console.log(`You encounter ${enemyNumber} ${enemyRace} ${enemyType}`);

//Wilderness rest events:

let fromLocationArray = [
  "from the nearby forest",
  "from the nearby creek",
  "from the tall grass",
  "from a nearby boulder with an unrecognizable rune that glows",
  "from a small figure made of twigs hanging from a tree",
];

let whatTheyHearArray = [
  "whispers",
  "soft music that soothes the players",
  "ghostly sounds of battle",
  "a muffled voice repeating the same, strange words",
  "the sounds of children playing",
  `footsteps of someone who isn't there`,
  "a frog croaking, but stopping every now and then to clear its throat",
];

let whispersArray = [
  "of a voice hinting at what the party might encounter tomorrow",
  "of a voice revealing the location of a nearby treasure",
  `of a voice that says "Prepare for battle" (begin NPC encounter after party has had time to set up an ambush if they so choose to; the attack happens whether they choose to prepare or ignore the whisper)`,
  "of a voice revealing the location of an abandoned wizards workshop",
];

//********NEED TO IMPLEMENT THE SKY EVENTS. FORGOT IT'S NOT TRIGGERING!!!***

let skyEventsArray = [
  "an open night sky, with the constellations in clear view",
  "the silhouette of two dragons circling eachother against the stars in the sky",
  "a meteor shower",
  "a beautiful lightning storm in the distance",
  "a black, cloud-blanketed sky",
  `fireflies that make the player character on watch feel like they're floating through the stars`,
];

let landEventsArray = [
  "a beautiful white flower that blooms in the moonlight",
  `fireflies that make them feel like they're floating through the stars`,
  "two green, glowing eyes peering at the camp from the darkness beyond the campfire",
  "a patch of tiny blue flowers that seem to lean into the wind rather than bend with it",
  "a tiny frog that keeps them company throughout the night",
];

let weatherEventsArray = [
  "a cool, dry breeze that pulls the party deeper into sleep",
  `a light drizzle that wets everything not covered but isn't strong enough to extinguish any open flames`,
  `a thick fog that carries a pleasant, earthy smell and muffles any of the ambient noises that might disturb the party's sleep`,
  `a strong wind that extinguishes all open flames and knocks any small tents over`,
];

//These are the functions that handle individual event randomization and spitting it out

function hearingThings() {
  let whispersRand = ""; //initializes the whispers
  let whatTheyHearRand =
    whatTheyHearArray[Math.floor(Math.random() * whatTheyHearArray.length)];

  if (whatTheyHearRand === whatTheyHearArray[0]) {
    //checks to see if they hear whispers or not, and if they hear whispers it adds what they hear. Otherwise it just reveals what they hear.
    whispersRand =
      whispersArray[Math.floor(Math.random() * whispersArray.length)];
    console.log(`The party hears ${whatTheyHearRand} ${whispersRand}`);
    let returnHearing = `The party hears ${whatTheyHearRand} ${whispersRand}`;
    return returnHearing;
  } else {
    console.log(`The party hears ${whatTheyHearRand}`);
    let returnHearing = `The party hears ${whatTheyHearRand}`;
    return returnHearing;
  }
}

function seeingThings() {
  let LandEventsRand =
    landEventsArray[Math.floor(Math.random() * landEventsArray.length)];
  //   console.log(`The player character on watch sees ${LandEventsRand}`);
  let returnSeeing = `The player character on watch sees ${LandEventsRand}`;
  return returnSeeing;
}

function weatherEvents() {
  let weatherEventsRand =
    weatherEventsArray[Math.floor(Math.random() * weatherEventsArray.length)];
  //   console.log(`Throughout the night there is ${weatherEventsRand}`);
  let returnWeather = `Throughout the night there is ${weatherEventsRand}`;
  return returnWeather;
}

//This is where the randomization for determining the specific event occurs

let eventRandomization = Math.floor(Math.random() * 3); //the 3 will be the number of 'events' that it will pull from
//12-24-21 Added the functionality of changing the webpage
switch (eventRandomization) {
  case 0:
    document.querySelector(".gen-content").textContent = hearingThings();
    break;
  case 1:
    document.querySelector(".gen-content").textContent = seeingThings();
    break;
  case 2:
    document.querySelector(".gen-content").textContent = weatherEvents();
    break;
}

// console.log(weatherEvents());

// document.querySelector(".gen-content").textContent = weatherEvents();

// hearingThings();
// seeingThings();
// weatherEvents();
