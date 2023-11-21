function songs(params) {

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numberOfSongs = Number(params.shift())
  let allTypeList = params.pop()

  for (let i = 0; i < numberOfSongs; i++) {
    let [typeList, name, time] = params[i].split('_');

    let newSong = new Song(typeList, name, time);
    songs.push(newSong);
    
  }

  if (allTypeList === 'all'){
    songs.forEach(song => console.log(song.name));
  } else {
    songs
      .filter(song => song.typeList === allTypeList)
      .forEach(song => console.log(song.name));
  }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
