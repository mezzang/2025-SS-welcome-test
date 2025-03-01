const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function reverse() {
  rl.question("세 자리 정수를 입력하세요: ", (num) => {
    if (num.length === 3 && !isNaN(num)) {
      let reverse = num.split("").reverse().join("");
      console.log(reverse);
      rl.close();
    } else {
      console.log("잘못된 입력입니다.");
      reverse();
    }
  });
}

reverse();
