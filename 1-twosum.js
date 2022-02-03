var twoSum = function(nums, target) {
    let mult;
    let output;
    let i;
    let j;
    for (let i=0; i < nums.length-1; i++) {
        for (let j=0; j<nums.length-1; j++) {
            mult = nums[i]+nums[j]
            if (mult === target) {
                output = [i,j]
            }
        }
    }
    return output
};