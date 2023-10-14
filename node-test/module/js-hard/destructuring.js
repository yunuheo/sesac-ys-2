const fruits = ["apple", "banana", "grape",];

const [apple2, banana2 = "banana2", grape2, strawberry = "strawberry"] = fruits;
console.log(apple2, strawberry, banana2);
//사실상 아래 코드와 동일한 작업을 하고 있음
// const apple2 = fruits[0]
// const banana2 = fruits[1]
// const grape2 = fruits[2]

let x = 1, y = 3;
[x, y] = [y, x];
// x = 3, y = 1
// x = y
// y = x
console.log(x,y);

const obj = {
    name: "lily",
    gender: "여",
    age: 99,
}

// const { age, name, test="test"} = obj
// console.log(age, test);

//key 이름 바꾸는 방법
const { age, name: name2} = obj;
console.log(age, name2);


// const age = obj.age;
// const name = obj.name;

const arr1 = [1,2,3,4,5];
const arr2 = ["a", "b", "c", "d", "e"]
// [1,2,3,4,5] => [1,2,3,4,5,"a", "b", "c", "d", "e"]

const arr3 = [...arr1, ...arr2];
console.log("arr3",arr3)
const hello = [..."hello"]
// hello = ["h", "e", "l", "l", "o"]
console.log("hello", hello);


const obj2 = {
    name: "lily",
    gender: "여",
    age: 99,
}
const obj3 = {
    ...obj2,
    test: "test",
}

console.log("obj3", obj3);

const values = [10, 20, 30]
function get(a,...rest) {
    console.log(a); // 10
    console.log(rest); // [20, 30]
} 


get(...values);

