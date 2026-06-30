const btnLike = document.getElementById("like");
const btnDislike = document.getElementById("dislike");
const contadorLike = document.getElementById("contadorLike");
const contadorDislike = document.getElementById("contadorDislike");

let likes = 0;
let dislikes = 0;

if (btnLike && btnDislike) {

    btnLike.addEventListener("click", function () {

        likes++;
        contadorLike.textContent = likes;

        btnLike.classList.add("ativo-like");
        btnDislike.classList.remove("ativo-dislike");

    });

    btnDislike.addEventListener("click", function () {

        dislikes++;
        contadorDislike.textContent = dislikes;

        btnDislike.classList.add("ativo-dislike");
        btnLike.classList.remove("ativo-like");

    });

}

function mostrarNome() {

    const campoNome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");

    if (!campoNome || !mensagem) {
        return;
     }
     if (campoNome.value.trim() === "") {
         mensagem.textContent = "Digite seu nome.";
     } else {
        mensagem.textContent = "Bem-vindo, " + campoNome.value + "!";
     }
 }

const botaoModo = document.getElementById("modoEscuro");

if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("escuro");
}

if (botaoModo) {

    atualizarBotao();

    botaoModo.addEventListener("click", function () {

        document.body.classList.toggle("escuro");

        if (document.body.classList.contains("escuro")) {
            localStorage.setItem("tema", "escuro");
        } else {
            localStorage.setItem("tema", "claro");
        }

        atualizarBotao();
     });
}

function atualizarBotao() {

    if (document.body.classList.contains("escuro")) {
        botaoModo.textContent = "Modo Claro";
    } else {
        botaoModo.textContent = "Modo Escuro";
    }
}