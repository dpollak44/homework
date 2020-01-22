const fs = require('fs')
const path = require('path')

module.exports = function (dir, testString, callback) {

    fs.readdir(dir, function (err, list) {
        if (err)
            return callback(err)

        list = list.filter(file => {
            return path.extname(file) === `. ${testString}`
        })

        callback(null, list)
    })
}