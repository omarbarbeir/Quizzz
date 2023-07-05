let menu = document.getElementById("menu")
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third");
let logo = document.getElementById("q");
let nav = document.getElementById("m-nav");
let icon = document.getElementById("icon");
let startbtn = document.getElementById("startbtn");
let popup = document.getElementById("pop-up");
let main = document.getElementById("main")
let exit = document.getElementById("exit")
let continuee = document.getElementById("continue");
let quizsection = document.getElementById("quizsection")
let optionlist = document.getElementById("option-list");
let quizbox = document.getElementById("quizbox");
let nextBtn = document.getElementById("next");
let resultbox = document.getElementById("resultbox");
let againbtn = document.getElementById("again")
let gohome = document.getElementById("gohome")

menu.onclick = ()=>{
    first.classList.add("active");
    second.classList.add("active");
    third.classList.add("active");
    logo.classList.add("active");
    nav.classList.add("active")
}
icon.onclick = ()=>{
    nav.classList.remove("active");
    logo.classList.remove("active");
    first.classList.remove("active");
    second.classList.remove("active");
    third.classList.remove("active");
}
startbtn.onclick = ()=>{
    popup.classList.add("active");
    main.classList.add("active")
}
exit.onclick = ()=>{
    popup.classList.remove("active");
    main.classList.remove("active")
}
continuee.onclick = ()=>{
    quizsection.classList.add("active");
    popup.classList.remove("active");
    main.classList.remove("active");
    quizbox.classList.add("active");
    showQ(0);
    questionCount(1);
    score()
}

nextBtn.onclick = ()=>{
    questionCount(questionNumber);
    if(questionCounter < questions.length -1){
        questionCounter++;
        showQ(questionCounter);

        questionNumber++;
        questionCount(questionNumber)
        nextBtn.classList.remove("active")
    }else{
        showResult()
    }
}

againbtn.onclick =()=>{
    quizbox.classList.add("active");
    resultbox.classList.remove("active");
    nextBtn.classList.remove("active");

    questionCounter = 0;
    questionNumber = 1;
    userScore = 0;

    showQ(questionCounter);
    score();
    questionCount(questionNumber)
}

gohome.onclick = ()=>{
    quizsection.classList.remove("active");
    resultbox.classList.remove("active");
    nextBtn.classList.remove("active");
    questionCounter = 0;
    questionNumber = 1;
    userScore = 0;
    showQ(questionCounter);
    questionCount(questionNumber)
    
}

let questionCounter = 0;
let questionNumber = 1;
let userScore = 0;

function showQ(index){
    let text = document.getElementById("text");
    text.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTags = `<div id="option"><span>${questions[index].options[0]}</span></div>
    <div id="option"><span>${questions[index].options[1]}</span></div>
    <div id="option"><span>${questions[index].options[2]}</span></div>
    <div id="option"><span>${questions[index].options[3]}</span></div>`;

    optionlist.innerHTML = optionTags;

    let options = document.querySelectorAll("#option");
    for(let i=0; i<option.length; i++){
        options[i].setAttribute("onclick","optionSelected(this)")
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCounter].answer;
    let allOptions = optionlist.children.length;

    if(userAnswer == correctAnswer){
        answer.classList.add("correct");
        userScore++;
        score()
    }
    else{
        answer.classList.add("incorrect");
        for(let i=0; i<allOptions; i++){
            if(optionlist.children[i].textContent == correctAnswer){
                optionlist.children[i].setAttribute("class","option correct")
            }
        }
    }

    for(let i=0; i<allOptions ; i++){
        optionlist.children[i].classList.add("disable")
    }
    nextBtn.classList.add("active")
}


function questionCount(index){
    let total =document.getElementById("total");
    total.textContent = `Question ${index} of ${questions.length}`
}

function score(){
    let headScore = document.getElementById("headscore");
    headScore.textContent = `Score: ${userScore} / ${questions.length}`
}

function showResult(){
    quizbox.classList.remove("active");
    resultbox.classList.add("active");

    let scoreText = document.getElementById("scoretext");
    scoreText.textContent = `Your Score ${userScore} Out Of ${questions.length}`;

    let circule = document.getElementById("circule");
    let progressValue = document.getElementById("progress-value");
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circule.style.background = `conic-gradient(#0bc53a ${progressStartValue * 3.6}deg,rgba(255,255,255,0.1) 0deg)`
        if(progressStartValue == progressEndValue){
            clearInterval(progress)
        }
    }, speed);
}