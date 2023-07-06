function deleteByEmail() {
    let result = document.getElementById('result');
    let input = document.querySelector('input[name="email"]');
    let emailValue = input.value;
    let evenTd = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let foundElement = evenTd.find((td) => td.textContent === emailValue);
    
    if(foundElement){
        console.log(foundElement);
        foundElement.parentElement.remove();
        result.textContent = 'Deleted';
    }else{
        result.textContent = 'Not found.';
    }
}