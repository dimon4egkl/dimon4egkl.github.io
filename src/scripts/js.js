(function (){
    const $like = document.querySelector("#like");
    $like.addEventListener("click", () => ($like.style.color = "red"));
})();

(function (){
    const footer = document.querySelector("footer");
    let today  = new Date();
    let todayString = today.getFullYear();
    footer.innerHTML += todayString;
})();