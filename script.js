// Your Script here.
function isCap(num) {
	if(num >= 65 && num <= 90) {
		return true;
	}
	return false;
}
function range(num, min, max) {
	if(num >= min && num <= max) {
		return num;
	}
	else {
		return num - max + min - 1;
	}
}
range(100, 65, 90);
function rot13(str) {
	str = str.toUpperCase();
	var n = 0;
	var l ="";
	var str2 = "";
	for(x = 0; x < str.length; x++) {
		n = str.charCodeAt(x);
		if (isCapLetter(n)) {
			n = range(n + 13, 65, 90);
		}
		l = String.fromCharCode(n);
		str2 += 1;
	}
	return str2;
}
rot13("serR PBQR PNZC")