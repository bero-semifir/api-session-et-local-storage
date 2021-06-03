const colorInput = document.getElementById("background");

/**
 * Change la couleur de fond
 * @param {string} color Couleur de l'arriére plan
 */
const changeBg = (color) => {
    document.querySelector('body').style.backgroundColor = color;
}

// change la couleur à l'input sur la color box
colorInput.addEventListener("input",(event)=>{
    let color = event.target.value
    changeBg(color);
    window.sessionStorage.setItem("bgColor",color);
})

// charge le session storage au chargement de la fenêtre
window.addEventListener("load",()=>{
    let color = window.sessionStorage.getItem("bgColor") ?? "#FFFFFF";
    changeBg(color);
})