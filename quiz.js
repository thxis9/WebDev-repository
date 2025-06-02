
const questions= [
    {
        question: "Qual é o único alimento que nunca se estraga?",
        answers: [
            {id: 1, text:"Arroz", correct:false}, 
            {id: 2, text:"Mel", correct:true}, 
            {id: 3, text:"Leite em pó", correct:false},
            {id: 4, text:"Sal", correct:false},
        ],
        explanation: "O mel nunca se estraga pois é altamente ácido e pobre em umidade, o que impede a proliferação de micro-organismos.",
        time: 10
    },
    {
        question: "Quanto tempo leva a luz do sol para chegar à terra?",
        answers: [
            {id: 1, text:"8 minutos", correct:true},
            {id: 2, text:"1 segundo", correct:false}, 
            {id: 3, text:"1 hora", correct:false},
            {id: 4, text:"24 horas", correct:false},
        ],
        explanation: "A luz solar leva cerca de 8 minutos e 20 segundos para chegar até a Terra.",
        time: 15
    },
    {
        question: "Qual é o maior órgão do corpo humano?",
        answers: [
            {id: 1, text:"Coração", correct:false}, 
            {id: 2, text:"Pulmão", correct:false},
            {id: 3, text:"Fígado", correct:false},
            {id: 4, text:"Pele", correct:true},
        ],
        explanation: "A pele é o maior órgão do corpo humano e atua como barreira protetora.",
        time: 10
    },
  {
        question: "Qual destes animais consegue andar sobre a água?",
        answers: [
            {id: 1, text:"Jacaré", correct:false}, 
            {id: 2, text:"Sapo", correct:false},
            {id: 3, text:"Lula", correct:false},
            {id: 4, text:"Basilisco(Lagarto)", correct:true},
        ],
        timer: 15,
        explanation: "O basilisco, também chamado de lagarto Jesus, pode correr sobre a água por curtas distâncias graças à sua velocidade e membranas nos pés."
    },
   {
        question: "Qual é o menor osso do corpo Humano?",
        answers: [
            {id: 1, text:"Estribo", correct:true}, 
            {id: 2, text:"Fêmur", correct:false},
            {id: 3, text:"Rádio", correct:false}, 
            {id: 4, text:"Tíbia", correct:false}, 
        ],
        timer: 10,
        explanation: "O estribo está localizado no ouvido médio e mede cerca de 2,5 a 3,5 mm, sendo essencial para a audição."
    },
    {
        question: "Quem é considerado pai da computação?",
        answers: [
            {id: 1, text:"Steve Jobs", correct:false},
            {id: 2, text:"Alan Turing", correct:false}, 
            {id: 3, text:"Bill gates", correct:false},
            {id: 4, text:"Charles Babbage", correct:true},
        ],
        timer: 15,
        explanation: "Charles Babbage idealizou a primeira máquina de calcular automática, considerada o conceito inicial do computador mecânico."
    },
    {
        question: "O que significa a sigla WI-FI?",
        answers: [
            {id: 1, text:"Wireless Fidelity", correct:true},
            {id: 2, text:"World Wide Web", correct:false},
            {id: 3, text:"Web File", correct:false},
            {id: 4, text:"Wireless Finder", correct:false},
        ],
        timer: 10,
        explanation: "Wi-Fi é uma abreviação de 'Wireless Fidelity', um padrão de comunicação sem fio usado para redes locais."
    },
    {
        question: "Qual foi o primeiro o Sistema operacional gráfio popular para computadores pessoais?",
        answers: [
            {id: 1, text: "DOS", correct:false},
            {id: 2, text:"Windows 95", correct:false},
            {id: 3, text:"Unix", correct:false},
            {id: 4, text:"Macintosh System I", correct:true},
        ],
        timer: 15,
        explanation: "O Macintosh System I foi lançado em 1984, sendo o primeiro sistema gráfico de sucesso comercial voltado para o usuário comum."
    }, 
    {
        question: "Que linguagem de programação é amplamente usada para páginas web?",
        answers: [
            {id: 1, text:"Phython", correct:false},
            {id: 2, text:"Java", correct:false},
            {id: 3, text:"Html", correct:true},
            {id: 4, text:"C++", correct:false},
        ],
        timer: 10,
        explanation: "HTML é a linguagem padrão usada para estruturar o conteúdo da web, como textos, imagens e links."
    },
    {
        question: "Quem é conhecido como pai da internet?",
        answers: [
            {id: 1, text:"Tim Berners-Lee", correct:false},
            {id: 2, text:"Steve Jobs", correct:false},
            {id: 3, text:"Vinton Cerf", correct:true},
            {id: 4, text:"Elon Musk", correct:false},
        ],
        timer: 15,
        explanation: "Vinton Cerf é considerado um dos pais da internet por seu trabalho no protocolo TCP/IP, base da comunicação online."
    },
    {
        question: "Python, o que é?",
        answers: [
            {id: 1, text:"Linguagem de programação", correct:true},
            {id: 2, text:"Uma cobra", correct:true},
            {id: 3, text:"Website", correct:false},
            {id: 4, text:"Editor de texto", correct:false},
        ],
        explanation: "Python é uma linguagem de programação muito usada atualmente. Também é o nome de uma cobra – a píton (python em inglês).",
        time: 15
    },
    {
       question: "Qual é o maior país do mundo em extensão territorial?",
        answers: [
            {id: 1, text:"China", correct:false},
            {id: 2, text:"Estados Unidos", correct:false},
            {id: 3, text:"Canadá", correct:false},
            {id: 4, text:"Rússia", correct:true},
        ],
        timer: 10,
        explanation: "A Rússia é o maior país em extensão territorial, com cerca de 17 milhões de km², abrangendo Europa e Ásia."
    },
    {
        question: "Em que país nasceu o famoso pintor Leonardo da Vinci?",
        answers: [
            {id: 1, text:"França", correct:false},
            {id: 2, text:"Itália", correct:true},
            {id: 3, text:"Espanha", correct:false},
            {id: 4, text:"Grécia", correct:false},
        ],
        timer: 10,
        explanation: "Leonardo da Vinci nasceu na Itália em 1452, sendo um dos maiores artistas e inventores do Renascimento."
    },
    {
        question: "Qual é o idioma mais falado no mundo (por número de falantes nativos)?",
        answers: [
            {id: 1, text:"Inglês", correct:false},
            {id: 2, text:"Espanhol", correct:false},
            {id: 3, text:"Árabe", correct:false},
            {id: 4, text:"Mandarim", correct:true},
        ],
        timer: 10,
        explanation: "O mandarim, uma das línguas chinesas, é a mais falada por falantes nativos, com mais de 900 milhões de pessoas."
    },
    {
        question: "Qual é o deserto mais seco do mundo?",
        answers: [
            {id: 1, text:"Saara", correct:false},
            {id: 2, text:"Kalahari", correct:false},
            {id: 3, text:"Atacama", correct:true},
            {id: 4, text:"Gobi", correct:false},
        ],
        timer: 15,
        explanation: "O deserto do Atacama, no Chile, é o mais seco do mundo, com algumas regiões onde não chove há centenas de anos."
    },
    // continua adicionando os outros com time: 10 ou time: 55 conforme o necessário
]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
const timerElement = document.createElement("div")
timerElement.id = "timer"
document.querySelector(".quiz").appendChild(timerElement)

let currentQuestionsIndex= 0
let score = 0
let countdown
let timeLeft

function startQuiz(){
    currentQuestionsIndex = 0
    score = 0
    nextButton.innerHTML = "Próxima"
    showQuestion()
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    clearInterval(countdown)
    timerElement.innerHTML = ""
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionsIndex]
    let questionNo = currentQuestionsIndex +1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        button.addEventListener("click", () => selectAnswer(answer, currentQuestion))
        answerButtons.appendChild(button)
    })
    startTimer(currentQuestion.time || 15)
}

function startTimer(seconds) {
    timeLeft = seconds
    timerElement.innerHTML = `⏱️ Tempo: ${timeLeft}s`
    countdown = setInterval(() => {
        timeLeft--
        timerElement.innerHTML = `⏱️ Tempo: ${timeLeft}s`
        if (timeLeft <= 0) {
            clearInterval(countdown)
            alert("⏰ Tempo esgotado! Você perdeu o jogo.")
            location.reload()
        }
    }, 1000)
}

     

function selectAnswer(answer, question){
    clearInterval(countdown)
    const buttons = answerButtons.children
    for(let i=0;i<buttons.length;i++){
        buttons[i].disabled = true
        if(question.answers[i].correct){
            buttons[i].classList.add("correct")
        } else {
            buttons[i].classList.add("incorrect")
        }
    }

    if(answer.correct){
        score++
    }

    showExplanation(true, question)
}

function showExplanation(respondido, question = questions[currentQuestionsIndex]){
    const exp = document.createElement("p")
    exp.classList.add("explanation")
    exp.innerHTML = "💡 " + (question.explanation || "Explicação não disponível.")
    document.querySelector(".quiz").appendChild(exp)
    nextButton.style.display = "block"
}

nextButton.addEventListener("click", ()=>{
    const oldExp = document.querySelector(".explanation")
    if (oldExp) oldExp.remove()
    currentQuestionsIndex++
    if(currentQuestionsIndex < questions.length){
        showQuestion()
    } else {
        showScore()
    }
})

function showScore(){
    resetState()
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`
    nextButton.innerHTML = "Jogar Novamente"
    nextButton.style.display = "block"
    nextButton.onclick = () => location.reload()
}

startQuiz()
