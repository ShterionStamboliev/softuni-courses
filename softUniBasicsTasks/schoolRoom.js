function schoolRoom(input) {
    const schoolRoomLength = Number(input[0]);
    const schoolRoomWidth = Number(input[1]);

    let workPlaceWidth = 70;
    let workPlaceLength = 120;
    let coridor = 100
    let roomWidth = (schoolRoomWidth * 100) - coridor;
    let roomLength = (schoolRoomLength * 100);
    const desksPerRow = Math.floor(roomWidth / workPlaceWidth);
    const rows = Math.floor(roomLength / workPlaceLength);
    const numberOfSeats = (desksPerRow * rows) - 3;

    console.log(numberOfSeats);
}
schoolRoom(['15','8.9'])