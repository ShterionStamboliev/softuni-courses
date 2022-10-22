class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    };
    newAdditions(footballPlayers) {
        for (const info of footballPlayers) {
            let [name, age, value] = info.split('/');
            value = +value;
            age = +age;
            const findPlayer = this.invitedPlayers.find(n => n === name);
            if (!findPlayer) {
                this.invitedPlayers.push({
                    name,
                    age,
                    value
                });
            } else if (findPlayer) {
                if (findPlayer.value < value) {
                    findPlayer.value = value;
                }
            }
            // console.log(name, age, value);
        }
        const res = [];
        this.invitedPlayers.forEach(p => {
            res.push(p.name);
        });
        return `You successfully invite ${res.join(', ')}.`
    };
    signContract(selectedPlayer) {
        let splitted = selectedPlayer.split('/');
        let name = splitted[0];
        let offer = +splitted[1];
        const findPlayer = this.invitedPlayers.find(n => n.name === name);
        if (!findPlayer) {
            throw new Error (`${name} is not invited to the selection list!`);
        }
        if (findPlayer.value > offer) {
            let difference = Math.abs(findPlayer.value - offer);
            throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`)
        }
        findPlayer.value = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
    };
    ageLimit(name, age) {
        age = +age;
        const findPlayer = this.invitedPlayers.find(n => n.name === name);
        let ageDifference = Math.abs(findPlayer.age - age);
        if (findPlayer.age >= age) {
            return `${name} is above age limit!`;
        }
        if (!findPlayer) {
            throw new Error (`${name} is not invited to the selection list!`);
        }
        if (ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
        } else if (ageDifference > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
    };
    transferWindowResult() {
        let res = [`Players list:`];
        this.invitedPlayers.forEach(p => res.push(`Player ${p.name}-${p.value}`));
        return res.join('\n');
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
