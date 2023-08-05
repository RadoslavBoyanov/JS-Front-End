function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (currentCase === 'Pascal Case') {
    let text = input.toLowerCase();
    let span = text
      .split(" ")
      .map((word) => {
        const firstChar = word[0].toUpperCase();
        const remainingLetters = word.slice(1);
        return `${firstChar}${remainingLetters}`;
      })
      .join("");

    result.textContent = span;
  }
  else if (currentCase === 'Camel Case') {
    result.textContent = toCamelCase(input);
  } else {
    result.textContent = 'Error!';
  }
  
  function toCamelCase(string) {
    return string
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }
}