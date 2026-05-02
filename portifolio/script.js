const botao = document.getElementById("modo");
let escuro = false;

botao.addEventListener("click", () => {
    if (escuro) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Escuro";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Claro";
    }

    escuro = !escuro;
});