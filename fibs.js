let arr = []

function fibs(n){
	for(let i = 0; i < n; i++){
		if(i == 0 || i == 1) {
			arr.push(i)
		} 
      	if(i > 1) {
			let result = arr[i-2] + arr[i-1];
          	arr.push(result)
        }
	}
	return arr;
}

function fibsRec(n) {
  	if(n == 0){
		return []
    } else if (n == 1) {
    	return [0]
    } else if (n == 2) {
    	return [0,1]
    } else {
		let fibSeq = fibsRec(n - 1);
      	fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2])
      	return fibSeq;
    }
  	return arr;
}