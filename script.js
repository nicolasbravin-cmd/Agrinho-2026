const btnLike = document.getElementById("like");
const btnDislike = document.getElementById("dislike");

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