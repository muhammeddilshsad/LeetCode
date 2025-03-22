/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    

      let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    return gcd(minNum, maxNum);
    
    


    
};