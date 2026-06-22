/* const inPNome= document.getElementById("inPNome");
const inPClasse = document.getElementById("inPClasse");
const inPRaca = document.getElementById("inPRaca");
const inPSexo = document.getElementById("inPSexo");
const inPDesc = document.getElementById("inPDesc");
const inPBio = document.getElementById("inPBio");

const inPVida = document.getElementById("inPVida");
const inPDano = document.getElementById("inPDano");
const inPDef = document.getElementById("inPDef");
const inPSorte = document.getElementById("inPSorte");
const inPVelo = document.getElementById("inPVelo");

const btSalvarPersona = document.getElementById("btSalvarPersona");
const outSaidaFinal = document.getElementById("outSaidaFinal")

var vetPersonas = []

function criarContato(nome, telefone, email) {
    const contatos = lerContatos();
    const novoContato = {
        id: crypto.randomUUID(),
        nome,
        telefone,
        email
    };
    contatos.push(novoContato);
    salvarContatos(contatos);
    renderizarLista();
}

function renderizarLista() {
    const contatos = lerContatos();
    const container = document.getElementById('listaContatos');

    if (contatos.length === 0) {
        container.innerHTML = '<p class="vazio">Nenhum contato cadastrado.</p>';
        return;
}}*/

const CHAVE = 'personas';

function lerPersonas() {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];

}

function salvarPersonas(lista) {
    localStorage.setItem(CHAVE, JSON.stringify(lista));
}

function criarPersona(nome, classe, raca, sexo, desc, bio, vida, dano, def, sorte, velo) {
    const personas = lerPersonas();
    const novaPersona = {
        id: crypto.randomUUID(),
        nome,
        classe,
        raca,
        sexo,
        desc,
        bio,
        vida,
        dano,
        def,
        sorte,
        velo,
    };
    personas.push(novaPersona);
    salvarPersonas(personas);
    renderizarLista();
}

function renderizarLista() {
    const personas = lerPersonas();
    const container = document.getElementById('listaPersonas');

    if (personas.length === 0) {
        container.innerHTML = '<p class="vazio">Nenhum personagem cadastrado.</p>';
        return;
    }

    container.innerHTML = personas.map(c => `
        <div class="card-contato" data-id="${c.id}">
        <div class="info">
        <strong>${c.nome}</strong>
        <span>${c.classe}</span>
        <span>${c.raca}</span>
        <span>${c.sexo}</span>
        <span>${c.desc}</span>
        <span>${c.bio}</span>
        <span>${c.vida}</span>
        <span>${c.dano}</span>
        <span>${c.def}</span>
        <span>${c.sorte}</span>
        <span>${c.velo}</span>
        </div>
        <div class="acoes">
        <button onclick="iniciarEdicao('${c.id}')"> Editar</button>
        <button onclick="deletarContato('${c.id}')"> Excluir</button>
        </div>
        </div>
        `).join('');
}

function iniciarEdicao(id) {
    const personas = lerPersonas();
    const persona = personas.find(c => c.id === id);

    if (!persona) return;

    document.getElementById('inPId').value = persona.id;
    document.getElementById('inPNome').value = persona.nome;
    document.getElementById('inPClasse').value = persona.classe;
    document.getElementById('inPRaca').value = persona.raca;
    document.getElementById('inPSexo').value = persona.sexo;
    document.getElementById('inPDesc').value = persona.desc;
    document.getElementById('inPBio').value = persona.bio;
    document.getElementById('inPVida').value = persona.vida;
    document.getElementById('inPDano').value = persona.dano;
    document.getElementById('inPDef').value = persona.def;
    document.getElementById('inPSorte').value = persona.sorte;
    document.getElementById('inPVelo').value = persona.velo;

    document.getElementById('btSalvarPersona').textContent = 'Atualizar personagem';
}

function atualizarPersona(id, nome, classe, raca, sexo, desc, bio, vida, dano, def, sorte, velo) {

    const personas = lerPersonas();
    const indice = personas.findIndex(c => c.id === id);

    if (indice === -1) return;

    personas[indice] = {id, nome, classe, raca, sexo, desc, bio, vida, dano, def, sorte, velo };
    salvarPersonas(personas);
    renderizarLista();
}

function deletarPersona(id) {
    if (!confirm('Deseja realmente excluir seu personagem?')) return;

    const personas = lerPersonas();
    const novaLista = personas.filter(c => c.id !== id);

    salvarPersonas(novaLista);
    renderizarLista();
}

const form = document.getElementById('PersonaForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('inPId').value;
    const nome = document.getElementById('inPNome').value.trim();
    const classe = document.getElementById('inPClasse').value;
    const raca = document.getElementById('inPRaca').value;
    const sexo = document.getElementById('inPSexo').value();
    const desc = document.getElementById('inPDesc').value.trim();
    const bio = document.getElementById('inPBio').value.trim();
    const vida = document.getElementById('inPVida')||0;
    const dano = document.getElementById('inPDano')||0;
    const def = document.getElementById('inPDef')||0;
    const sorte = document.getElementById('inPSorte')||0;
    const velo = document.getElementById('inPVelo')||0;

    if (id) {
        atualizarPersona(id, nome, classe, raca, sexo, desc, bio, vida, dano, def, sorte, velo);
    } else {
        criarPersona(nome, classe, raca, sexo, desc, bio, vida, dano, def, sorte, velo);
    }
    limparFormulario();
});

function limparFormulario() {
    form.reset();
    document.getElementById('inPId').value = '';
    document.getElementById('btSalvarPersona').textContent = 'Adicionar';
    btnCancelar.classList.add('oculto');
}

btnCancelar.addEventListener('click', limparFormulario);

renderizarLista();