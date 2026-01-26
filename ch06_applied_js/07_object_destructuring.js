function getPerson() {
  return {
    fNname : '영',
    lName : '김',
    age : 20,
    email : 'kim0@text.com',
    city : '부산',
    contry : '대한민국'
  };
};
// 이상의 코드가 있다고 가정할 때 email 값과 city의 값을 출력하고 싶다면 어떡해야할 까요?
// 실행 예
/*
  해당 지원자는 부산에 살고 있으며 email은 kim0@test.com입니다.
*/

console.log(`해당 지원자는 ${getPerson().city}에 살고 있으면 emial은 ${getPerson().email}입니다.`);

let {email, city} = getPerson();
console.log(`해당 지원자는 ${city}에 살고 있으면 emial은 ${email}입니다.`);

function displayFullName ({fNname, lName}) {
  console.log(`${lName} ${fNname}`);
}
displayFullName(getPerson());   // 그러면 argument로는 key로 fName / lName을 가지고 있는 애가 필수적으로 요구됨. - 호출 시 argument와 정의 시의 매개변수의 차이점에 주목 -> React에서 허구한 날 쓰이기에 꼭꼭꼭 알아둘것.