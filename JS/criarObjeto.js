const objForm = document.getElementById("personaForm");

const inNomeO = document.getElementById("inNomeO");
const inClasseO = document.getElementById("inClasseO");
const inTipoO = document.getElementById("inTipoO");
const inHistO = document.getElementById("inHistO");
const inDescO = document.getElementById("inDescO");

const inVidaO = document.getElementById("inVidaO");
const inDanoO = document.getElementById("inDanoO");
const inDefO = document.getElementById("inDefO");
const inSorteO = document.getElementById("inSorteO");
const inVeloO = document.getElementById("inVeloO");

let vetObjetos = JSON.parse(localStorage.getItem("objetos")) || [];

objForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inNomeO.value.trim() === "") {
        alert("O nome do objeto da sua ficha não pode ser invisível");
        inNomeO.focus();
        return;
    }
    if (inDescO.value.trim() === "") {
        alert("Dê ao menos uma mini descrição do objeto, habilidades ou aparência");
        inDescO.focus();
        return;
    }
    if (inClasseO.value === "") {
        alert("Por favor, selecione uma classe para o seu objeto!");
        inClasseO.focus();
        return;
    }
    if (inHistO.value.trim() === "") {
        alert("Dê uma história de origem de criação ao seu objeto, seja criativo amigo");
        inHistO.focus();
    }
    if (inTipoO.value === "") {
        alert("Escolha um tipo para o objeto para cria-lo");
        inTipoO.focus();
    }
});