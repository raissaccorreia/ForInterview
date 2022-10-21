var intersect = function(nums1, nums2) {
    if (nums1 == null || nums2 == null || nums1.length == 0 || nums2.length == 0) {
        return [];
    }

    let i = j = 0;
    nums1.sort();
    nums2.sort();
    let number = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]){
            j++;
        } else {
            number.push(nums1[i++]);
            j++;
        }
    }

    return number;
}
//you can use a dictionary too

var intersect2 = function(nums1, nums2) {

    const map = new Map();

    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }

    const result = [];
    
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }

    return result;
};

/*for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
        if (nums1[i] === nums2[j]){
            number.push(nums1[i])
        }
    }
}*/