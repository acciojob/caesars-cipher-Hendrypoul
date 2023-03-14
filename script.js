function ROT13(str) {

    str = str.split("")
    
    str = str.map(function(char){
        var charCode = char.charCodeAt(0);
        if(charCode >=65 && charCode <=90){
            charCode = ((charCode-65+13)%26)+65;
        }
        
        return String.fromCharCode(charCode);
    })
    str = str.join("");
    return str;
    
}
console.log(ROT13("SERR PBQR PNZC"))