// ==========================
// 1. DADOS E IDENTIDADE
// ==========================
const Nome = "Hélio Gabriel Oliveira Castro";
const minhaBio = "Sou estudante de Desenvolvimento de Sistemas na Proz Educação e estou aprendendo tecnologias voltadas para programação.";

const curso = {
    nome: "Desenvolvimento de Sistemas",
    instituicao: "Proz Educação"
};

const habilidades = [
    { nome: "Criatividade" },
    { nome: "Adaptabilidade" },
    { nome: "Resolução de Problemas" },
    { nome: "Trabalho em equipe" }
];

// Preencher textos iniciais
document.getElementById("meuNome").innerText = Nome;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("curso").innerText = "Curso: " + curso.nome;
document.getElementById("instituicao").innerText = "Instituição: " + curso.instituicao;

// Renderizar lista de habilidades
const listaUl = document.getElementById("lista-habilidades");
if (listaUl) {
    habilidades.forEach(hab => {
        const li = document.createElement("li");
        li.innerText = hab.nome;
        listaUl.appendChild(li);
    });
}

// ==========================
// 2. TEMPO PARA FORMATURA
// ==========================
function calcularTempoFormatura() {
    const dataFormatura = new Date(2026, 11, 21); // Dezembro é 11
    const hoje = new Date();
    
    let anos = dataFormatura.getFullYear() - hoje.getFullYear();
    let meses = (dataFormatura.getMonth() + 1) - (hoje.getMonth() + 1);
    let dias = dataFormatura.getDate() - hoje.getDate();

    if (dias < 0) {
        dias += 30;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    const elementoTempo = document.getElementById("tempoRestante");
    
    if (anos < 0 || (anos === 0 && meses === 0 && dias <= 0)) {
        elementoTempo.innerText = "Já me formei! 🎓";
    } else {
        elementoTempo.innerText = `Faltam ${anos} anos, ${meses} meses e ${dias} dias para minha formatura 🎓`;
    }
}
calcularTempoFormatura();

// ==========================
// 3. LÓGICA DO QUIZ
// ==========================
const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const resultadoQuiz = document.getElementById("resultado-quiz");

function atualizarResultadoQuiz(perfil) {
    if (perfil === 'front') {
        resultadoQuiz.innerHTML = "🎨 Perfil Front-End selecionado!";
        resultadoQuiz.style.color = "#007bff";
    } else {
        resultadoQuiz.innerHTML = "⚙️ Perfil Back-End selecionado!";
        resultadoQuiz.style.color = "#28a745";
    }
}

if (btnVisual) btnVisual.addEventListener("click", () => atualizarResultadoQuiz('front'));
if (btnLogica) btnLogica.addEventListener("click", () => atualizarResultadoQuiz('back'));

// ==========================
// 4. DIA DA SEMANA E NOTA
// ==========================
let nota = 8;
let aprovado = nota >= 7 ? "Aprovado" : "Reprovado";

const diasNomes = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let nomeDia = diasNomes[new Date().getDay()];

document.getElementById("statusNota").innerHTML = `Nota: ${nota} - <strong>${aprovado}</strong>`;
document.getElementById("diaAtual").innerText = `Hoje é: ${nomeDia}`;

// ==========================
// 5. MODO ESCURO (REFATORADO)
// ==========================
const botaoModo = document.getElementById("modo");

if (botaoModo) {
    botaoModo.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        botaoModo.textContent = isDark ? "Modo Claro" : "Modo Escuro";
    });
}
