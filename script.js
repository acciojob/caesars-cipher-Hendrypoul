function rot13(str) {
	const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var decodedArr = [];
	for(var i = 0; i < str.length; i++) {
		var newArr = abc.indexOf(str[i]) + 13;
	if(abc.indexOf(str[i]) == -1) {
		decodeArr.push(str[i]);
	}
	else {
		decodeArr.push(abc[newArr]);
	}
	}
	return decodeArr.join("");
}
rot13("SERR PBQR PNZC")