const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function h2() {
  let now = new Date();
  rl.question("각 소요 시간을 입력하세요:", (input) => {
    let times = input.split(" ").map(Number);
    if (times.some((time) => time < 0) || times.length !== 3) {
      console.log("잘못된 입력입니다.");
      h2();
    } else {
      let maxTime = Math.max(...times);
      function message(person, taskTime) {
        let count = 0;
        let interval = setInterval(() => {
          count++;
          console.log(
            `(${count}초 후) ${person} 작업 진행중 (${count}초 경과)`
          );
          if (count === taskTime) {
            console.log(`${person} 작업 완료`);
            clearInterval(interval);
          }
          if (count === maxTime) {
            console.log(
              `(${count}초 후) 프로젝트 배포 완료! (완료 시간: ${now.toLocaleString()})`
            );
            clearInterval(interval);
          }
        }, 1000);
      }
      message("A", times[0]);
      message("B", times[1]);
      message("C", times[2]);
      rl.close();
    }
  });
}

h2();
