function solve() {
  const textArea = document.getElementById('input');
  let output = document.getElementById('output');
  let sentences = textArea.value.split('.');
  sentences.pop();
  console.log(sentences);

  while (sentences.length > 0) {
    let paragraph = document.createElement('p');
    let curentText = sentences.splice(0,3).map((x) => x.trimStart());
    paragraph.textContent = curentText.join('.') + '.';
    output.appendChild(paragraph);
  }
}