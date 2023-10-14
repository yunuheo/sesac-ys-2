// import add2 from "./math_es6";
// math_es6파일에서 default로 export 하고 있는 식별자를 add2라는 식별자로 받아옴
// console.log(add2(2,3))

// import { add } from "./math_es6"
// console.log(add(2,3));

//es6 문법에서 모듈 import 할 때, 구조분해 업싱 식별자를 만들어서 받아오는 방법은
// module 파일 (math_es6.js)에 default로 export 하는 값이 있어야 함
import math from "./math_es6.js"
console.log(math.add(2,3)) // 오류 발생!!!
