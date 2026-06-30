const temaSalvo = JSON.parse(localStorage.getItem("tema"));

const temaSelecionado = document.getElementById("inTema");
const configForm = document.getElementById("configForm");

const somSucesso = document.getElementById("somSucesso");

if (temaSalvo) {
    document.documentElement.setAttribute("data-theme", temaSalvo);
    if (temaSelecionado) {
        temaSelecionado.value = temaSalvo;
    }
}

if (configForm) {
    configForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        localStorage.setItem("tema", JSON.stringify(temaSelecionado.value));
        document.documentElement.setAttribute("data-theme", temaSelecionado.value);
        somSucesso.play();
        alert("Tema alterado!");
    });
}