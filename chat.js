const sendBtn = document.querySelector("#sendBtn");
const chatGpt = document.querySelector("#chatGpt");
const QAsection = document.createElement("section");
document.querySelector("#main").appendChild(QAsection);

QAsection.id = "qa-section";

// document.querySelector('#input-section').before(QAsection)
let punctuation = 0;

function randomPunctuation() {
  var punctuations = ["!?", "!!", "??", ".", "...", "!??!", "!!!???", "??!??!??", "!!?!!?!!?!!"];
  var random = Math.floor(Math.random() * punctuations.length);
  var randomValue = punctuations[random];
  punctuation = randomValue;
  return punctuation;
}

const tab = [
  { question: "question 1", answer: "111" },
  { question: "question 2", answer: "222" },
  { question: "question 3", answer: "333" },
  { question: "question 4", answer: "444" },
  { question: "question 5", answer: "555" },
  { question: "question 6", answer: "666" },
];


function chatAnswer(e) {
  e.preventDefault();
  // Disparition de la page Chat GPT
  chatGpt.style.display = "none";


  // Création de la div container de la question (modif : className au lieu d'id = pour pouvoir compter les div)
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  questionDiv.style.cssText =
    "background : #353540; display: flex; justify-content: space-between; align-items: start; font-size: 20px";
  QAsection.appendChild(questionDiv);

  // Variable qui compte les div question pour pvr faire une boucle avec au moment de la création des div réponses, et ne pas les faire se répéter avec la boucle du tableau des questions/réponses
  numberDiv = document.querySelectorAll(".question").length;

  // Création de la div container de la réponse
  const answerDiv = document.createElement("div");
  answerDiv.className = "answer";
  answerDiv.style.cssText =
    "background : #444653; display: flex; justify-content: space-between; align-items: start";
  QAsection.appendChild(answerDiv);


  sendBtn.addEventListener("click", function(){
    const topDiv = document.querySelector('#top')
    topDiv.scrollTop = topDiv.offsetHeight;
  })

  
  //  si Groot actif il répond groot sinon il fait
  if (grootBox.checked) {
    randomPunctuation();
    if (!input.value == "") {
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="groot${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
      // Typewriter permet de simuler l'écriture en direct
      var typewriter = new Typewriter(`#groot${numberDiv}`, {
        cursor : ""
       });
    typewriter
      .changeDelay(50)
      .typeString(`Je s'appelle Groot ${punctuation}`)
      .start();
      
    } else {
      questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p  class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">...</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
      answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="groot${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
      var typewriter = new Typewriter(`#groot${numberDiv}` , {
        cursor : ""
       });
    typewriter
      .changeDelay(50)
      .typeString(`Je s'appelle Groot ${punctuation}`)
      .start();
    }
    input.value = "";
  } else {
  if (!input.value == "") 
  {
    // verifie la question qui est posé si elle correspond au tableau des questions. Si oui, crée la réponse adéquate
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].question == input.value) {
        questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${tab[i].question}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
        answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="answer${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
          var typewriter = new Typewriter(`#answer${numberDiv}`, {
            cursor : ""
           });

          typewriter
            .changeDelay(50)
            .typeString(tab[i].answer)
            .start();
        break;
      } else {
        // si aucune question dans notre liste et si groot pas activé
        questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
        answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="sorry${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
         var typewriter = new Typewriter(`#sorry${numberDiv}`, {
          cursor : ""
         });
          typewriter
            .changeDelay(50)
            .typeString("Je ne souhaite pas répondre à votre question... Retentez plus tard.")
            .start();
        }
      }
  } else {
    // si le input est vide
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">...</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="empty${numberDiv}"></p><div id="thumbs-div" class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
   var typewriter = new Typewriter(`#empty${numberDiv}`, {
    cursor : ""
   });
      typewriter
        .changeDelay(50)
        .typeString("Oh vous ne voulez pas me parler ??? Je suis vexé...")
        .start()
    }
  }
// Bouton like et dislike + intéraction. Si l'un est up l'autre ne l'est plus
  let btnUp = false;
  let btnDown = false;

  const thumbsUp =  answerDiv.childNodes[2].childNodes[0]
  thumbsUp.onclick = () => {

    if(btnDown == true){
      btnUp = true;
      thumbsUp.style.cssText = "color: lightgreen"
      btnDown = false;
      thumbsDown.style.cssText = ""
    } else if(btnUp == true){
      btnUp = false;
      thumbsUp.style.cssText = "" 
    } else {
      btnUp = true;
      thumbsUp.style.cssText = "color: lightgreen" 
    }
  }

  const thumbsDown =  answerDiv.childNodes[2].childNodes[1]
  thumbsDown.onclick = () => {
    if(btnUp == true){
      btnDown = true;
      thumbsDown.style.cssText = "color: red"
      btnUp = false;
      thumbsUp.style.cssText = ""
    } else if(btnDown == true){
      btnDown = false;
      thumbsDown.style.cssText = "" 
    } else {
      btnDown = true;
      thumbsDown.style.cssText = "color: red"
    }
  }

  input.value = ""
  }

sendBtn.addEventListener("click", chatAnswer);
