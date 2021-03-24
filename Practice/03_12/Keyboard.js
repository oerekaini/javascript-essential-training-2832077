/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Keyboard {
    // Define parameters
    constructor (
        name,
        numKeys,
        sound,
        color,
        ledOn
    ) {
        // Define properties
        this.name = name;
        this.numKeys = numKeys;
        this.sound = sound;
        this.color = color;
        this.ledOn = ledOn;
    }
    // Add methods
    toggleLed(ledStatus) {
        this.ledOn = ledStatus;
    }

}

export default Keyboard;