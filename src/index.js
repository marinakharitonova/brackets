module.exports = function check(str, bracketsConfig) {

    let simpleBracketsConfig = bracketsConfig.reduce((acc, item) => {
        return acc.concat(item)
    });

    let arr = [];
    for (let char of str) {
        if (arr[arr.length - 1] && char === arr[arr.length - 1]) {
            arr.pop()
        } else {
            arr.push(simpleBracketsConfig[simpleBracketsConfig.indexOf(char) + 1])
        }
    }
    return arr.length === 0;

}
