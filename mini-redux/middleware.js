const _ = require('lodash')

function fn1(str) {
    return str + 'def'
}
function fn2(str) {
    return str.toUpperCase()
}

const fn = myFlow([fn1,fn2])
console.log(fn('abc')) 

function myFlow(fns) {

    return function(defaultVal) {
        let res = defaultVal
        while(fns.length) {
            let first = fns.shift()
            res = first(res)
        }
        return res
    }
}