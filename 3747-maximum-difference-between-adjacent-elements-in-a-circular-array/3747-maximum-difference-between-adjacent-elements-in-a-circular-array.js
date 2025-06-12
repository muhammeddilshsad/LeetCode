/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max=0;

    for(let i=0;i<nums.length;i++){
        let next=(i+1)% nums.length;
        let diff=Math.abs(nums[i]-nums[next]);
        if(diff>max)max=diff;
    }

    return max
    
};