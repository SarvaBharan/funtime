function fetchUnique(arr) {
	if(!arr.length) return;
	let uniq = arr.map(ele => ele['id']).map((ele, index, arrOfIds) => arrOfIds.indexOf(ele) !== index && index).filter(obj => arr[obj]).map(ele => arr[ele]);
	return uniq;
}