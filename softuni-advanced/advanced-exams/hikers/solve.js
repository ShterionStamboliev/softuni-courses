class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (!this.goals[peak]) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }
    }

    hike(peak, time, difficultyLevel) {
        time = Number(time);
        if (this.goals[peak]) {
            let resource = time * 10;
            let diff = this.resources - resource;
            if (diff < 0) {
                return `You don't have enough resources to complete the hike`
            } else {
                this.resources -= resource;
                this.listOfHikes.push({peak, time, difficultyLevel});
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
            }
        } else {
            throw new Error(`${peak} is not in your current goals`)
        }
    }

    rest(time) {
        time = Number(time);
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }
        if (criteria === 'easy' || criteria === 'hard') {
            const hikesRecords = this.listOfHikes.filter((x) => x.difficultyLevel === criteria).sort((a, b) => a.time - b.time);
            // console.log(hikesRecords); -----> obj.prop;
            const allHikes = hikesRecords[0];
            // console.log(allHikes); ---> undefined;
                if (allHikes === undefined) {
                    return `${this.username} has not done any ${criteria} hiking yet`;
                } else {
                    return `${this.username}'s best ${criteria} hike is ${allHikes.peak} peak, for ${allHikes.time} hours`
                }
                } else if (criteria === 'all') {
                    const str = 'All hiking records:'
                    const arr = [];
                    this.listOfHikes.forEach((hikes) => {
                        arr.push(`${this.username} hiked ${hikes.peak} for ${hikes.time} hours`);
                    });
                    return `${str}\n${arr.join()}`
                }
            }
        }
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));
