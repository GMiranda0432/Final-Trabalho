const personaForm = document.getElementById("personaForm");

const inNomeP = document.getElementById("inNomeP");
const inClasseP = document.getElementById("inClasseP");
const inRacaP = document.getElementById("inRacaP");
const inSexoP = document.getElementById("inSexoP");
const inDescP = document.getElementById("inDescP");
const inBioP = document.getElementById("inBioP");

const inVidaP = document.getElementById("inVidaP");
const inDanoP = document.getElementById("inDanoP");
const inDefP = document.getElementById("inDefP");
const inSorteP = document.getElementById("inSorteP");
const inVeloP = document.getElementById("inVeloP");

let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
let vetObjetos = JSON.parse(localStorage.getItem("objetos")) || [];
let vetCenarios = JSON.parse(localStorage.getItem("cenarios")) || [];

personaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let persona = {
        id: Date.now(),
        nome: inNomeP.value,
        classe: inClasseP.value,
        raca: inRacaP.value,
        sexo: inSexoP.value,
        descricao: inDescP.value,
        biografia: inBioP.value,
        vida: Number(inVidaP.value),
        dano: Number(inDanoP.value),
        defesa: Number(inDefP.value),
        sorte: Number(inSorteP.value),
        velocidade: Number(inVeloP.value)

    };
    vetPersonas.push(persona);
    localStorage.setItem(
        "personagens",
        JSON.stringify(vetPersonas)
    );
    alert("Personagem salvo com sucesso Monamu!");
    personaForm.reset();
});