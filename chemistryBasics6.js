const chemWrapper = document.querySelector(".chem-wrapper");
const chemQuestion = document.querySelector(".chem-question");
const chemAnswer = document.querySelector(".chem-answer");
const chemBtn = document.querySelector(".chem-btn");
const chemVerify = document.querySelector(".chem-verify");
const chemPoint = document.querySelector(".chem-point");
let chemPoints = 0;

const qualityOb = ["Solid", "Liquid", "Gas"];

chemQuestion.textContent = "States of matter";

chemVerify.classList.add("hide");
chemBtn.addEventListener("click", () => {
  if (chemPoints === 2) {
    chemQuestion.innerHTML = "Congratulations, you can move on to the next <a href='https://inuni4.github.io/chem/chemistryBasics7.html'>level</a>";
    chemVerify.classList.add("hide");
    chemAnswer.classList.add("hide");
    chemPoint.classList.add("hide");
    chemBtn.classList.add("hide");
  } else {
    if(chemAnswer.value == qualityOb[0] || chemAnswer.value == qualityOb[1] || chemAnswer.value == qualityOb[2]) {
      chemVerify.classList.remove("hide");
      chemVerify.classList.remove("chem-verify-bad");
      chemVerify.classList.add("chem-verify-good");
      chemAnswer.value = "";
      chemPoints++;
      chemPoint.textContent = chemPoints;
      chemVerify.textContent = "You are correct, carry on.";
    } else {
      chemVerify.classList.remove("hide");
      chemVerify.classList.remove("chem-verify-good");
      chemVerify.classList.add("chem-verify-bad");
      chemVerify.textContent = "You are incorrect, please try again.";
    }; 
  }
});
