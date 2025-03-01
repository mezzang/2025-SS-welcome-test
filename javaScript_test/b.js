const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isVowel() {
  rl.question("소문자 알파벳 한 글자를 입력하세요.: ", (char) => {
    if (char.length === 1 && ["a", "e", "i", "o", "u"].includes(char)) {
      console.log("o");
    } else {
      console.log("x");
    }
    rl.close();
  });
}

isVowel();
