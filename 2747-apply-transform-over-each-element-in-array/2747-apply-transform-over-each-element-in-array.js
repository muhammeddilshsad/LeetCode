/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.map(fn)
    
};

const arr=[1,2,3];
const plusone=function(n){return n+1;};

console.log(map(arr,plusone));