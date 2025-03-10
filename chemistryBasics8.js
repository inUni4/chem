const chemistryA = ["This is the world of experiments and observations. For example chemical and physical processes.","This is the level of individual particles that make up all matter. For example, atoms and molecules."];
const chemistryQ = ["Macroscopic:", "Submicroscopic or particulate:"];
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
    chemQuestions.innerHTML = "Congratulations, you can move on to the next <a href='file:///C:/j.s-basics/chemistryBasics9.html'>level</a>";
    chemAnswers.classList.add("hide");
    chemSubmit.classList.add("hide");
    chemAnswers.value = "";
  } else {
    chemVerify.classList.remove("hide");
    chemVerify.classList.add("chem-verify-bad");
    chemVerify.textContent = "You are incorrect!";
  };
});