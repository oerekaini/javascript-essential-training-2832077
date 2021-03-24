/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

 //import Backpack from "./Backpack.js";
 import Keyboard from "./Keyboard.js";
 import Pokemon from "./Pokemon.js";

 const mechKeyboard = new Keyboard (
    "Ducky Keyboard",
    "105",
    "Clicky",
    "Black",
    false
 )

 console.log("The Mechanical Keyboard Object:", mechKeyboard);

 const myBulbasaur = new Pokemon (
    "Bulbasaur",
    "Grass",
    "Green",
    "Vine Whip",
    "Tackle"
 )

 console.log("My Bulbasaur Object:", myBulbasaur);

 const myPidgey = new Pokemon (
     "Pidgey",
     "Flying",
     "Brown",
     "Gust",
     "Sand Attack"
 )

 console.log("My Pidgey Object:", myPidgey)