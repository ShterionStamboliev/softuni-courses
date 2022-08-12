function heartDelivery(arr) {
    let arg = arr.shift().split('@');
    let command = arr.shift();
    let startIndex = 0;
    let mission = 0;

    while (command !== 'Love!') {
        let text = command.split(' ');
        let jumpLength = text[1];
        console.log(jumpLength);
    }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
