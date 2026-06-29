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
        
        const valorDoTema = temaSelecionado.value;
        
        localStorage.setItem("tema", JSON.stringify(valorDoTema));
        document.documentElement.setAttribute("data-theme", valorDoTema);
        somSucesso.play();
        alert("Tema alterado!");
    });
}