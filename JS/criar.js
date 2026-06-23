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

    if (inNomeP.value.trim() === "") {
        alert("O nome do personagem da sua ficha não pode ser invisível");
        inNomeP.focus();
        return;
    }
    if (inDescP.value.trim() === "") {
        alert("Dê ao menos uma mini descrição do personagem, habilidades ou aparência")
        inDescP.focus();
        return;
    }
    if (inBioP.value.trim() === "") {
        alert("Digite uma mini história pro seu personagem, tenha criatividade se for jogar RPG")
        inBioP.focus();
        return;
    }
    if (inClasseP.value === "") {
        alert("Por favor, selecione uma classe para o seu personagem!");
        inClasseP.focus();
        return;
    }
    if (inRacaP.value === "") {
        alert("Por favor, nos informe a raça do seu personagem!");
        inRacaP.focus();
        return;
    }
    if (inSexoP.value === "") {
        alert("Por favor, informe o sexo do personagem, mesmo que seja desconhecido");
        inSexoP.focus();
        return;
    }
    if (inVidaP.value < 1) {
        alert("Seu personagem precisa de vida para ser criado, digite um valor entre 1 e 100 para vida");
        inVidaP.focus();
        return;
    }
    if (inDanoP.value < 1) {
        alert("Seu personagem precisa de conseguir atacar ainda, digite um valor entre 1 a 100 para dano");
        inDanoP.focus();
        return;
    }
    if (inDefP.value < 1) {
        alert("Seu personagem precisa de forças para sobreviver e se defender, digite um valor entre 1 e 100 para defesa");
        inDefP.focus();
        return;
    }
    if (inSorteP.value < 1) {
        alert("Todos tem o mínimo de sorte existente, é essencial para viver nesse mundo, digite um valor entre 1 e 100 para sorte");
        inSorteP.focus();
        return;
    }
    if (inVeloP.value < 1) {
        alert("É necessário ter o mínimo de velocidade para conseguir se locomover, por favor digite um valor entre 0 a 100 para velocidade");
        inVeloP.focus();
        return;
    }
    if (inVidaP.value > 100) {
        alert("Seu personagem não pode ter tanta energia, digite um valor entre 1 e 100 para vida");
        inVidaP.focus();
        return;
    }
    if (inDanoP.value > 100) {
        alert("Seu personagem não pode ser tão poderoso, digite um valor entre 1 a 100 para dano");
        inDanoP.focus();
        return;
    }
    if (inDefP.value > 100) {
        alert("Seu personagem não pode ser tão denso, digite um valor entre 1 e 100 para defesa");
        inDefP.focus();
        return;
    }
    if (inSorteP.value > 100) {
        alert("Nesse mundo cruel, seu personagem não pode ser agraciado com meta-game, digite um valor entre 1 e 100 para sorte");
        inSorteP.focus();
        return;
    }
    if (inVeloP.value > 100) {
        alert("Não se pode ser tão rápido nos dias de hoje, por favor digite um valor entre 0 a 100 para velocidade");
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