import analyzer from './analyzer.js';
//let deleteButton=document.createElement("button");
//deleteButton.textContent="Limpiar métricas";
//deleteButton.classList.add("delete-button");
let deleteButton=document.getElementById("reset-button")
deleteButton.addEventListener("click",function() {
    let textareaDocument=document.getElementsByName("user-input")[0];
    textareaDocument.value="";
});
    //let containerElement=document.querySelector("#areadetexto");
    //containerElement.appendChild(deleteButton);

    let userInput = document.getElementsByName("user-input")[0];
    userInput.addEventListener("input", function() {
          // Este código se ejecutará cada vez que el contenido del input cambie
          let textoIngresado = userInput.value;
          console.log("Texto ingresado:", textoIngresado);
          let wordCount=analyzer.getWordCount(textoIngresado);
          console.log("cantidad-de-palabras: " + wordCount);
          let characterCount=analyzer.getCharacterCount(textoIngresado);
          console.log("cantidad-de-caracteres: " + characterCount);
          let characterCountExcludingSpaces=analyzer.getCharacterCountExcludingSpaces(textoIngresado);
          console.log("cantidad-de-caracteres-sin-espacio: "+characterCountExcludingSpaces);
          let averageWordLength=analyzer.getAverageWordLength(textoIngresado);
          console.log("longitud-promedio-de-palabras: "+averageWordLength);
          let numberCount=analyzer.getNumberCount(textoIngresado);
          console.log("cantidad-de-números: "+numberCount);
          let numerSum=analyzer.getNumberSum(textoIngresado);
          console.log("suma-números: "+numerSum);
        });

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`