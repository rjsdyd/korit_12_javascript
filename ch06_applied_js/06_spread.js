let arr1 = [ 4, 5, 6 ];
let arr2 = [ 1, 2, 3 ];
let arr3 = [ ...arr2, ...arr1 ];
console.log(arr3);

/*
  배열, 문자열과 같이 iteration (반복 가능 자료형) 형태의 데이터를 element 하나하나로 분해해서 사용이 가능
  arr1, 2 는 자료형이 배열 -> ...arr1 / ...arr2는요, 자료형이 배열이 아님
  4, 5, 6이라는 각각의 element와 1, 2, 3이라는 각각의 element임.
  즉, 자료형을 착각하기가 너무 쉬움

  아까 전에 ...args라고 할 때 spread 연산자가 도입됨.
*/
let cd = 'CD';
let alphabets = ['A', 'B', ...cd];
console.log(alphabets);
/*
  그럼 alphabets 내부의 element를 소문자로 바꾸고 싶다면 내부로 들어가서 toLowCase()를 적용하면 되겠네요.
*/
// 기본 for문
for (let i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i].toLowerCase());
}
// 향상 for문
for (let alphabet of alphabets) {
  console.log(alphabet.toLowerCase());
}