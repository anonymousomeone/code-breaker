const fs = require('fs')

// among us in real life
var testCode = [1, 2, 3, 4, 5, 0, 6, 7, 0, 8, 4, 0, 9, 10, 1, 11, 0, 11, 8, 12, 10]
console.log(codeToString(group(testCode)))
debugger
// code break!!! (no way (real?!?!) fake 😭😭😭)
function code_break(code) {
    for (var i = 0; i < code.length; i++) {

    }
}

function codeToString(code) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var str = ""

    for (var i = 0; i < code.length; i++) {
        for (var x = 0; x < code[i].length; x++) {
            if (code[i][x] == 0) {str += ' '; continue}
            str += arr[code[i][x] -= 1]
        }
    }

    return str
}

function codeGen(shift) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (var i = 0; i < shift; i++) {arr = arrayRotate(arr)}

    return arr
}

// read file
function readFile(path) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) throw err;
        return data
    })
}

// group code numbers by spaces
function group(code) {
    let res = []
    let arr = []

    for (var i = 0; i < code.length; i++) {
        if (code[i] != 0) arr.push(code[i])
        else { res.push(arr); res.push([0]); arr = [] }
        if (i == code.length - 1) res.push(arr)
    }
    return res
}

function arrayRotate(arr) {
    arr.unshift(arr.pop());
    return arr;
  }