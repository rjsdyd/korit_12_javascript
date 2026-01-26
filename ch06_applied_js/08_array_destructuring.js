function getScores() {
  return [70, 80, 90, 100];
};
let scores = getScores();
let x = scores[0];
let y = scores[1];
let z = scores[2];
// 번거로움.

// 그래서 배열 구조분해가 가능
let [a, b, c] = getScores();
console.log(a);
console.log(b);
console.log(c);
// 즉 배열의 length와 같은 수가 변수가 []내에 선언

let [q, w, e, r, d] = [ '쵸단' , '마젠타' , '히나' , '시연' ]
console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log(d);
