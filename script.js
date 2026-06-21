const like = document.getElementById("like");
const dislike = document.getElementById("deslike");

like.addEventListener("click", () => {
    like.classList.add("ativo-like");
    dislike.classList.remove("ativo-deslike");
});

dislike.addEventListener("click", () => {
    dislike.classList.add("ativo-deslike");
    like.classList.remove("ativo-like");
});

const btnLike = document.getElementById("like");
const btnDislike = document.getElementById("deslike");

const contadorLike = document.getElementById("contadorLike");
const contadorDislike = document.getElementById("contadorDislike");

let likes = 0;
let dislikes = 0;

btnLike.addEventListener("click", () => {

    if (!btnLike.classList.contains("like-ativo")) {

        likes++;
        contadorLike.textContent = likes;

        btnLike.classList.add("like-ativo");
        btnDislike.classList.remove("deslike-ativo");
    }
});

btnDislike.addEventListener("click", () => {

    if (!btnDislike.classList.contains("deslike-ativo")) {

        dislikes++;
        contadorDislike.textContent = dislikes;

        btnDislike.classList.add("deslike-ativo");
        btnLike.classList.remove("like-ativo");
    }
});