const analyzer = {  
  getWordCount: (text) => {
    //const words = text.split(/\s+/);
   // return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let wordCount = 0;
    for (let i = 0; i < words.length; i++){
      const word = words[i];
    let hasLetters = false;

    for (let t = 0; t < word.length; t++) {
      const character = word[t].toLowerCase();

    if (character >= "a" && character <= "z") {
      hasLetters = true;
      break;
    }
    }
    if (hasLetters) {
      wordCount++;
    }
    }
    return wordCount;
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //const cleanedText = text.replace(/[^\w\s]/g, '');
    const cleanedText = text.replace(/\s/g, '');
    return cleanedText.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => { 
    const words=text.split(/\s+/);
    let wordAvg=0;
    for (let i=0; i < words.length; i++) {
      wordAvg+=words[i].length;
    }
    return wordAvg/words.length;
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //const numbers = text.match(/\d+/g);
    //return numbers ? numbers.length : 0;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let numberCount = 0;
    let currentNumber = "";
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (!isNaN(parseInt(character)) && !(/[a-zA-Z]/).test(character)) {
        currentNumber += character;
      } else {
        if (currentNumber !== "") {
          numberCount++;
          currentNumber = "";
        }
      }
    }
    if (currentNumber !== "") {
      numberCount++;
    }
    return numberCount;
  },
  getNumberSum: (text) => {
    //const numbers=text.match(/\d+/g);
    //return numbers ? numbers.reduce((acc,num) => acc+parseInt(num), 0):0;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let currentNumber = '';
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (!isNaN(parseInt(character))) {
        currentNumber += character;
      } else {
        if (currentNumber !== '') {
          sum += parseInt(currentNumber);
          currentNumber = '';
        }
      }
    }
    if (currentNumber !== '') {
      sum += parseInt(currentNumber);
    }
    return sum;
  },
};

export default analyzer;