export const translateToMorse = (english) => {
  let englishArr = english.split("");

  let translation = englishArr.map((englishLetter) => {
    if (englishLetter === "a") {
      return ".-";
    } else if (englishLetter === "b") {
      return "-...";
    } else if (englishLetter === "c" ) {
      return "-.-.";
    } else if (englishLetter === "d" ) {
      return "-..";
    } else if (englishLetter === "e" ) {
      return ".";
    } else if (englishLetter === "f" ) {
      return "..-.";
    } else if (englishLetter === "g" ) {
      return "--.";
    } else if (englishLetter === "h" ) {
      return "....";
    } else if (englishLetter === "i" ) {
      return "..";
    } else if (englishLetter === "j" ) {
      return ".---";
    } else if (englishLetter === "k" ) {
      return "-.-";
    } else if (englishLetter === "l" ) {
      return ".-..";
    } else if (englishLetter === "m" ) {
      return "--";
    } else if (englishLetter === "n" ) {
      return "-.";
    } else if (englishLetter === "o" ) {
      return "---";
    } else if (englishLetter === "p" ) {
      return ".--.";
    } else if (englishLetter === "q" ) {
      return "--.-";
    } else if (englishLetter === "r" ) {
      return ".-.";
    } else if (englishLetter === "s" ) {
      return "...";
    } else if (englishLetter === "t" ) {
      return "-";
    } else if (englishLetter === "u" ) {
      return "..-";
    } else if (englishLetter === "v" ) {
      return "...-";
    } else if (englishLetter === "w" ) {
      return ".--";
    } else if (englishLetter === "x" ) {
      return "-..-";
    } else if (englishLetter === "y" ) {
      return "-.--";
    } else if (englishLetter === "z" ) {
      return "--..";
    } if (englishLetter === "A") {
      return ".-";
    } else if (englishLetter === "B") {
      return "-...";
    } else if (englishLetter === "C") {
      return "-.-.";
    } else if (englishLetter ==="D") {
      return "-..";
    } else if (englishLetter === "E") {
      return ".";
    } else if (englishLetter === "F") {
      return "..-.";
    } else if (englishLetter === "G") {
      return "--.";
    } else if (englishLetter === "H") {
      return "....";
    } else if (englishLetter === "I") {
      return "..";
    } else if (englishLetter === "J") {
      return ".---";
    } else if (englishLetter === "K") {
      return "-.-";
    } else if (englishLetter === "L") {
      return ".-..";
    } else if (englishLetter === "M") {
      return "--";
    } else if (englishLetter === "N") {
      return "-.";
    } else if (englishLetter === "O") {
      return "---";
    } else if (englishLetter === "P") {
      return ".--.";
    } else if (englishLetter === "Q") {
      return "--.-";
    } else if (englishLetter === "R") {
      return ".-.";
    } else if (englishLetter === "S") {
      return "...";
    } else if (englishLetter === "T") {
      return "-";
    } else if (englishLetter === "U") {
      return "..-";
    } else if (englishLetter === "V") {
      return "...-";
    } else if (englishLetter === "W") {
      return ".--";
    } else if (englishLetter === "X") {
      return "-..-";
    } else if (englishLetter === "Y") {
      return "-.--";
    } else if (englishLetter === "Z") {
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