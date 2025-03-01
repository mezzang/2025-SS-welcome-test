const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum() {
  rl.question("양의 정수를 입력하시오: ", (num) => {
    if (num > 0) {
      let sum = 0;
      for (let i = 1; i <= num; i++) {
        sum += i;
      }
      console.log(`1부터 ${num}까지 합: ${sum}`);
      rl.close();
    } else {
      console.log("양의 정수가 아닙니다.");
      sum();
    }
  });
}

sum();
