function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      clear();
      let rows = document.querySelectorAll('tbody td');
      let input = document.getElementById('searchField');
      let string = input.value;
      
      for (const row of rows) {
         if(row.textContent.includes(string)){
            row.parentElement.classList.add('select');
         } 
      }

      input.value = '';
   }

   function clear(){
      let rows = document.querySelectorAll('tbody td');
      for (const row of rows) {
         row.parentElement.classList.remove('select');
      }
   }
}