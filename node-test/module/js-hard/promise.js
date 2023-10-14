// promise 기본 예시
// function promise1(flag) {
//     return new Promise(function (resolve, reject) {
//         if (flag) {
//             resolve(`상태 fullfiled ! then으로 연결`)
//         } else {
//             resolve(`상태 rejected ! catch으로 연결`)
//         }
//     });
// }

// // 특정함수가 return 하는 값이 promise 객체일 경우, chaining으로 then, catch 라는 메소드 사용가능!
// promise1(false).then((result) => {
//     // result에는 resolve로 보낸 인자 값이 들어오게 된다.
//     // 여기서는 `상태 fullfield ! then으로 연결` 문자열
//     console.log(result);
// })
//     .catch((err) => {
//         console.log(err)
//     });


//-------------- 콜백 지옥 예시 ----------------
// function add(n1, n2, cb) {
//     setTimeout(function () {
//         let result = n1 + n2;
//         cb(result);
//     }, 1000);
// }

// function mul(n, cb) {
//     setTimeout(function () {
//         let result = n * 2;
//         cb(result);
//     }, 700);
// }

// function sub(n, cb) {
//     setTimeout(function () {
//         let result = n - 1;
//         cb(result);
//     }, 500);
// }

// add(4, 3, function (x) {
//     console.log("1: ", x);
//     mul(x, function (y) {
//         console.log("2: ", y);
//         sub(y, function (z) {
//             console.log("3: ", z);
//         });
//     });
// });

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ promise로 변경 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// function add(n1, n2) {
//     return new Promise((resolve, reject) => { //reject 안쓰면 지워도 됨
//         setTimeout(function () {
//             let result = n1 + n2;
//             resolve(result);
//         }, 1000);
//     })

// }

// function mul(n, cb) {
//       return new Promise((resolve, reject)=> { //reject 안쓰면 지워도 됨
//         setTimeout(function () {
//             let result = n * 2;
//             resolve(result);
//             //reject("오류 발생")
//         }, 700);
//       })

// }

// function sub(n, cb) {
//     return new Promise((resolve, reject)=> { //reject 안쓰면 지워도 됨
//         setTimeout(function () {
//             let result = n - 1;
//             resolve(result)
//         }, 500);
//     })

// }

// add(4, 3, function (x) {
//     console.log("1: ", x);
//     mul(x, function (y) {
//         console.log("2: ", y);
//         sub(y, function (z) {
//             console.log("3: ", z);
//         });
//     });
// });

// add(4,3).then((result)=>{
//     console.log("1: ", result)
//     return mul(result);
// })
//   .then((result)=>{
//     console.log("2: ", result)
//     return sub(result)
//   })
//   .then((result)=>{
//     console.log("3: ", result)
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡasync / await 과 함께 사용ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

async function add(n1, n2) {
    return new Promise((resolve, reject) => { //reject 안쓰면 지워도 됨
        setTimeout(function () {
            let result = n1 + n2;
            resolve(result);
        }, 1000);
    })

}

function mul(n, cb) {
    return new Promise((resolve, reject) => { //reject 안쓰면 지워도 됨
        setTimeout(function () {
            let result = n * 2;
            resolve(result);
            //reject("오류 발생")
        }, 700);
    })

}

async function sub(n, cb) {
    return new Promise((resolve, reject) => { //reject 안쓰면 지워도 됨
        setTimeout(function () {
            let result = n - 1;
            resolve(result)
        }, 500);
    })

}

// 1. async 함수는 promise를 return.
// 2. await 키워드는 async 함수 내부에서만 사용이 가능하다.
async function exec() {
    const x = await add(4,3); // x = 7
    console.log("1: ", x)
    const y = await mul(x); // y = 14
    console.log("2: ", y)
    const z = await sub(y); // z = 13
    console.log("3: ", z)

    // await test() 굳이 쓸 필요 없다.
}

exec();

// async function test() {
//     console.log("test");
// }

// console.log(test());





