function aquarium(input) {
    const aquariumLength = Number(input[0]);
    const aquariumWidth = Number(input[1]);
    const aquariumHeight = Number(input[2]);
    const spacePercent = Number(input[3]);
    let aquariumVolume = aquariumLength * aquariumWidth * aquariumHeight;
    let literVolume = aquariumVolume * 0.001;
    let takenSpace = spacePercent / 100;
    let litersNeeded = literVolume * (1 - takenSpace);
    console.log(litersNeeded);
}
aquarium(["85", "75", "47", "17"]);