function main(band, album, song){
    let duration = (album.length * band.length) * song.length / 2
    let br = Math.ceil(duration / 2.5)
    console.log(`The plate was rotated ${br} times.`)
}

main('Black Sabbath', 'Paranoid', 'War Pigs')