function cookingByNumbers(startingPoint, ...commands) {
    let num = Number(startingPoint);
    const obj = {
        chop: num => num / 2,
        spice: num => num + 1,
        bake: num => num * 3,
        fillet: num => num *= 0.8,
        dice: num => Math.sqrt(num),
    };
    commands.forEach((_, i) => {
        num = obj[commands[i]](num);
        console.log(num);
    });
}

/*

    for (const info of commands) {

        switch(info) {
            case "chop":
                num = num / 2;
                console.log(num);
                break;
    
                case "dice":
                    num = Math.sqrt(num);
                    console.log(num);
                    break;
    
                    case "spice":
                        num += 1;
                        console.log(num);
                        break;
    
                        case "bake":
                            num *= 3;
                            console.log(num);
                            break;
    
                            case "fillet":
                            num *= 0.80;
                            console.log(num);
                            break;
        }
    }
    */
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('***********************************************');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');