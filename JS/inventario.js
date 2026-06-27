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
<div class="card">
<div class="card-body">
<h4 class="card-title">${personaAtual.nome}</h4>
    <p class="classe">
    🛡️ ${personaAtual.classe}
    • 👤 ${personaAtual.raca}
    • ${personaAtual.sexo}
    </p>
    <p class="descricao">
        Descrição: ${personaAtual.descricao}
    </p>
    <p class="biografia">
        Biografia: ${personaAtual.biografia}
    </p>
    <div class="status">
        <span>❤️ ${personaAtual.vida}</span>
        <span>⚔️ ${personaAtual.dano}</span>
        <span>🛡️ ${personaAtual.defesa}</span>
        <span>🍀 ${personaAtual.sorte}</span>
        <span>⚡ ${personaAtual.velocidade}</span>
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
<div class="card">
<div class="card-body">
<h4 class="card-title">${personaAtual.nome}</h4>
    <p class="classe">
    🛡️ ${personaAtual.classe}
    • 👤 ${personaAtual.raca}
    • ${personaAtual.sexo}
    </p>
    <p class="descricao">
        Descrição: ${personaAtual.descricao}
    </p>
    <p class="biografia">
        Biografia: ${personaAtual.biografia}
    </p>
    <div class="status">
        <span>❤️ ${personaAtual.vida}</span>
        <span>⚔️ ${personaAtual.dano}</span>
        <span>🛡️ ${personaAtual.defesa}</span>
        <span>🍀 ${personaAtual.sorte}</span>
        <span>⚡ ${personaAtual.velocidade}</span>
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
    
});
const popup=document.getElementById("popupFicha");
    listaPersonagens.addEventListener("click",function(event){

    if(event.target.classList.contains("btn-ver")){

        const id=Number(event.target.getAttribute("idPersona"));

        let vetPersonas=JSON.parse(localStorage.getItem("personagens")) || [];

        const personagem=vetPersonas.find(p=>p.id===id);

        document.getElementById("popupNome").textContent=
            personagem.nome;

        document.getElementById("popupInfo").textContent=
            `${personagem.classe} • ${personagem.raca} • ${personagem.sexo}`;

        document.getElementById("popupDescricao").textContent=
            personagem.descricao;

        document.getElementById("popupBiografia").textContent=
            personagem.biografia;

        document.getElementById("popupStatus").innerHTML=`

            ❤️ Vida: ${personagem.vida}<br>

            ⚔ Dano: ${personagem.dano}<br>

            🛡 Defesa: ${personagem.defesa}<br>

            🍀 Sorte: ${personagem.sorte}<br>

            ⚡ Velocidade: ${personagem.velocidade}

        `;

        popup.classList.add("ativo");

    }
});
document
.getElementById("fecharPopup")
.addEventListener("click",()=>{

    popup.classList.remove("ativo");

});