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
    if (inVidaP.value < 1) {
        alert("Nesse mundo até espiritos tem mais vida que isso... por favor, digite um valor maior que 0");
        inVidaP.focus();
        return;
    }
    if (inDanoP.value < 1) {
        alert("Nem uma colher de sopa bate tão fraco... por favor, digite um valor maior que 0");
        inDanoP.focus();
        return;
    }
    if (inDefP.value < 1) {
        alert("Vestir papelão não conta como armadura... por favor, digite um valor maior que 0");
        inDefP.focus();
        return;
    }
    if (inSorteP.value < 1) {
        alert("Com essa sorte, até moedas caem de pé... por favor, digite um valor maior que 0");
        inSorteP.focus();
        return;
    }
    if (inVeloP.value < 1) {
        alert("Seu personagem é mais lento que uma estátua... por favor, digite um valor maior que 0");
        inVeloP.focus();
        return;
    }
    if (inVidaP.value > 100) {
        alert("Você criou um tanque de guerra, não um personagem... por favor, digite um valor menor que 101");
        inVidaP.focus();
        return;
    }
    if (inDanoP.value > 100) {
        alert("Calma aí, destruidor de mundos... por favor, digite um valor menor que 101");
        inDanoP.focus();
        return;
    }
    if (inDefP.value > 100) {
        alert("Castelos medievais não têm tanta proteção... por favor, digite um valor menor que 101");
        inDefP.focus();
        return;
    }
    if (inSorteP.value > 100) {
        alert("Não minta, Nem os dados conseguem tanta sorte... por favor, digite um valor menor que 101");
        inSorteP.focus();
        return;
    }
    if (inVeloP.value > 100) {
        alert("Seu personagem ultrapassou a velocidade do roteiro... por favor, digite um valor menor que 101");
        inVeloP.focus();
        return;
    }
    let persona = {
        id: Date.now(),
        nome: inNomeP.value.trim(),
        classe: inClasseP.value,
        raca: inRacaP.value,
        sexo: inSexoP.value,
        descricao: inDescP.value.trim(),
        biografia: inBioP.value.trim(),
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
    alert("Personagem salvo com sucesso! o verifique no seu inventário");
    personaForm.reset();
});