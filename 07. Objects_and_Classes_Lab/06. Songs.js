function main(arr){
    let songs = []
    let length = arr.length
    let listOption = arr[length - 1]
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    for (let i = 1; i <= arr[0]; i++){
        let songData = arr[i].split('_')
        let typeList, name, time
        [typeList, name, time] = [songData[0], songData[1], songData[2]]
        songs.push(new Song(typeList, name, time))
    }
    if (listOption === 'all'){
        songs.forEach((i) => console.log(i.name))
    }
    else {
        let filtered = songs.filter((i) => i.typeList === listOption)
        filtered.forEach((i) => console.log(i.name))
    }
}

main([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )