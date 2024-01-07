/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    // APPROACH ONE
    // for (i = 0; i < nums.length; i++) {
    //     for (j = nums.length; j >= i + 1; j--) {
    //         if (nums[i] == nums[j]) {
    //             nums.splice(i, 1)
    //         }
    //     }
    // }

    //APPROACH SECOND
    let j=1 
    for (let i=0; i< nums.length; i++){
        if(nums[i]==nums[j]){
            nums.splice(i,1)
            i=i-1
        }
        else{
            j++
        }
    }
};