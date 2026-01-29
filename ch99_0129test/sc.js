const users = [
    { id: 1, name: "이성계" },
    { id: 2, name: "이방과" },
    { id: 3, name: "이방원" }
];
const userMap = users.map(user => user.id * 2);

console.log(userMap);     // 예상 결과: [2, 4, 6]
console.log(users);           // 예상 결과: [{ id: 1, name: "이성계" }, { id: 2, name: "이방과" }, { id: 3, name: "이방원" }]