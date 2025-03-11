const chemistryA = ["Are quantities that can have different values under different conditions.","An independent variable is a variable that doesn't depend on another variable and isn't changed by factors an experimenter is trying to measure.", "The variable being tested in a scientific experiment.", "As the name implies controlled variables are factors which are controlled or held constant throughout an investigation.", "Variables which are held constant in an experiment, after the chemist decides which variable is independent and which variable is dependent."];
const chemistryQ = ["What are variables?", "What is an independent variable?", "What is a dependent?", "What are controlled variables?", "What are constant variables?"];
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
  } else if(chemQuestions.textContent == chemistryQ[2] && chemAnswers.value == chemistryA[2]) {
    chemVerify.classList.add("hide");
    chemQuestions.innerHTML = "Congratulations, you can move on to the next <a href='https://inuni4.github.io/chem/chemistryBasics11.html'>level</a>";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});
