class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = +money;
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        };
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        };
        let findParticipant = this.listOfParticipants.find(n => n.name === name);
        if (findParticipant) {
            return `The ${name} is already registered at the camp.`;
        }
        if (!findParticipant) {
            let newParticipant = {
                name,
                condition,
                power: 100,
                wins: 0
            }
            this.listOfParticipants.push(newParticipant);
            return `The ${name} was successfully registered.`
        }
    };
    
    unregisterParticipant(name) {
        const nameIndex = this.listOfParticipants.findIndex(n => n.name === name);
        if (!nameIndex) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(nameIndex, 1);
        return `The ${name} removed successfully.`;
    };

    timeToPlay(typeOfGame, participant1, participant2) {
        let findFirst = this.listOfParticipants.find(n => n.name === participant1);
        let findSecond = this.listOfParticipants.find(n => n.name === participant2);

        if (typeOfGame === 'WaterBalloonFights') {
            if (!findFirst || !findSecond) {
                throw new Error (`Invalid entered name/s.`);
            };
            if (findFirst.condition !== findSecond.condition) {
                throw new Error (`Choose players with equal conditions`);
            }
            if (findFirst.power > findSecond.power) {
                findFirst.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (findSecond.power > findFirst.power) {
                findSecond.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            }
        } else if (typeOfGame === 'Battleship') {
            if (!findFirst) {
                throw new Error (`Invalid entered name/s.`);
            }
            findFirst.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
        return `There is no winner.`;
    } 
    toString() {
        let res = [];
        const sort = this.listOfParticipants.sort((a, b) => b.wins - a.wins).map(n => `${n.name} - ${n.condition} - ${n.power} - ${n.wins}`).join('\n');
        return res += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n${sort}`
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());
