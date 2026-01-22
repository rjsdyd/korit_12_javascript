// 변수 선언 및 초기화
var x = 5;
var y = 6;
var z = x + y;
console.log(z);

var x = 7;
z = x + y;
console.log(z);

console.log(a);       // 오류가 아닌 undefined;
var a = '안녕하세요';
console.log(a);

/*
  11번 라인에서 선언되지도 않은 a라는 변수를 console에 찍을 것을 요구했음에도 오류 로그가 뜨지 않고
  a 변수에 저장된 값이 undefined라고만 이야기함.
*/