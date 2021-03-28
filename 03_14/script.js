/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import videoGame from "./videoGame.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const pokemonRed = new videoGame(
  "Pokemon Red Version",
  "Nintendo",
  "Game Boy",
  "February 27, 1996",
  true
);

console.log("The video game:", pokemonRed);
console.log("Has", pokemonRed.title,"been completed: ", pokemonRed.boolComplete);
console.log("Days since realease:", pokemonRed.gameAge());
