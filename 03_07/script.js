/*
*
* Practice Assignment, creating objects
*
*/

const keyboard = {
    name: "Mechanical Keyboard",
    sound: "Clicky",
    color: "Black",
    ledOn: true,
    toggleLED: function (ledStatus) {
        this.ledOn = ledStatus;
    },
    newColor: function (colorChange) {
        this.color = colorChange;
    }
}

keyboard.toggleLED(false);
console.log("Keyboard:", keyboard);
console.log("Is the LED on? ", keyboard.ledOn);

const heater = {
    name: "Space Heater",
    color: "Black",
    heaterOn: true,
    toggleHeater: function(heaterStatus) {
        this.heaterOn = heaterStatus;
    }
}

var heat = "heaterOn";
console.log("Heater:", heater);
console.log("Is the heater on?", heater[heat]);

