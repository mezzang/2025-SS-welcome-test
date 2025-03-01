const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lastDay() {
  rl.question("년도와 월을 입력하세요.: ", (input) => {
    let [year, month] = input.split(" ").map(Number);
    switch (month) {
      case (1, 3, 5, 7, 8, 10, 12):
        console.log(`${year}년 ${month}월의 마지막 날은 31일 입니다.`);
        break;
      case 2:
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          console.log(`${year}년 ${month}월의 마지막 날은 29일 입니다.`);
        } else {
          console.log(`${year}년 ${month}월의 마지막 날은 28일 입니다.`);
        }
        break;
      case (4, 6, 9, 11):
        console.log(`${year}년 ${month}월의 마지막 날은 30일 입니다.`);
        break;
      default:
        console.log("잘못된 입력입니다.");
        lastDay();
    }
    rl.close();
  });
}
lastDay();
