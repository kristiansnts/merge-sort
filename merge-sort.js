function mergeSort(arr) {
	if(arr.length < 2) {
		return arr;
	} else {
    	let mid = Math.floor((arr.length)/2);
      	let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid);
        return merge(mergeSort(leftArr), mergeSort(rightArr))
    }
}

function merge(leftArr, rightArr) {
	let result = [];
  
  	while(leftArr.length > 0 && rightArr.length > 0) {
    	result.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift())
    }
  
  	return result.concat(leftArr, rightArr);
}