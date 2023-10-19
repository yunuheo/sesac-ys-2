const data = {name: "lily", gender: "여자"};

// 위를 json형태로 변경 하면?
const jsonData = JSON.stringify(data); // 직렬화 => stringify()함수 사용
console.log("json", json)

console.log("js object: ", JSON.parse(jsonData)); // 역직렬화 => parse()함수 사용
