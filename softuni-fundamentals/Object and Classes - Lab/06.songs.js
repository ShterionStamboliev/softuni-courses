function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

            let songs = [];
            let numberOfSongs = arr.shift();
            let typeOfSong = arr.pop();

            for (let i = 0; i < numberOfSongs; i++) {
                let [typeList, name, time] = arr.shift().split('_');
                let song = new Song(typeList, name, time);
                songs.push(song);
            }
            if (typeOfSong === 'all') {
                songs.forEach((i) => console.log(i.name));
            } else {
                let filteredSongs = songs.filter((i) => i.typeList === typeOfSong);
                filteredSongs.forEach((i) => console.log(i.name))
            }
        }
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
