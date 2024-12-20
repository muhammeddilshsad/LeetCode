/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const orginalnumsLength=nums.length;
        for(let i=0;i<orginalnumsLength;i++){
            nums.push(nums[i])
        }
        return nums;
    
    
};