const inPesquisaNome = document.getElementById("inPesquisaNome");
const inPesquisaTipo = document.getElementById("inPesquisaTipo");
const msgVazio = document.getElementById("msgVazio");
const listaPersonagens = document.getElementById("listaPersonagens");
const listaObjetos = document.getElementById("listaObjetos");
const listaAreas = document.getElementById("listaAreas");
const btnPesquisar = document.getElementById("btnPesquisar");

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
                                <button class="btn btn-warning btn-sm btn-editar" data-id="${personaAtual.id}">Editar</button>
                                <button class="btn btn-danger btn-sm btn-excluir" data-id="${personaAtual.id}">Excluir</button>
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