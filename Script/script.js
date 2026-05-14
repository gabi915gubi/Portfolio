// ==========================
// DADOS
// ==========================

const Nome =
    "Hélio Gabriel Oliveira Castro";

let minhaBio =
    "Sou estudante de Desenvolvimento de Sistemas na Proz Educação e estou aprendendo tecnologias voltadas para programação.";

let curso = {

    nome:
        "Desenvolvimento de Sistemas",

    instituicao:
        "Proz Educação"

};

// ==========================
// FORMATAÇÃO
// ==========================

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 21;

// ==========================
// HABILIDADES
// ==========================

const habilidades = [

    "Criatividade",
    "Adaptabilidade",
    "Trabalho em equipe"

];

// ==========================
// PROJETOS
// ==========================

const projetos = [

    {

        nome:
            "RECIBO-QR-CODE",

        descricao:
            "Sistema em Python com interface gráfica para cadastro de pagamentos, geração de recibos e QR Code.",

        tecnologias: [

            "Python",
            "Tkinter",
            "SQLite",
            "qrcode",
            "Pillow"

        ],

        link:
            "https://github.com/gabi915gubi/RECIBO-QR-CODE"

    },

    {

        nome:
            "SISTEMA-DE-ESTACIONAMENTO",

        descricao:
            "Sistema de controle de estacionamento com interface gráfica e banco de dados SQLite.",

        tecnologias: [

            "Python",
            "SQLite",
            "Tkinter",
            "ReportLab"

        ],

        link:
            "https://github.com/gabi915gubi/SISTEMA-DE-ESTACIONAMENTO"

    }

];

// ==========================
// FUNÇÕES AUXILIARES
// ==========================

function obterDataAtual() {

    return new Date();

}

function obterElemento(id) {

    return document.getElementById(id);

}

// ==========================
// FUNÇÕES DE DADOS
// ==========================

function mostrarNome() {

    obterElemento(
        "meuNome"
    ).innerText = Nome;

}

function mostrarBio() {

    obterElemento(
        "minhaBio"
    ).innerText = minhaBio;

}

function mostrarCurso() {

    obterElemento(
        "curso"
    ).innerText =

        "Curso: " +
        curso.nome;

    obterElemento(
        "instituicao"
    ).innerText =

        "Instituição: " +
        curso.instituicao;

}

// ==========================
// FUNÇÕES DE HABILIDADES
// ==========================

function criarItemLista(texto) {

    const li =
        document.createElement("li");

    li.innerText = texto;

    return li;

}

function mostrarHabilidades() {

    const lista =
        obterElemento(
            "lista-habilidades"
        );

    habilidades.forEach(
        habilidade => {

            lista.appendChild(
                criarItemLista(
                    habilidade
                )
            );

        }
    );

}

// ==========================
// FUNÇÕES DE FORMATURA
// ==========================

function ajustarDias(
    dias,
    meses
) {

    if (dias < 0) {

        dias += 30;
        meses--;

    }

    return {

        dias,
        meses

    };

}

function ajustarMeses(
    meses,
    anos
) {

    if (meses < 0) {

        meses += 12;
        anos--;

    }

    return {

        meses,
        anos

    };

}

function calcularTempoRestante() {

    let dataAtual =
        obterDataAtual();

    let anoAtual =
        dataAtual.getFullYear();

    let mesAtual =
        dataAtual.getMonth() + 1;

    let diaAtual =
        dataAtual.getDate();

    let anosRestantes =
        anoFormatura - anoAtual;

    let mesesRestantes =
        mesFormatura - mesAtual;

    let diasRestantes =
        diaFormatura - diaAtual;

    // Ajustar dias
    const ajusteDias =
        ajustarDias(
            diasRestantes,
            mesesRestantes
        );

    diasRestantes =
        ajusteDias.dias;

    mesesRestantes =
        ajusteDias.meses;

    // Ajustar meses
    const ajusteMeses =
        ajustarMeses(
            mesesRestantes,
            anosRestantes
        );

    mesesRestantes =
        ajusteMeses.meses;

    anosRestantes =
        ajusteMeses.anos;

    return {

        anosRestantes,
        mesesRestantes,
        diasRestantes

    };

}

function formatarMensagemFormatura(
    tempo
) {

    if (
        tempo.diasRestantes <= 0 &&
        tempo.mesesRestantes <= 0 &&
        tempo.anosRestantes <= 0
    ) {

        return
            "Já me formei! 🎓";

    }

    if (
        tempo.anosRestantes === 1
    ) {

        return
            "Falta 1 ano para minha formatura 🎓";

    }

    return (

        "Faltam " +

        tempo.anosRestantes +
        " anos, " +

        tempo.mesesRestantes +
        " meses e " +

        tempo.diasRestantes +
        " dias para minha formatura 🎓"

    );

}

function mostrarTempoRestante() {

    const tempo =
        calcularTempoRestante();

    obterElemento(
        "tempoRestante"
    ).innerText =

        formatarMensagemFormatura(
            tempo
        );

}

// ==========================
// FUNÇÕES DO QUIZ
// ==========================

function atualizarResultadoQuiz(
    mensagem
) {

    obterElemento(
        "resultado-quiz"
    ).innerText = mensagem;

}

function selecionarFrontEnd() {

    atualizarResultadoQuiz(
        "🎨 Perfil Front-End selecionado!"
    );

}

function selecionarBackEnd() {

    atualizarResultadoQuiz(
        "⚙️ Perfil Back-End selecionado!"
    );

}

function configurarQuiz() {

    obterElemento(
        "btn-visual"
    ).onclick =
        selecionarFrontEnd;

    obterElemento(
        "btn-logica"
    ).onclick =
        selecionarBackEnd;

}

// ==========================
// FUNÇÕES DE NOTA
// ==========================

function verificarAprovacao(
    nota
) {

    return nota >= 7
        ? "Aprovado"
        : "Reprovado";

}

function formatarNota(
    nota,
    status
) {

    return `
        Nota: ${nota}
        - <strong>${status}</strong>
    `;

}

function mostrarNota() {

    let nota = 8;

    let status =
        verificarAprovacao(
            nota
        );

    obterElemento(
        "statusNota"
    ).innerHTML =

        formatarNota(
            nota,
            status
        );

}

// ==========================
// FUNÇÕES DE DIA DA SEMANA
// ==========================

function obterNomeDia(
    diaSemana
) {

    switch (diaSemana) {

        case 0:
            return "Domingo";

        case 1:
            return "Segunda-feira";

        case 2:
            return "Terça-feira";

        case 3:
            return "Quarta-feira";

        case 4:
            return "Quinta-feira";

        case 5:
            return "Sexta-feira";

        case 6:
            return "Sábado";

        default:
            return "Dia inválido";

    }

}

function mostrarDiaSemana() {

    let diaSemana =
        obterDataAtual().getDay();

    let nomeDia =
        obterNomeDia(
            diaSemana
        );

    obterElemento(
        "diaAtual"
    ).innerText =

        "Hoje é: " +
        nomeDia;

}

// ==========================
// FUNÇÕES DE MODO ESCURO
// ==========================

function ativarModoEscuro() {

    document.body.style.backgroundColor =
        "black";

    document.body.style.color =
        "white";

}

function ativarModoClaro() {

    document.body.style.backgroundColor =
        "white";

    document.body.style.color =
        "black";

}

function alterarTextoBotao(
    botao,
    texto
) {

    botao.textContent =
        texto;

}

function configurarModoEscuro() {

    const botao =
        obterElemento("modo");

    let claro = true;

    botao.addEventListener(

        "click",

        function () {

            if (claro) {

                ativarModoEscuro();

                alterarTextoBotao(
                    botao,
                    "Modo Claro"
                );

            } else {

                ativarModoClaro();

                alterarTextoBotao(
                    botao,
                    "Modo Escuro"
                );

            }

            claro = !claro;

        }

    );

}

// ==========================
// FUNÇÕES DE PROJETOS
// ==========================

function criarProjetoHTML(
    projeto
) {

    return `

        <h4>${projeto.nome}</h4>

        <p>${projeto.descricao}</p>

        <p>

        <strong>Tecnologias:</strong>

        ${projeto.tecnologias.join(", ")}

        </p>

        <a href="${projeto.link}" target="_blank">

            Ver no GitHub

        </a>

        <hr>

    `;

}

function criarCardProjeto(
    projeto
) {

    const div =
        document.createElement(
            "div"
        );

    div.innerHTML =
        criarProjetoHTML(
            projeto
        );

    return div;

}

function mostrarProjetos() {

    const listaProjetos =
        obterElemento(
            "lista-projetos"
        );

    projetos.forEach(
        projeto => {

            listaProjetos.appendChild(
                criarCardProjeto(
                    projeto
                )
            );

        }
    );

}

// ==========================
// FUNÇÃO PRINCIPAL
// ==========================

function iniciarSistema() {

    mostrarNome();

    mostrarBio();

    mostrarCurso();

    mostrarHabilidades();

    mostrarTempoRestante();

    configurarQuiz();

    mostrarNota();

    mostrarDiaSemana();

    configurarModoEscuro();

    mostrarProjetos();

}

// ==========================
// EXECUÇÃO
// ==========================

iniciarSistema();
