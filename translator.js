export const translateToMorse = (english) => {
  let englishArr = english.split("");

  let translation = englishArr.map((englishLetter) => {
    if (englishLetter === "a" || "A") {
      return ".-";
    } else if (englishLetter === "b"|| "B") {
      return "-...";
    } else if (englishLetter === "c" || "C") {
      return "-.-.";
    } else if (englishLetter === "d" || "D") {
      return "-..";
    } else if (englishLetter === "e" || "E") {
      return ".";
    } else if (englishLetter === "f" || "F") {
      return "..-.";
    } else if (englishLetter === "g" || "G") {
      return "--.";
    } else if (englishLetter === "h" || "H") {
      return "....";
    } else if (englishLetter === "i" || "I") {
      return "..";
    } else if (englishLetter === "j" || "J") {
      return ".---";
    } else if (englishLetter === "k" || "K") {
      return "-.-";
    } else if (englishLetter === "l" || "L") {
      return ".-..";
    } else if (englishLetter === "m" || "M") {
      return "--";
    } else if (englishLetter === "n" || "N") {
      return "-.";
    } else if (englishLetter === "o" || "O") {
      return "---";
    } else if (englishLetter === "p" || "P") {
      return ".--.";
    } else if (englishLetter === "q" || "Q") {
      return "--.-";
    } else if (englishLetter === "r" || "R") {
      return ".-.";
    } else if (englishLetter === "s" || "S") {
      return "...";
    } else if (englishLetter === "t" || "T") {
      return "-";
    } else if (englishLetter === "u" || "U") {
      return "..-";
    } else if (englishLetter === "v" || "V") {
      return "...-";
    } else if (englishLetter === "w" || "W") {
      return ".--";
    } else if (englishLetter === "x" || "X") {
      return "-..-";
    } else if (englishLetter === "y" || "Y") {
      return "-.--";
    } else if (englishLetter === "z" || "Z") {
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

  return translation.join(" ");
    
}