const inPesquisaClasse = document.getElementById("inPesquisaClasse");
const inPesquisaVida = document.getElementById("inPesquisaVida");
const inTipoFiltroVida = document.getElementById("inTipoFiltroVida")

const msgVazio = document.getElementById("msgVazio");

const listaPersonagens = document.getElementById("listaPersonagens");
const listaObjetos = document.getElementById("listaObjetos");
const listaAreas = document.getElementById("listaAreas");

const btnPesquisar = document.getElementById("btnPesquisar");
const somSucesso = document.getElementById("somSucesso");

function renderizarLista() {
    let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
    listaPersonagens.innerHTML = "";

    if (vetPersonas.length > 0) {
        msgVazio.style.display = "none";

        for (var i = 0; i < vetPersonas.length; i++) {
            let personaAtual = vetPersonas[i];

            listaPersonagens.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${personaAtual.nome}</h5>
                            <p class="card-text">Classe: ${personaAtual.classe}</p>
                            <p class="card-text">Raça: ${personaAtual.raca}</p>
                            <p class="card-text">Sexo: ${personaAtual.sexo}</p>
                            <p class="card-text">Descrição: ${personaAtual.descricao}</p>
                            <p class="card-text">Biografia: ${personaAtual.biografia}</p>
                            <p class="card-text">Vida: ${personaAtual.vida}</p>
                            <p class="card-text">Dano: ${personaAtual.dano}</p>
                            <p class="card-text">Defesa: ${personaAtual.defesa}</p>
                            <p class="card-text">Sorte: ${personaAtual.sorte}</p>
                            <p class="card-text">Velocidade: ${personaAtual.velocidade}</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-warning btn-sm btn-editar" idPersona="${personaAtual.id}">Editar</button>
                                <button class="btn btn-danger btn-sm btn-excluir" idPersona="${personaAtual.id}">Excluir</button>
                            </div>
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
    somSucesso.play();
            let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
            let novoVetPersonas = [];

            for (var i = 0; i < vetPersonas.length; i++) {
                if (vetPersonas[i].id !== idDeletar) {
                    novoVetPersonas[novoVetPersonas.length] = vetPersonas[i];
                }
            }

            localStorage.setItem("personagens", JSON.stringify(novoVetPersonas));
            renderizarLista();
        }
    }
});

btnPesquisar.addEventListener("click", function () {
    const pesquisaClasse = inPesquisaClasse.value;
    const pesquisaVida = inPesquisaVida.value;
    const tipoVida = inTipoFiltroVida.value;
    listaPersonagens.innerHTML = "";

    let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
    let novoVetPersonas = [];

    somSucesso.play();
    for (var i = 0; i < vetPersonas.length; i++) {
        let personaAtual = vetPersonas[i];
        let condClasse = false;

        if (pesquisaClasse == "tudoClasse") {
            condClasse = true;
        } else if (personaAtual.classe == pesquisaClasse) {
            condClasse = true;
        }
        let condVida = false;
        if (pesquisaVida == "") {
            condVida = true;
        } else {
            let valorPesquisaVida = Number(pesquisaVida);
            let valorPersonaVida = Number(personaAtual.vida);

            if (tipoVida == "maior" && valorPersonaVida >= valorPesquisaVida) {
                condVida = true;
            } else if (tipoVida == "menor" && valorPersonaVida <= valorPesquisaVida) {
                condVida = true;
            }
        }

        if (condClasse == true && condVida == true) {
            novoVetPersonas[novoVetPersonas.length] = personaAtual;
        }
    }

    if (novoVetPersonas.length > 0) {
        msgVazio.style.display = "none";

        for (var j = 0; j < novoVetPersonas.length; j++) {
            let personaAtual = novoVetPersonas[j];

            listaPersonagens.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${personaAtual.nome}</h5>
                            <p class="card-text">Classe: ${personaAtual.classe}</p>
                            <p class="card-text">Raça: ${personaAtual.raca}</p>
                            <p class="card-text">Sexo: ${personaAtual.sexo}</p>
                            <p class="card-text">Descrição: ${personaAtual.descricao}</p>
                            <p class="card-text">Biografia: ${personaAtual.biografia}</p>
                            <p class="card-text">Vida: ${personaAtual.vida}</p>
                            <p class="card-text">Dano: ${personaAtual.dano}</p>
                            <p class="card-text">Defesa: ${personaAtual.defesa}</p>
                            <p class="card-text">Sorte: ${personaAtual.sorte}</p>
                            <p class="card-text">Velocidade: ${personaAtual.velocidade}</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-warning btn-sm btn-editar" idPersona="${personaAtual.id}">Editar</button>
                                <button class="btn btn-danger btn-sm btn-excluir" idPersona="${personaAtual.id}">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        msgVazio.style.display = "block";
    }
});