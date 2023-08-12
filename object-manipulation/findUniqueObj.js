"use strict";

let avengersAssemble = [
  {
    name: "Hulk",
    age: 24,
  },
  {
    name: "Thor",
    age: 32,
  },
  {
    name: "Dr. Strange",
    age: 35,
  },
  {
    name: "Hulk",
    age: 24,
  },
  {
    name: "Dr. Strange",
    age: 33,
  },
];

/**
 * The function fetchUnique takes an array of objects and a unique field as input, and returns an array
 * of objects with unique values for that field.
 * @param arr - The `arr` parameter is an array of objects.
 * @param uniqField - The `uniqField` parameter is the field in each object of the `arr` array that you
 * want to use to determine uniqueness.
 * @returns an array of unique objects from the input array `arr` based on the specified unique field
 * `uniqField`.
 */
function fetchUnique(arr, uniqField) {
  if (!arr.length) return console.error("Please ente r valid array");
  let uniq = arr
    .map((ele) => ele[uniqField])
    .map((ele, index, arrOfIds) => arrOfIds.indexOf(ele) == index && index)
    .filter((obj) => arr[obj])
    .map((ele) => arr[ele]);
  return uniq;
}

console.log(fetchUnique(avengersAssemble, "name"));
