// ==========================
// DADOS
// ==========================

const Nome = "Hélio Gabriel Oliveira Castro";

let minhaBio =
    "Sou estudante de Desenvolvimento de Sistemas na Proz Educação e estou aprendendo tecnologias voltadas para programação.";

let curso = {
    nome: "Desenvolvimento de Sistemas",
    instituicao: "Proz Educação"
};

// ==========================
// FORMATAÇÃO
// ==========================

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 21;

let dataAtual = new Date();

let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth() + 1;
let diaAtual = dataAtual.getDate();

// ==========================
// MOSTRAR NA TELA
// ==========================

document.getElementById("meuNome").innerText = Nome;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("curso").innerText = "Curso: " + curso.nome;
document.getElementById("instituicao").innerText = "Instituição: " + curso.instituicao;

// ==========================
// TEMPO RESTANTE
// ==========================

let anosRestantes = anoFormatura - anoAtual;
let mesesRestantes = mesFormatura - mesAtual;
let diasRestantes = diaFormatura - diaAtual;

if (diasRestantes < 0) {
    diasRestantes += 30;
    mesesRestantes--;
}

if (mesesRestantes < 0) {
    mesesRestantes += 12;
    anosRestantes--;
}

document.getElementById("tempoRestante").innerText =
    "Faltam " +
    anosRestantes + " anos, " +
    mesesRestantes + " meses e " +
    diasRestantes +
    " dias para minha formatura 🎓";

// ==========================
// BOTÃO MODO ESCURO
// ==========================

const botao = document.getElementById("modo");

let claro = true;

botao.addEventListener("click", function() {

    if (claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Claro";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Escuro";
    }

    claro = !claro;

});