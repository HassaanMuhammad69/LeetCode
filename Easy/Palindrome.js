/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    let reverse = 0
    let current = x
    while (current !== 0) {
        reverse = reverse * 10 + current % 10
        current = Math.floor(current / 10)
    }
    return x === reverse
};

/*
first line:
reverse= reverse * 10 + current % 10
rev= 0 *10 + 121 % 10
rev= 0 + 1
rev =1 
second line:
current= math.floor(current/10)
current= math.floor(121/10)
current=12

first line:
reverse= reverse * 10 + current % 10
rev= 1 *10 + 12 % 10
rev= 10 + 2
rev =12 
second line:
current= math.floor(current/10)
current= math.floor(12/10)
current=1

first line:
reverse= reverse * 10 + current % 10
rev= 12 *10 + 1 % 10
rev= 120 + 1
rev =121 
second line:
current= math.floor(current/10)
current= math.floor(1/10)
current=0
*/