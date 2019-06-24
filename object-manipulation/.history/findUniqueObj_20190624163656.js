

/**
 * @function Finds duplicate in an arrayOfObjects
 * @param {*} arr
 * @returns uniqueArray
 */
function fetchUnique(arr, uniqField) {
    if (!arr.length) return;
    let uniq = arr.map(ele => ele['id'])
        .map((ele, index, arrOfIds) => arrOfIds.indexOf(ele) == index && index)
        .filter(obj => arr[obj])
        .map(ele => arr[ele]);
    return uniq;
}

let sample = [
    {
        name: 'Hulk',
        age: 24
    },
    {
        name: 'Thor',
        age: 32
    },
    {
        name: 'Dr. Strange',
        age: 35
    },
    {
        name: 'Hulk',
        age: 24
    }
];

fetchUnique(arr);