function smallestNumber(firstInteger, secontInteger, thirdInteger){
    if(firstInteger < secontInteger && firstInteger < thirdInteger){
        return firstInteger;
    }else if(secontInteger< firstInteger && secontInteger < thirdInteger){
        return secontInteger;
    } else if(thirdInteger< firstInteger && thirdInteger < firstInteger){
        return thirdInteger;
    }

    if(firstInteger === secontInteger & secontInteger == thirdInteger){
        return firstInteger;
    }
}

console.log(smallestNumber(23, 6, 10));
console.log(smallestNumber(1, 17, -1));
console.log(smallestNumber(2, 2, 2));