function account(arr) {
    let peterAccount = arr[0].split(' ');
    
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i].split(' ');
        let command = current[0];
        let game = current[1];
        let indx = 0;

        if (command === 'Play!') {
            break;
        } else if (command === 'Install' && peterAccount.includes(game) === false) {
            peterAccount.push(game);
        } else if (command === 'Uninstall' && peterAccount.includes(game) === true) {
            indx = peterAccount.indexOf(game);
            peterAccount.splice(indx, 1);
        } else if (command === 'Update' && peterAccount.includes(game)) {
            indx = peterAccount.indexOf(game);
            peterAccount.splice(indx, 1);
            peterAccount.push(game);
        } else if (command === 'Expansion') {
            let exp = game.split('-');
            let newGameExp = exp[0];
        
        if (peterAccount.includes(newGameExp)) {
            let expansionGame = exp.join(':');
            let index = peterAccount.indexOf(newGameExp);
            peterAccount.splice(index + 1, 0, expansionGame);
        }
    }
}
console.log(peterAccount.join(' '));
}
account(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

);