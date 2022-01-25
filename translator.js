export const translateEnglishToMorse = (english) => {
  let englishArr = english.split("");

  let morseTranslation = englishArr.map((englishLetter) => {
    if (englishLetter === "a") {
      return ".-";
    } else if (englishLetter === "b") {
      return "-...";
    } else if (englishLetter === "c") {
      return "-.-.";
    } else if (englishLetter === "d") {
      return "-..";
    } else if (englishLetter === "e") {
      return ".";
    } else if (englishLetter === "f") {
      return "..-.";
    } else if (englishLetter === "g") {
      return "--.";
    } else if (englishLetter === "h") {
      return "....";
    } else if (englishLetter === "i") {
      return "..";
    } else if (englishLetter === "j") {
      return ".---";
    } else if (englishLetter === "k") {
      return "-.-";
    } else if (englishLetter === "l") {
      return ".-..";
    } else if (englishLetter === "m") {
      return "--";
    } else if (englishLetter === "n") {
      return "-.";
    } else if (englishLetter === "o") {
      return "---";
    } else if (englishLetter === "p") {
      return ".--.";
    } else if (englishLetter === "q") {
      return "--.-";
    } else if (englishLetter === "r") {
      return ".-.";
    } else if (englishLetter === "s") {
      return "...";
    } else if (englishLetter === "t") {
      return "-";
    } else if (englishLetter === "u") {
      return "..-";
    } else if (englishLetter === "v") {
      return "...-";
    } else if (englishLetter === "w") {
      return ".--";
    } else if (englishLetter === "x") {
      return "-..-";
    } else if (englishLetter === "y") {
      return "-.--";
    } else if (englishLetter === "z") {
      return "--..";
    } else if (englishLetter === " ") {
      return "/";
    } else if (englishLetter === ".") {
      return ".-.-.-";
    } else if (englishLetter === ",") {
      return "--..--";
    } else if (englishLetter === "?") {
      return "..--..";
    } else if (englishLetter === ";") {
      return "-.-.-.";
    } else if (englishLetter === ":") {
      return "---...";
    } else if (englishLetter === "-") {
      return "-....-";
    } else if (englishLetter === "/") {
      return "-..-.";
    } else if (englishLetter === "'") {
      return ".----.";
    } else if (englishLetter === "\"") {
      return ".-..-.";
    } else if (englishLetter === "!") {
      return "invalid input";
    }
  })

  return morseTranslation.join(" ");
    
}