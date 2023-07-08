function colorize() {
    let tdEven = Array.from(document.querySelectorAll('table tr'));
    
    tdEven.forEach((item, index) => {
        if(index % 2 !== 0){
            item.style.backgroundColor = 'Teal';
        }
    });
}