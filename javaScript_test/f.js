const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printStar() {
  rl.question("정수를 입력하세요: ", (num) => {
    if (num > 0) {
      for (let i = 1; i <= 2 * num - 1; i++) {
        let stars = "*".repeat((num - Math.abs(num - i)) * 2 - 1);
        let spaces = " ".repeat(Math.abs(num - i));
        console.log(spaces + stars);
      }
      rl.close();
    } else {
      console.log("잘못된 입력입니다. ");
      printStar();
    }
  });
}

printStar();
