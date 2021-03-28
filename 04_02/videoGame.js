//Challenge: create object and create objects from it

class videoGame {

    constructor (
        title,
        publisher,
        platform,
        releaseDate,
        boolComplete,

    ) {
        this.title = title;
        this.publisher = publisher;
        this.platform - platform;
        this.releaseDate = releaseDate;
        this.boolComplete = boolComplete;

    }
    toggleComplete(completeStatus) {
        this.boolComplete = completeStatus;
    }

    gameAge() {
        let now = new Date();
        let release = new Date(this.releaseDate);
        let elapsed = now - release; //elapsed time in ms
        let daysSinceRelease = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceRelease;

    }

}

export default videoGame; 



