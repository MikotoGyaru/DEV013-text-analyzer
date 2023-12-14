import analyzer from './analyzer.js';
let deleteButton=document.createElement("button");
deleteButton.textContent="Limpiar métricas";
deleteButton.classList.add("delete-button");
deleteButton.addEventListener("click",function() {
    let textareaDocument=document.querySelector("#element-to-remove");
    textareaDocument.value="";
});
    let containerElement=document.querySelector("#areadetexto");
    containerElement.appendChild(deleteButton);
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`