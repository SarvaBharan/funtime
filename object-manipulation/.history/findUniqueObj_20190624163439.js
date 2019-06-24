

/**
 * @function Finds duplicate in an arrayOfObjects
 * @param {*} arr
 * @returns uniqueArray
 */
function fetchUnique(arr) {
    if (!arr.length) return;
    let uniq = arr.map(ele => ele['id'])
        .map((ele, index, arrOfIds) => arrOfIds.indexOf(ele) == index && index)
        .filter(obj => arr[obj])
        .map(ele => arr[ele]);
    return uniq;
}

let arr = [
    {
        name: '',
        age: 'This is Amsterdam!'
    },
    {
        name: 'Berlin',
        age: 'This is Berlin!'
    },
    {
        name: 'Budapest',
        age: 'This is Budapest!'
    }
];