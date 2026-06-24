const btnLike = document.getElementById("like");
const btnDislike = document.getElementById("dislike");

if (btnLike && btnDislike) {

    const contadorLike = document.getElementById("contadorLike");
    const contadorDislike = document.getElementById("contadorDislike");

    let likes = 0;
    let dislikes = 0;

    btnLike.addEventListener("click", () => {

        likes++;
        contadorLike.textContent = likes;

        btnLike.classList.add("like-ativo");
        btnDislike.classList.remove("deslike-ativo");
    });

    btnDislike.addEventListener("click", () => {

        dislikes++;
        contadorDislike.textContent = dislikes;

        btnDislike.classList.add("deslike-ativo");
        btnLike.classList.remove("like-ativo");
    });
}