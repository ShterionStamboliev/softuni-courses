function luchBreak(input){

const showName = String(input[0]);
const episodMin = Number(input[1]);
const breakTime = Number(input[2]);

let lunchTime = Math.ceil(breakTime * 1/8); // Math.ceil тук е излишен ---> lunchTime = (breakTime * 1) / 8;
let vremeOtdih = Math.ceil(breakTime * 1/4); // тук също е излищен ---> vremeOtdih = (breakTime *1) / 4;
let timeLeft = breakTime - (lunchTime + vremeOtdih); // Тук за да намериш оставащото свободно време, 
//е необходимо от продължителността на почивката
// да извадиш lunchTime и vremeOtdih ---> Math.abs(breakTime - lunchTime - vremeOtdih);
let timeAfter = Math.abs(timeLeft - episodMin); // този
let timeNeed = Math.abs(timeLeft - episodMin); // и този ред можеш да ги преместиш в проверката, като за целта на задачата
// се използва Math.ceil вместо .abs

if (timeLeft >= episodMin) { // тук в тялото на проверката поставяш горните две променливи 
// let timeAfter = Math.ceil(timeLeft - episodMin);
    console.log(`You have enough time to watch ${showName} and left with ${timeAfter} minutes free time.`)
} 	else {
    timeLeft < episodMin
// let timeNeed = Math.ceil(episodMin - timeLeft);
    console.log(`You don't have enough time to watch ${showName}, you need ${timeNeed} more minutes.`)
}
}
luchBreak(["Game of Thrones","60","96"]);
luchBreak(["Teen Wolf","48","60"]);


