function validate() {
    let input = document.getElementById('email');
    
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let value = input.value;
    input.addEventListener('change', checkEmail)

    function checkEmail(event){
        if(regex.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }
        event.target.className = 'error';
    }
}