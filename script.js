const btnLike = document.getElementById("like");
const btnDislike = document.getElementById("dislike");

if (btnLike && btnDislike) {

    const contadorLike = document.getElementById("contadorLike");
    const contadorDislike = document.getElementById("contadorDislike");

    let likes = 0;
    let dislikes = 0;

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

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem");

    if (nome === "") {
        mensagem.textContent = "Digite seu nome.";
    } else {
        mensagem.textContent = "Bem-vindo, " + nome + "!";
    }

}

const botaoModo = document.getElementById("modoEscuro");

if (botaoModo) {

    botaoModo.addEventListener("click", function () {

        document.body.classList.toggle("escuro");

        if (document.body.classList.contains("escuro")) {
            botaoModo.textContent = "☀️ Modo Claro";
        } else {
            botaoModo.textContent = "🌙 Modo Escuro";
        }

    });

}