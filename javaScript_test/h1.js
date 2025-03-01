const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function timeToEnd() {
  rl.question("종료 시간을 입력하세요.: ", (input) => {
    let [aTime, bTime, cTime] = input.split(" ").map(Number);

    setTimeout(() => {
      console.log("A 마킹.");
    }, aTime * 1000);

    setTimeout(() => {
      console.log("B 마킹.");
    }, bTime * 1000);

    setTimeout(() => {
      console.log("C 마킹.");
    }, cTime * 1000);

    setTimeout(() => {
      console.log("모든 시험이 종료되었습니다");
    }, Math.max(aTime, bTime, cTime) * 1000);

    rl.close();
  });
}

timeToEnd();
