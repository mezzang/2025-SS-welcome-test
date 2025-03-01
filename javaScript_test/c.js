const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playroom() {
  rl.question("키와 나이를 입력하세요.: ", (input) => {
    let [height, age] = input.split(" ").map(Number);
    if (height >= 155 || age >= 14) {
      console.log("입장이 불가합니다.");
    } else {
      console.log("입장이 가능합니다.");
    }
    rl.close();
  });
}
playroom();
