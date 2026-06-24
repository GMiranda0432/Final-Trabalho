const objForm = document.getElementById("objForm");

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

    if (inNomeO.value.trim() == "") {
        alert("O nome do objeto da sua ficha não pode ser invisível");
        inNomeO.focus();
        return;
    }
    if (inDescO.value.trim() == "") {
        alert("Dê ao menos uma mini descrição do objeto, habilidades ou aparência");
        inDescO.focus();
        return;
    }
    if (inHistO.value.trim() == "") {
        alert("Dê uma história de origem de criação ao seu objeto, seja criativo amigo");
        inHistO.focus();
        return;
    }
let obj = {
    id:Date.now(),
    nome: inNomeO.value.trim(),
    descricao: inDescO.value.trim(),
    historia: inHistO.value.trim(),
    classe: inClasseO.value,
    tipo: inTipoO.value,
    vida: Number(inVidaO.value),
    dano: Number(inDanoO.value),
    defesa: Number(inDefO.value),
    sorte: Number(inSorteO.value),
    velocidade: Number(inVeloO.value),
};
    vetObjetos.push(obj);
    localStorage.setItem(
        "objetos",
        JSON.stringify(vetObjetos)
    );
    alert("Objeto salvo com sucesso! o verifique no seu inventário");
    objForm.reset();
});