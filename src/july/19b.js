// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    const splitS = s.split(' ');
    const splitLengths = [];
    for (let i = 0; i < splitS.length; i++) {
        splitLengths.push(splitS[i].length);
    }
    const min = Math.min(...splitLengths);
    return min;
}

console.log(findShort("Let's Travel abroad shall we"));
