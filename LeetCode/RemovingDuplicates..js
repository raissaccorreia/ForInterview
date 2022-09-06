/* Using a set */
let chars = ['A', 'B', 'A', 'C', 'B']
let uniqueChars = [...new Set(chars)]

/* IndexOf with Filter */
let uniqueChars2 = chars.filter((c, index) => {
    return chars.indexOf(c) === index
})

/* ForEach and Include */
let uniqueChars3 = []
chars.forEach((c) => {
    if (!uniqueChars3.includes(c)) {
        uniqueChars3.push(c)
    }
})

/* Remove By Property */
const members = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'Johnny' },
    { id: 4, name: 'Alice' },
]
    /* in several lines 
    const newArray = members.map((m) => [m.id, m])
    const newMap = new Map(newArray)
    const iterator = newMap.values()
    const unique = [...iterator]

    and in a single line */

const unique = [...new Map(members.map((m) => [m.id, m])).values()]

var removeDuplicates = function(nums) {
    let i = 0
    while (i < nums.length-1) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1)
        } else {
            i += 1
        }
    }
    return nums.length
};

/* other js option */
var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
};