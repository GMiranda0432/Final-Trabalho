const inPesquisaClasse = document.getElementById("inPesquisaClasse");
const inPesquisaRaca = document.getElementById("inPesquisaRaca");
const inPesquisaSexo = document.getElementById("inPesquisaSexo");
const inPesquisaVida = document.getElementById("inPesquisaVida");
const inPesquisaDano = document.getElementById("inPesquisaDano");
const inPesquisaDef = document.getElementById("inPesquisaDef");
const inPesquisaSorte = document.getElementById("inPesquisaSorte");
const inPesquisaVelo = document.getElementById("inPesquisaVelo");

const inTipoFiltroVida = document.getElementById("inTipoFiltroVida")
const inTipoFiltroDano = document.getElementById("inTipoFiltroDano")
const inTipoFiltroDef = document.getElementById("inTipoFiltroDef")
const inTipoFiltroSorte = document.getElementById("inTipoFiltroSorte")
const inTipoFiltroVelo = document.getElementById("inTipoFiltroVelo")

const msgVazio = document.getElementById("msgVazio");

const listaPersonagens = document.getElementById("listaPersonagens");
const listaObjetos = document.getElementById("listaObjetos");
const listaAreas = document.getElementById("listaAreas");

const btnPesquisar = document.getElementById("btnPesquisar");
const somFalha = document.getElementById("somFalha");

let idEditando = null;

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

            if (tipoVida == "vidaMaior" && valorPersonaVida > valorPesquisaVida) {
                condVida = true;
            } else if (tipoVida == "vidaMenor" && valorPersonaVida < valorPesquisaVida) {
                condVida = true;
            } else if (tipoVida == "vidaIgual" && valorPersonaVida == valorPesquisaVida) {
                condVida = true;
            }
        }
        let condDano = false;
        if (pesquisaDano == "") {
            condDano = true;
        } else {
            let valorPesquisaDano = Number(pesquisaDano);
            let valorPersonaDano = Number(personaAtual.dano);

            if (tipoDano == "danoMaior" && valorPersonaDano > valorPesquisaDano) {
                condDano = true;
            } else if (tipoDano == "danoMenor" && valorPersonaDano < valorPesquisaDano) {
                condDano = true;
            } else if (tipoDano == "danoIgual" && valorPersonaDano == valorPesquisaDano) {
                condDano = true;
            }
        }
        let condDef = false;
        if (pesquisaDef == "") {
            condDef = true;
        } else {
            let valorPesquisaDef = Number(pesquisaDef);
            let valorPersonaDef = Number(personaAtual.defesa);

            if (tipoDef == "defMaior" && valorPersonaDef > valorPesquisaDef) {
                condDef = true;
            } else if (tipoDef == "defMenor" && valorPersonaDef < valorPesquisaDef) {
                condDef = true;
            } else if (tipoDef == "defIgual" && valorPersonaDef == valorPesquisaDef) {
                condDef = true;
            }
        }
        let condSorte = false;
        if (pesquisaSorte == "") {
            condSorte = true;
        } else {
            let valorPesquisaSorte = Number(pesquisaSorte);
            let valorPersonaSorte = Number(personaAtual.sorte);

            if (tipoSorte == "sorteMaior" && valorPersonaSorte > valorPesquisaSorte) {
                condSorte = true;
            } else if (tipoSorte == "sorteMenor" && valorPersonaSorte < valorPesquisaSorte) {
                condSorte = true;
            } else if (tipoSorte == "sorteIgual" && valorPersonaSorte == valorPesquisaSorte) {
                condSorte = true;
            }
        }
        let condVelo = false;
        if (pesquisaVelo == "") {
            condVelo = true;
        } else {
            let valorPesquisaVelo = Number(pesquisaVelo);
            let valorPersonaVelo = Number(personaAtual.velocidade);

            if (tipoVelo == "veloMaior" && valorPersonaVelo > valorPesquisaVelo) {
                condVelo = true;
            } else if (tipoVelo == "veloMenor" && valorPersonaVelo < valorPesquisaVelo) {
                condVelo = true;
            } else if (tipoVelo == "veloIgual" && valorPersonaVelo == valorPesquisaVelo) {
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
        <button class="btn btn-danger btn-excluir"
            idPersona="${personaAtual.id}">
            Excluir
        </button>
    </div>
</div>
</div>
`;
        } somSucesso.play();
    } else {
        msgVazio.style.display = "block";
        somFalha.play();
    }

});

const popup = document.getElementById("popupFicha");
listaPersonagens.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-ver")) {

        const idEditar = Number(event.target.getAttribute("idPersona"));

        let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
        let novoVetPersonas = [];

        for (var i = 0; i < vetPersonas.length; i++) {
            if (vetPersonas[i].id == idEditar) {
                novoVetPersonas[novoVetPersonas.length] = vetPersonas[i]
            }
        }
        idEditando = idEditar
        let personaEditando = novoVetPersonas[0]
        document.getElementById("popupNome").value = personaEditando.nome;
        document.getElementById("popupClasse").value = personaEditando.classe;
        document.getElementById("popupRaca").value = personaEditando.raca;
        document.getElementById("popupSexo").value = personaEditando.sexo;
        document.getElementById("popupDesc").value = personaEditando.descricao;
        document.getElementById("popupBio").value = personaEditando.biografia;
        document.getElementById("popupVida").value = personaEditando.vida;
        document.getElementById("popupDano").value = personaEditando.dano;
        document.getElementById("popupDef").value = personaEditando.defesa;
        document.getElementById("popupSorte").value = personaEditando.sorte;
        document.getElementById("popupVelo").value = personaEditando.velocidade;

        popup.classList.add("ativo");
    }
});
document.getElementById("fecharPopup").addEventListener("click", () => {
    popup.classList.remove("ativo");
});
document.getElementById("btnSalvarEdicao").addEventListener("click", function () {
    let vetPersonas = JSON.parse(localStorage.getItem("personagens")) || [];
    const popupNome = document.getElementById("popupNome");
    const popupDesc = document.getElementById("popupDesc");
    const popupBio = document.getElementById("popupBio");
    const popupVida = document.getElementById("popupVida");
    const popupDano = document.getElementById("popupDano");
    const popupDef = document.getElementById("popupDef");
    const popupSorte = document.getElementById("popupSorte");
    const popupVelo = document.getElementById("popupVelo");

    if (popupNome.value.trim() == "") {
        somFalha.play();
        alert("Tudo que existe é nomeado, assim como seu personagem, por favor, não deixe nome em branco ao editar");
        popupNome.focus();
        return;
    }
    if (popupDesc.value.trim() == "") {
        somFalha.play();
        alert("Tudo pode ter uma leve forma de reconhecimento, por favor, não deixe descrição em branco ao editar");
        popupDesc.focus();
        return;
    }
    if (popupBio.value.trim() == "") {
        somFalha.play();
        alert("Apagar a história de um personagem é diferente de o deletar, por favor, não deixe biografia em branco ao editar");
        popupBio.focus();
        return;
    }
    if (Number(popupVida.value) < 1) {
        somFalha.play();
        alert("Até espíritos e fantasmas tem 1 de vida, por favor, dê um valor maior que 0")
        popupVida.focus();
        return;
    }
    if (Number(popupVida.value) > 1000) {
        somFalha.play();
        alert("Nossos chefes nem chegam a essa quantidade de vitalidade, por favor, dê um valor menor que 1.000")
        popupVida.focus();
        return;
    }
    if (Number(popupDano.value) < 1) {
        somFalha.play();
        alert("Um pedaço de flor causa mais dano que você, por favor, dê um valor maior que 0")
        popupDano.focus();
        return;
    }
    if (Number(popupDano.value) > 1000) {
        somFalha.play();
        alert("Você quer partir o universo com um tapa?, por favor, dê um valor menor que 1.000")
        popupDano.focus();
        return;
    }
    if (Number(popupDef.value) < 1) {
        somFalha.play();
        alert("Defesa zero ou negativa? não importa, por favor, dê um valor maior que 0")
        popupDef.focus();
        return;
    }
    if (Number(popupDef.value) > 1000) {
        somFalha.play();
        alert("Seria necessário uma ogiva nuclear para te machucar, por favor, dê um valor menor que 1.000")
        popupDef.focus();
        return;
    }
    if (Number(popupSorte.value) < 1) {
        somFalha.play();
        alert("No cara e coroa, moedas caem em pé com você, por favor, dê um valor maior que 0")
        popupSorte.focus();
        return;
    }
    if (Number(popupSorte.value) > 1000) {
        somFalha.play();
        alert("Entre o backend e o frontend, sem meta-game na criação de ficha, por favor, dê um valor menor que 1.000")
        popupSorte.focus();
        return;
    }
    if (Number(popupVelo.value) < 1) {
        somFalha.play();
        alert("Você é lento demais!, por favor, dê um valor maior que 0")
        popupVelo.focus();
        return;
    }
    if (Number(popupVelo.value) > 1000) {
        somFalha.play();
        alert("Funcionou! seu personagem ficou com a velocidade tão alta que voltou no tempo antes da edição ser salva, por favor, dê um valor menor que 1.000")
        popupVelo.focus();
        return;
    }
    for (var i = 0; i < vetPersonas.length; i++) {
        if (vetPersonas[i].id == idEditando) {

            vetPersonas[i].nome = document.getElementById("popupNome").value;
            vetPersonas[i].classe = document.getElementById("popupClasse").value;
            vetPersonas[i].raca = document.getElementById("popupRaca").value;
            vetPersonas[i].sexo = document.getElementById("popupSexo").value;
            vetPersonas[i].descricao = document.getElementById("popupDesc").value;
            vetPersonas[i].biografia = document.getElementById("popupBio").value;
            vetPersonas[i].vida = Number(document.getElementById("popupVida").value);
            vetPersonas[i].dano = Number(document.getElementById("popupDano").value);
            vetPersonas[i].defesa = Number(document.getElementById("popupDef").value);
            vetPersonas[i].sorte = Number(document.getElementById("popupSorte").value);
            vetPersonas[i].velocidade = Number(document.getElementById("popupVelo").value);
        }
    }

    localStorage.setItem("personagens", JSON.stringify(vetPersonas));
    renderizarLista();
    popup.classList.remove("ativo");
    somSucesso.play();
});