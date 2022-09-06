function IsUnique(str: String) {

    //supposing is ASCII
    if (str.length > 128) return false;

    //space complexity O(n)
    let char_set:Array<Boolean> = [];

    //time complexity O(n)
    [...str].forEach(c => {
        if (char_set[c]) return false;
        char_set[c] = true;
    });
    return true;
}

function isUniqueBitWise(str: String) {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if ((checker & (1 << val)) > 0) return false;
        checker |= (1 << val);
    }
    return true;
}

//without sorting, ascii or unicode? case sensitive or not?
function checkPermutation(str1: String, str2: String) {
    if (str1.length !== str2.length) return false;
    let char_set:Array<Boolean> = [];
    [...str1].forEach(c => {
        char_set[c] = true;
    }
    );
    for (let i = 0; i < str2.length; i++) {
        let c = str2.charAt(i);
        if (!char_set[c]) return false;
        char_set[c] = false;
    }
    return true;
}

function urlify(str: String) {

    let spaceCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') spaceCount++;
    }
    let trueLength = str.length + spaceCount * 2;

    let result = '';
    for (let i = 0; i < trueLength; i++) {
        if (str.charAt(i) === ' ') {
            result += '%20';
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

function isPermutationOfPalindrome(phrase: String) {
    var table = buildCharFrequencyTable(phrase)
    return checkMaxOneOdd(table)
}

/* Check that no more than one character has an odd count. */
function checkMaxOneOdd (table: Array<number>): boolean {
     var foundOdd: boolean = false
     for (let i = 0; i < table.length; i++) {
        if (i % 2 == 1) {
            if (foundOdd) return false
            foundOdd = true
        }
    }
    return true;
}

function getChatNumber(c: string): number {
    return c.charCodeAt(0)
}
