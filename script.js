const like = document.getElementById("like");
const dislike = document.getElementById("dislike");

like.addEventListener("click", () => {
    like.classList.add("ativo-like");
    dislike.classList.remove("ativo-dislike");
});

dislike.addEventListener("click", () => {
    dislike.classList.add("ativo-dislike");
    like.classList.remove("ativo-like");
});