const temaSalvo = JSON.parse(localStorage.getItem("tema"));

const temaSelecionado = document.getElementById("inTema");
const configForm = document.getElementById("configForm");

const somSucesso = document.getElementById("somSucesso");

// Verifica se há um tema salvo no localStorage e aplica automaticamente ao carregar a página
if (temaSalvo) {
    document.documentElement.setAttribute("data-theme", temaSalvo);
    if (temaSelecionado) {
        temaSelecionado.value = temaSalvo;
    }
}

// Botão de salvar tema
if (configForm) {
    configForm.addEventListener("submit", function (event) {
        event.preventDefault();

        localStorage.setItem("tema", JSON.stringify(temaSelecionado.value));
        document.documentElement.setAttribute("data-theme", temaSelecionado.value);
        somSucesso.play();
        alert("Tema alterado!");
    });
}