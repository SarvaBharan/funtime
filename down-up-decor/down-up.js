
/**
 * @function
 * @param {type String} word
 * @returns
 */
function downUp(word) {
    if(!word || typeof word != "string") return console.error("Please enter a valid string");
    let i = 0;
    let len = word.length;
    let res;
    while(i < word.length) {
        res = word.slice(0, len);
        console.info(res);
        len--;
        i++;
    }
    len = 2;
    i = i - len;
    while(i >= 0) {
        res = word.slice(0, len);
        console.info(res);
        len++;
        i--;
    }
}

let exampleString = "Welcome!";

downUp(exampleString);