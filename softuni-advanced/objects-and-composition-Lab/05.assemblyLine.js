function createAssemblyLine() {
    return {

        hasClima: (myCar) => {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () => {
                myCar.temp < myCar.tempSettings ? myCar.temp++ : myCar.temp--;
            };
        },
    
        hasAudio: (myCar) => {
            myCar.currentTrack = { 'name': '', 'artist': '' };
            myCar.nowPlaying = () => {
                if (myCar.currentTrack != null) {
                    console.log(`Now playing ${myCar.currentTrack.name} by ${myCar.currentTrack.artist}`);
                }
            };
        },
    
        hasParktronic: (myCar) => {
            myCar.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log(' ');
                }
            };
        },
    }
}
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
 
const assemblyLine = createAssemblyLine(myCar);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
