function search() {
   let ulTowns = document.querySelectorAll('#towns li');
   let searchText = document.getElementById('searchText');
   let matchesFound = document.getElementById('result');
   let counter = 0;
   Array.from(ulTowns).forEach((town)=> {
      if(town.textContent.includes(searchText.value)){
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   });
   matchesFound.textContent = `${counter} matches found`;
   searchText.textContent = '';
}
