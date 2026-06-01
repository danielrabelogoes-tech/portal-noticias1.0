function mostrarMais() {
    const texto = document.getElementById("maisTexto");

    if (texto.style.display === "block") {
        texto.style.display = "none";
    } else {
        texto.style.display = "block";
    }
}
