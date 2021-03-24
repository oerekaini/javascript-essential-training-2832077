/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Pokemon {
     //Define parameters
     constructor (
        name,
        type,
        color,
        attackOne,
        attackTwo
     ) {
         //Define properties
         this.name = name;
         this.type = type;
         this.color = color;
         this.moveset = {
             slotOne: attackOne,
             slotTwo: attackTwo
         };
     }
     // Add methods
     newMoveset(moveOne, moveTwo) {
         this.moveset.slotOne = moveOne;
         this.moveset.slowTwo = moveTwo;
     }
  
 }

 export default Pokemon;