function rangeCharecters(firstChar, secondChar){
    let charArray = [];
    let firstCharNum = firstChar.charCodeAt(0);
    let secondCharNum = secondChar.charCodeAt(0);

    if(firstCharNum < secondCharNum){
        for (let index = firstCharNum + 1; index < secondCharNum; index++) {
            charArray.push(String.fromCharCode(index));
        }
    }
    else{
        for (let index = secondCharNum + 1; index < firstCharNum; index++) {
            charArray.push(String.fromCharCode(index));
        }
    }
    console.log(charArray.join(" "));
}

rangeCharecters('a','d')
rangeCharecters('#', ':')
rangeCharecters('C','#')