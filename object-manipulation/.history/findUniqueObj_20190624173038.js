"use strict";

let avengersAssemble = [
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
    },
    {
        name: 'Dr. Strange',
        age: 33
    }
];

/**
 * @function: Finds duplicate in an arrayOfObjects based on input key.
 * @param {*} arr
 * @returns uniqueArray
 */
function fetchUnique(arr, uniqField) {
    if (!arr.length)  console.error("Please enter valid array");
    console.log("here");
    let uniq = arr.map(ele => ele[uniqField])
        .map((ele, index, arrOfIds) => arrOfIds.indexOf(ele) == index && index) // specify Not-Equal-To : to fetch only duplicates
        .filter(obj => arr[obj])
        .map(ele => arr[ele]);
    return uniq;
}


console.log(fetchUnique(avengersAssemble = [], "name"));