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

document.getElementById("minhaBio").innerText =
    minhaBio;

document.getElementById("curso").innerText =
    "Curso: " + curso.nome;

document.getElementById("instituicao").innerText =
    "Instituição: " + curso.instituicao;


// ==========================
// TEMPO RESTANTE
// ==========================

let anosRestantes = anoFormatura - anoAtual;
let mesesRestantes = mesFormatura - mesAtual;
let diasRestantes = diaFormatura - diaAtual;


// AJUSTE DOS DIAS
if (diasRestantes < 0) {

    diasRestantes += 30;
    mesesRestantes--;

}


// AJUSTE DOS MESES
if (mesesRestantes < 0) {

    mesesRestantes += 12;
    anosRestantes--;

}


// VERIFICAÇÃO DE FORMATURA
if (
    diasRestantes <= 0 &&
    mesesRestantes <= 0 &&
    anosRestantes <= 0
) {

    document.getElementById("tempoRestante").innerText =
        "Já me formei! 🎓";

} else if (anosRestantes == 1) {

    document.getElementById("tempoRestante").innerText =
        "Falta 1 ano para minha formatura 🎓";

} else {

    document.getElementById("tempoRestante").innerText =
        "Faltam " +
        anosRestantes + " anos, " +
        mesesRestantes + " meses e " +
        diasRestantes +
        " dias para minha formatura 🎓";

}


// ==========================
// NOTA DO ALUNO
// ==========================

let nota = 8;

let aprovado =
    nota >= 7
        ? "Aprovado"
        : "Reprovado";

document.write(
    `<p>Nota: ${nota} - ${aprovado}</p>`
);


// ==========================
// DIA DA SEMANA
// ==========================

let diaSemana = new Date().getDay();

let nomeDia = "";

switch (diaSemana) {

    case 0:
        nomeDia = "Domingo";
        break;

    case 1:
        nomeDia = "Segunda-feira";
        break;

    case 2:
        nomeDia = "Terça-feira";
        break;

    case 3:
        nomeDia = "Quarta-feira";
        break;

    case 4:
        nomeDia = "Quinta-feira";
        break;

    case 5:
        nomeDia = "Sexta-feira";
        break;

    case 6:
        nomeDia = "Sábado";
        break;

    default:
        nomeDia = "Dia inválido";

}

document.write(`<p>Hoje é: ${nomeDia}</p>`);


// ==========================
// BOTÃO MODO ESCURO
// ==========================

const botao = document.getElementById("modo");

let claro = true;

botao.addEventListener("click", function () {

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