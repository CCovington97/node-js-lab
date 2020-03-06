const path = require('path')
const fs = require('fs')
let dataPath = (path.join(__dirname, '../chirps.json'))

let chirps = [
    {
        name: 'Steve',
        message: 'chirp one'
    },
    {
        name: 'Joe',
        message: 'chirp two'
    },
    {
        name: 'John',
        message: 'chirp three'
    },
    {
        name: 'Karen',
        message: 'chirp four'
    },
    {
        name: 'Carl',
        message: 'chirp five'
    },
]

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if (err) throw err;
    console.log('Got it!')
})

fs.readFile('chirps.json', (err, data) => {
    if (err) throw err;
    let readChirps = JSON.parse(data);
    console.log(readChirps);
});