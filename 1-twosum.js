var twoSum = function(nums, target) {
    let output;
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j< nums.length; j++) {
            let sum = nums[i]+nums[j]
            if (sum === target && j != i) {
                output = [i,j]
            }
        }
    }
    return output
};