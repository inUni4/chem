const chemistryA = ["The study of matter.","Anything that occupies space and has mass.", "The measure of the amount of matter that an object contains.", "A tentative explanation or prediction of experimental observations.", "A concise verbal or mathematical statement of a relation that is always the same under any conditions.", "A well tested, unifying principle that explains a body of facts and the laws based on them.", "Something, an event, phenomena that is noticed or observed.", "An organized procedure used to test a hypothesis."];
const chemistryQ = ["What is chemistry?", "What is matter?", "What is mass?", "What is an hypothesis?", "What is a law?", "What is a theory?", "What is an observation?", "What is an experiment?"];
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
    chemQuestions.textContent = chemistryQ[3];
    chemAnswers.value = "";
  }  else if(chemQuestions.textContent == chemistryQ[3] && chemAnswers.value == chemistryA[3]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryQ[4];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryQ[4] && chemAnswers.value == chemistryA[4]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryQ[5];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryQ[5] && chemAnswers.value == chemistryA[5]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryQ[6];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryQ[6] && chemAnswers.value == chemistryA[6]) {
    chemVerify.classList.remove("hide");
    chemVerify.classList.remove("chem-verify-bad");
    chemVerify.classList.add("chem-verify-good");
    chemVerify.textContent = "You are correct!";
    chemQuestions.textContent = chemistryQ[7];
    chemAnswers.value = "";
  } else if(chemQuestions.textContent == chemistryQ[7] && chemAnswers.value == chemistryA[7]) {
    chemVerify.classList.add("hide");
    chemQuestions.innerHTML = "Congratulations, you can move on to the next <a href='https://inuni4.github.io/chem/chemistryBasics1.html'>level</a>";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});
