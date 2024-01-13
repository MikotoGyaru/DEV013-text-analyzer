const analyzer = {  
  getWordCount: (text) => {
    const words = text.split(/\s+/);
    return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
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
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (!isNaN(Number(character)) && character.trim() !== '') {
        numberCount++;
      //if (isNumber(character)) {
        //numberCount++;
      }
    }
    return numberCount;
  },
  getNumberSum: (text) => {
    const numbers=text.match(/\d+/g);
    return numbers ? numbers.reduce((acc,num) => acc+parseInt(num), 0):0;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //Primero debe reconocer los números ingresados en el cuadro de texto
    //
  },
};

export default analyzer;
