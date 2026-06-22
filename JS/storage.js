const inPNome= document.getElementById("inPNome");
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

btSalvarPersona.addEventListener("click", PersonaEnviar)
function PersonaEnviar() {
nome = inPNome.value

outSaidaFinal.innerHTML = "Mensagem de teste funcional ou não";
}