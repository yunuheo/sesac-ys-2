function call(name, cb) {
    setTimeout(function () {
        console.log(name);
        cb(name)
    }, 1000)
}
function back(cb) {
    setTimeout(function () {
        console.log(back);
        cb(back)
    }, 1000)
}
function hell(cb) {
    setTimeout(function () {
        cb('callback hell')
    }, 1000)
}
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function call(name, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(name);
            resolve(resolve)
        }, 1000)
    })
}

function back(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(back);
            resolve(resolve)
        }, 1000)
    })
}

function hell(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(resolve)
        }, 1000)
    })
}

call('kim', function (name) {
    console.log(name + '반가워')
    back(function (txt) {
        console.log(txt + '을 실행했구나')
        hell(function (message) {
            console.log('여기는' + message)
        })
    })
})

call('kim').then((result) => {
    console.log(result);
    return back(result);
}).then((result) => {
    console.log(result);
})
back('kim').then((result) => {
    console.log(result);
    return back(result);
}).then((result) => {
    console.log(result);
})
hell('kim').then((result) => {
    console.log(result);
    return back(result);
}).then((result) => {
    console.log(result);
})

function call(name) {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        console.log(name);
        resovle(name);
      }, 1000);
    });
  }
  
  function back() {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        console.log("back");
        resovle("back");
      }, 1000);
    });
  }
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ강사님 해설ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  function hell() {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        resovle("callback hell");
      }, 1000);
    });
  }
  
  call("kim")
    .then(function (result) {
      console.log(result, "반가워");
      return back();
    })
    .then((result) => {
      console.log(result, "을 실행했구나");
      return hell();
    })
    .then((result) => {
      console.log("여기는", result);
    });