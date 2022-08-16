function cookingByNumbers(startingPoint, ...commands) {
    let num = Number(startingPoint);
    
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
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('***********************************************');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');