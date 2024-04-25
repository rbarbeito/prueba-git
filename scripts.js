let abrir = document.getElementById("abrir")
let cerrar = document.getElementById("cerrar")
let nav = document.getElementById("nav")


abrir.addEventListener( "click", () => {
    nav.classList.add("visible")
})

cerrar.addEventListener( "click", () => {
    nav.classList.remove("visible")
})