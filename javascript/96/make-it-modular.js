const mymodule = require('./mymodule.js')
let dir = process.argv[2]
let testString = process.argv[3]

mymodule(dir, testString, function (err, list) {
    if (err)
        return console.error('error:', err)

    list.forEach(file => {
        console.log(file)
    })
})