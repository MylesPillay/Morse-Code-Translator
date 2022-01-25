import { translateToMorse } from "./translator.js";

const inputEnglish = document.querySelector(".user-input");
const morseTranslation = document.querySelector(".morse-translation");
const submitInput = document.querySelector(".submit-btn");
const reset = document.querySelector(".reset-btn");


submitInput.addEventListener("click", () => {
  const englishInput = inputEnglish.value;
  const englishToMorseTranslation = translateToMorse(englishInput);
  morseTranslation.innerHTML=`${englishToMorseTranslation}`;
})
reset.addEventListener("click", () => {
  inputEnglish.value = "";
  morseTranslation.innerHTML = "";
})