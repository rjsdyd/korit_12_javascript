let fName = 'Jone';
let lName = 'Doe';

let person = {
  firstName : fName,
  lastNmae : lName,
};

console.log(fName);
console.log(person.firstName);
console.log(person['firstName']);

/*
  object 상에서는 변수에 할당된 값을 key로 치환해서 사용하는 것은 불가능

  하지만, object literal syntax extension을 사용하면 object의 키로 변수에 할당된 '문자열' 값을 사용할 수 있음. 대괄호[] 사용
*/
let type = 'student';
let score = {
  [type]: 'Jane',
  score: 95,
};

console.log(score.score);
console.log(score);
console.log(score.student);

/*
  Object의 key를 동적으로 생성 가능할 수 있다는점 : input 태그를 통해서 객체의 key를 생성 가능
*/