/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result=0;
    for(let num of nums){
        result^=num;
    }
return result
    
};


const arr=[2,2,1];
 

