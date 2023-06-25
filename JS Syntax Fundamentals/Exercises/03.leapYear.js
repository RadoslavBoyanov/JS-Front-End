
function checkYear( year) {
    let bool = false;
    if (year % 4 == 0){
       bool = true;
    }

    if(year % 100 == 0){
        bool = false;
    }

    if(year % 400 == 0){
        bool = true;
    }

    if(bool === true){
        console.log('yes')
    }
    else{
        console.log('no')
    }
}

checkYear(2003)
checkYear(4)
checkYear(2024)
checkYear(2021)
