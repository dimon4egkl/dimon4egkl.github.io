(function (){
    const $like = document.querySelector("#like");
    $like.addEventListener("click", () => ($like.style.color = "red"));
})();

(function (){
    const footer = document.querySelector("footer");
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let todayString = today.toLocaleDateString("en-US", options);
    footer.innerHTML = todayString;
})();