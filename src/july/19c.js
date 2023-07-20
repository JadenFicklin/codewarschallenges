// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
    const split = x.split(' ');
    const joined = split.join('');
    return joined;
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
