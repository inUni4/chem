const chemistryA = ["Characteristics that can be observed or measured without changing the nature or identity of a substance.","Chemical reactions that a substance might undergo."];
const chemistryQ = ["What are physical properties?", "What is a chemical property?"];
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
