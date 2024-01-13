import analyzer from './analyzer.js';
//let deleteButton=document.createElement("button");
//deleteButton.textContent="Limpiar métricas";
//deleteButton.classList.add("delete-button");
let deleteButton=document.getElementById("reset-button")
deleteButton.addEventListener("click",function() {
    let textareaDocument=document.getElementsByName("user-input")[0];
    textareaDocument.value="";
    const clase = document.querySelectorAll(".analyzer");
          console.log(clase);
          const liWordCount = (clase[0]);
          liWordCount.innerHTML = "Palabras: "
          const liCharacterCount = (clase[1]);
          liCharacterCount.innerHTML = "Caracteres: "
          const liCharacterCountExcludingSpaces = (clase[2]);
          liCharacterCountExcludingSpaces.innerHTML = "Caracteres Sin Espacios: "
          const liAverageWordLength = (clase[3]);
          liAverageWordLength.innerHTML = "Promedio Longitud: "
          const liNumberCount = (clase[4]);
          liNumberCount.innerHTML = "Números: "
          const liNumberSum = (clase[5]);
          liNumberSum.innerHTML = "Suma Números: "
    //let dataTestIdDocument=document.getElementsByClassName("metricas")[0];
    //dataTestIdDocument.value="";
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
          let numberSum=analyzer.getNumberSum(textoIngresado);
          console.log("suma-números: "+numberSum);

          const clase = document.querySelectorAll(".analyzer");
          console.log(clase);
          const liWordCount = (clase[0]);
          liWordCount.innerHTML = "Palabras: "+wordCount
          const liCharacterCount = (clase[1]);
          liCharacterCount.innerHTML = "Caracteres: "+characterCount
          const liCharacterCountExcludingSpaces = (clase[2]);
          liCharacterCountExcludingSpaces.innerHTML = "Caracteres Sin Espacios: "+characterCountExcludingSpaces
          const liAverageWordLength = (clase[3]);
          liAverageWordLength.innerHTML = "Promedio Longitud: "+averageWordLength
          const liNumberCount = (clase[4]);
          liNumberCount.innerHTML = "Números: "+numberCount
          const liNumberSum = (clase[5]);
          liNumberSum.innerHTML = "Suma Números: "+numberSum
        });
        

    // Aquí estaba probando otro elemento en js solo para ver cómo funciona
    //let age = prompt ("¿Cuántos años tienes?", );
    //alert(`¡Tienes ${age} años!`);

    //const clase = document.querySelectorAll(".analyzer");
    //console.log(clase);


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`