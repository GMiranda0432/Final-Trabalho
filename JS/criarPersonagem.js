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


let vetPersonas = JSON.parse(localStorage.getItem("personagens")) ||[];

personaForm.addEventListener("submit", function (event) {
    event.preventDefault();

   if (inNomeP.value.trim() == "") {
        alert("O nome do personagem da sua ficha não pode ser invisível");
        inNomeP.focus();
        return;
    }
    if (inDescP.value.trim() == "") {
        alert("Dê ao menos uma mini descrição do personagem, habilidades ou aparência");
        inDescP.focus();
        return;
    }
    if (inBioP.value.trim() == "") {
        alert("Digite uma mini história pro seu personagem, tenha criatividade se for jogar RPG");
        inBioP.focus();
        return;
    }
    let persona = {
        id: Date.now(),
        classe: inClasseP.value,
        raca: inRacaP.value,
        sexo: inSexoP.value,
        descricao: inDescP.value.trim(),
        biografia: inBioP.value.trim(),
        nome: inNomeP.value.trim(),
        vida: Number(inVidaP.value),
        dano: Number(inDanoP.value),
        defesa: Number(inDefP.value),
        sorte: Number(inSorteP.value),
        velocidade: Number(inVeloP.value)

    };
    vetPersonas[vetPersonas.length] = persona;
    localStorage.setItem(
        "personagens",
        JSON.stringify(vetPersonas)
    );
    alert("Personagem salvo com sucesso! o verifique no seu inventário");
    personaForm.reset();
});