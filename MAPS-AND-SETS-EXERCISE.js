//Maps and Sets Exercise

//Quick Question #1
    //It returns [1,2,3,4]

//Quick Question #2
    //It returns "ref"

//Quick Question #3
    //It looks like {[1,2,3] => true, [1,2,3] => false}

//hasDuplicate
const hasDuplicate = arr => [...new Set(arr)].length !== arr.length;

//vowelCount
const vowelCount = str => {const vowels = new Map();[...str].forEach(char => {if ("AEIOUaeiou".includes(char)){if(vowels.has(char)){vowels.set(char,vowels.get(char)+1);}else{vowels.set(char, 1)}}}); return vowels};