const inPesquisaClasse = document.getElementById("inPesquisaClasse");
const inPesquisaRaca = document.getElementById("inPesquisaRaca");
const inPesquisaSexo = document.getElementById("inPesquisaSexo");

const inPesquisaVida = document.getElementById("inPesquisaVida");
const inPesquisaDano = document.getElementById("inPesquisaDano");
const inPesquisaDefesa = document.getElementById("inPesquisaDefesa");
const inPesquisaSorte = document.getElementById("inPesquisaSorte");
const inPesquisaVelo = document.getElementById("inPesquisaVelo");

const inTipoFiltroVida = document.getElementById("inTipoFiltroVida")
const inTipoFiltroDano = document.getElementById("inTipoFiltroDano")
const inTipoFiltroDefesa = document.getElementById("inTipoFiltroDefesa")
const inTipoFiltroSorte = document.getElementById("inTipoFiltroSorte")
const inTipoFiltroVelo = document.getElementById("inTipoFiltroVelo")

const msgVazio = document.getElementById("msgVazio");

const listaPersonagens = document.getElementById("listaPersonagens");
const listaObjetos = document.getElementById("listaObjetos");
const listaAreas = document.getElementById("listaAreas");

const btnPesquisar = document.getElementById("btnPesquisar");
const somSucesso = document.getElementById("somSucesso");
const somFalha = document.getElementById("somFalha");

function renderizarLista() {
    let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
    listaPersonagens.innerHTML = "";

    if (vetPersonas.length > 0) {
        msgVazio.style.display = "none";

        for (var i = 0; i < vetPersonas.length; i++) {
            let personaAtual = vetPersonas[i];

            listaPersonagens.innerHTML += `
<div class="card">
<div class="card-body">
<h4 class="card-title">${personaAtual.nome}</h4>
    <p class="classe">
     ${personaAtual.classe}
    • ${personaAtual.raca}
    • ${personaAtual.sexo}
    </p>
    <p class="descricao">
        Descrição: ${personaAtual.descricao}
    </p>
    <p class="biografia">
        Biografia: ${personaAtual.biografia}
    </p>
    <div class="status">
        <span>Vida: ${personaAtual.vida}</span>
        <span>Dano: ${personaAtual.dano}</span>
        <span>Defesa: ${personaAtual.defesa}</span>
        <span>Sorte: ${personaAtual.sorte}</span>
        <span>Velocidade: ${personaAtual.velocidade}</span>
    </div>
    <div class="d-flex gap-1">
        <button class="btn btn-primary btn-ver"
            idPersona="${personaAtual.id}">
            Ver ficha
        </button>
        <button class="btn btn-warning btn-editar"
            idPersona="${personaAtual.id}">
            Editar
        </button>
        <button class="btn btn-danger btn-excluir"
            idPersona="${personaAtual.id}">
            Excluir
        </button>
    </div>
</div>
</div>
`;
        }
    } else {
        msgVazio.style.display = "block";
    }
}

renderizarLista();

listaPersonagens.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-excluir")) {
        const idDeletar = Number(event.target.getAttribute("idPersona"));

        if (confirm("Tem certeza que deseja apagar este personagem?")) {
            let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
            let novoVetPersonas = [];

            for (var i = 0; i < vetPersonas.length; i++) {
                if (vetPersonas[i].id !== idDeletar) {
                    novoVetPersonas[novoVetPersonas.length] = vetPersonas[i];
                }
            }

            localStorage.setItem("personagens", JSON.stringify(novoVetPersonas));
            renderizarLista();
            somSucesso.play();
        }
    }
});

btnPesquisar.addEventListener("click", function () {
    const pesquisaClasse = inPesquisaClasse.value;
    const pesquisaRaca = inPesquisaRaca.value;
    const pesquisaSexo = inPesquisaSexo.value;
    const pesquisaVida = inPesquisaVida.value;
    const pesquisaDano = inPesquisaDano.value;
    const pesquisaDef = inPesquisaDef.value;
    const pesquisaSorte = inPesquisaSorte.value;
    const pesquisaVelo = inPesquisaVelo.value;
    
    const tipoVida = inTipoFiltroVida.value;
    const tipoDano = inTipoFiltroDano.value;
    const tipoDef = inTipoFiltroDef.value;
    const tipoSorte = inTipoFiltroSorte.value;
    const tipoVelo = inTipoFiltroVelo.value;
    listaPersonagens.innerHTML = "";

    let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
    let novoVetPersonas = [];


    for (var i = 0; i < vetPersonas.length; i++) {
        let personaAtual = vetPersonas[i];

        let condClasse = false;
        if (pesquisaClasse == "tudoClasse") {
            condClasse = true;
        } else if (personaAtual.classe == pesquisaClasse) {
            condClasse = true;
        }
        let condRaca = false;
        if (pesquisaRaca == "tudoRaca") {
            condRaca = true;
        } else if (personaAtual.raca == pesquisaRaca) {
            condRaca = true;
        }
        let condSexo = false;
        if (pesquisaSexo == "tudoSexo") {
            condSexo = true;
        } else if (personaAtual.sexo == pesquisaSexo) {
            condSexo = true;
        }
        let condVida = false;
        if (pesquisaVida == "") {
            condVida = true;
        } else {
            let valorPesquisaVida = Number(pesquisaVida);
            let valorPersonaVida = Number(personaAtual.vida);

            if (tipoVida == "vidaMaior" && valorPersonaVida >= valorPesquisaVida) {
                condVida = true;
            } else if (tipoVida == "vidaMenor" && valorPersonaVida <= valorPesquisaVida) {
                condVida = true;
            }
        }
        let condDano = false;
        if (pesquisaDano == "") {
            condDano = true;
        } else {
            let valorPesquisaDano = Number(pesquisaDano);
            let valorPersonaDano = Number(personaAtual.dano);

            if (tipoDano == "danoMaior" && valorPersonaDano >= valorPesquisaDano) {
                condDano = true;
            } else if (tipoDano == "danoMenor" && valorPersonaDano <= valorPesquisaDano) {
                condDano = true;
            }
        }
        let condDef = false;
        if (pesquisaDef == "") {
            condDef = true;
        } else {
            let valorPesquisaDef = Number(pesquisaDef);
            let valorPersonaDef = Number(personaAtual.defesa);

            if (tipoDef == "defMaior" && valorPersonaDef >= valorPesquisaDef) {
                condDef = true;
            } else if (tipoDef == "defMenor" && valorPersonaDef <= valorPesquisaDef) {
                condDef = true;
            }
        }
        let condSorte = false;
        if (pesquisaSorte == "") {
            condSorte = true;
        } else {
            let valorPesquisaSorte = Number(pesquisaSorte);
            let valorPersonaSorte = Number(personaAtual.sorte);

            if (tipoSorte == "sorteMaior" && valorPersonaSorte >= valorPesquisaSorte) {
                condSorte = true;
            } else if (tipoSorte == "sorteMenor" && valorPersonaSorte <= valorPesquisaSorte) {
                condSorte = true;
            }
        }
        let condVelo = false;
        if (pesquisaVelo == "") {
            condVelo = true;
        } else {
            let valorPesquisaVelo = Number(pesquisaVelo);
            let valorPersonaVelo = Number(personaAtual.velocidade);

            if (tipoVelo == "veloMaior" && valorPersonaVelo >= valorPesquisaVelo) {
                condVelo = true;
            } else if (tipoVelo == "veloMenor" && valorPersonaVelo <= valorPesquisaVelo) {
                condVelo = true;
            }
        }

        if (condClasse == true && condRaca == true && condSexo == true && condVida == true && condDano == true && condDef == true && condSorte == true && condVelo == true) {
            novoVetPersonas[novoVetPersonas.length] = personaAtual;
        }
    }

    if (novoVetPersonas.length > 0) {
        msgVazio.style.display = "none";

        for (var j = 0; j < novoVetPersonas.length; j++) {
            let personaAtual = novoVetPersonas[j];

            listaPersonagens.innerHTML += `
<div class="card">
<div class="card-body">
<h4 class="card-title">${personaAtual.nome}</h4>
    <p class="classe">
     ${personaAtual.classe}
    • ${personaAtual.raca}
    •${personaAtual.sexo}
    </p>
    <p class="descricao">
        Descrição: ${personaAtual.descricao}
    </p>
    <p class="biografia">
        Biografia: ${personaAtual.biografia}
    </p>
    <div class="status">
        <span>Vida: ${personaAtual.vida}</span>
        <span>Dano: ${personaAtual.dano}</span>
        <span>Defesa: ${personaAtual.defesa}</span>
        <span>Sorte: ${personaAtual.sorte}</span>
        <span>Velocidade: ${personaAtual.velocidade}</span>
    </div>
    <div class="d-flex gap-1">
        <button class="btn btn-primary btn-ver" 
            idPersona="${personaAtual.id}">
            Ver ficha
        </button>
        <button class="btn btn-warning btn-editar"
            idPersona="${personaAtual.id}">
            Editar
        </button>
        <button class="btn btn-danger btn-excluir"
            idPersona="${personaAtual.id}">
            Excluir
        </button>
    </div>
</div>
</div>
`;
            somSucesso.play();
        }
    } else {
        msgVazio.style.display = "block";
        somFalha.play();
    }

});