function create(words) {
   let content = document.getElementById('content');
   
   words.forEach(word => {
      let createDiv = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      createDiv.addEventListener('click', () =>{
         paragraph.style.display = 'block';
      });

      createDiv.appendChild(paragraph);
      content.appendChild(createDiv);
   });
}