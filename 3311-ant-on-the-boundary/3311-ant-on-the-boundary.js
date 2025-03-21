/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count=0,position=0;
  for(let num of nums){
    position+=num;
    if(position===0)count++;

  }
  return count;

    
};