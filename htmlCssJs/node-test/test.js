function first() {
    second();
    console.log(1);
    return;
    }
    function second() {
    console.log(2);
    return;
    }

first();

    /* first()와 second() 2개의 함수 정의
    first() 함수만 실행
    first() 함수에서는 숫자 1출력 후 second() 함수 실행 */

function run() {
    console.log("3초 뒤 실행")
}

console.log('시작')
setTimeout(run, 3000); // 함수 뒤에 괄호 쓰지 않는다
console.log("끝");
// 콜백함수: 함수의 인자로 함수를 넘길 때, 인자로 넘기는 함수

/* 
시작
끝
3초 후 실행
 */