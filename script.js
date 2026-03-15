class QAItem{

constructor(question, answer){
this.question = question;
this.answer = answer;
}

toggleAnswer(answerBox, icon){

const allAnswers = document.querySelectorAll(".answer");
const allIcons = document.querySelectorAll(".icon");

allAnswers.forEach(a=>{
if(a !== answerBox){
a.classList.remove("open");
}
});

allIcons.forEach(i=>{
if(i !== icon){
i.classList.remove("rotate");
}
});

answerBox.classList.toggle("open");
icon.classList.toggle("rotate");

}

render(){

const faq = document.createElement("article");
faq.className = "faq";

const questionDiv = document.createElement("div");
questionDiv.className = "question";

const qText = document.createElement("span");
qText.textContent = this.question;

const icon = document.createElement("span");
icon.className = "icon";
icon.textContent = "+";

const answerDiv = document.createElement("div");
answerDiv.className = "answer";
answerDiv.textContent = this.answer;

questionDiv.appendChild(qText);
questionDiv.appendChild(icon);

questionDiv.addEventListener("click", ()=>{
this.toggleAnswer(answerDiv,icon);
});

faq.appendChild(questionDiv);
faq.appendChild(answerDiv);

return faq;

}

}

const faqData = [

new QAItem(
"What is JavaScript?",
"JavaScript is a scripting language used to make web pages interactive."
),

new QAItem(
"What is DOM?",
"The Document Object Model represents HTML elements as objects that JavaScript can manipulate."
),

new QAItem(
"What is OOP?",
"Object Oriented Programming organizes code using objects, classes, and methods."
),

new QAItem(
"What are Event Listeners?",
"Event listeners allow JavaScript to respond to user interactions like clicks or keyboard input."
)

];

const container = document.getElementById("faqContainer");

faqData.forEach(item=>{
container.appendChild(item.render());
});