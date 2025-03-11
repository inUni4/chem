const chemistryA = ["You cannot see the different parts of the mixture, it is even throughout.","You see the different parts of the mixture easily and the mixture is not even.", "A solution is a homogenous mixture that combines a solute and a solvent.", "The solid part that gets dissolved.", "The liquid part that dissolves.", "The measurement of how easily a solute will dissolve in a certain solvent.", "A solution with only a small amount of solute.", "A solution with a large amount of solute."];
const chemistryQ = ["What is a homogenous mixture?", "What is a heterogenous mixture?", "What is a solution?", "What is a solute?", "What is a solvent?", "What is solubility?", "What is a dilute solution?", "What is a concentrated solution?"];
const chemWrapper = document.querySelector(".chem-wrapper");
const chemQuestions = document.querySelector(".chem-questions");
const chemAnswers = document.querySelector(".chem-answers");
const chemSubmit = document.querySelector(".chem-submit");
const chemVerify = document.querySelector(".chem-verify");

chemVerify.classList.add("hide");
chemQuestions.textContent = chemistryQ[0];

chemSubmit.addEventListener("click", () => {
  if(chemQuestions.textContent == chemistryQ[0] && chemAnswers.value == chemistryA[0]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryQ[1];
  } else if(chemQuestions.textContent == chemistryQ[1] && chemAnswers.value == chemistryA[1]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryQ[2];
  }  else if(chemQuestions.textContent == chemistryQ[2] && chemAnswers.value == chemistryA[2]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryQ[3];
  }  else if(chemQuestions.textContent == chemistryQ[3] && chemAnswers.value == chemistryA[3]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryQ[4];
  }  else if(chemQuestions.textContent == chemistryQ[4] && chemAnswers.value == chemistryA[4]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryQ[5];
  }  else if(chemQuestions.textContent == chemistryQ[5] && chemAnswers.value == chemistryA[5]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryQ[6];
  }  else if(chemQuestions.textContent == chemistryQ[6] && chemAnswers.value == chemistryA[6]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemAnswers.value = "";
    chemQuestions.textContent = chemistryQ[7];
  } else if(chemQuestions.textContent == chemistryQ[7] && chemAnswers.value == chemistryA[7]) {
    chemVerify.classList.add("hide");
    chemQuestions.innerHTML = "Congratulations, you are done for the day.";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});