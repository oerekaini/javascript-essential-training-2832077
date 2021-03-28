/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";
import videoGame from "./videoGame.js";

const everydayPack = new Backpack(
  "Everyday Pack",
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

const pokemonSilver = new videoGame(
  "Pokemon Silver Version",
  "Nintendo",
  "Game Boy Color",
  "November 21, 1999",
  true
);

const content = `
  <main>
    <article>
      <h3>${pokemonRed.title}</h3>
      <ul>
        <li>Publisher: ${pokemonRed.publisher}</li>
        <li>Platform: ${pokemonRed.platform}</li>
        <li>Original Release Date: ${pokemonRed.releaseDate}</li>
        <li>Days since release: ${pokemonRed.gameAge()}</li>
        <li>Completion Status: ${pokemonRed.boolComplete}</li>
      </ul>
    </article>
    <article>
    <h3>${pokemonSilver.title}</h3>
    <ul>
      <li>Publisher: ${pokemonSilver.publisher}</li>
      <li>Platform: ${pokemonSilver.platform}</li>
      <li>Original Release Date: ${pokemonSilver.releaseDate}</li>
      <li>Days since release: ${pokemonSilver.gameAge()}</li>
      <li>Completion Status: ${pokemonSilver.boolComplete}</li>
    </ul>
  </article>
  </main>
`;

document.body.innerHTML = content;

