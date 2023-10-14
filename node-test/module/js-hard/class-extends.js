class House {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        console.log(`이 건물은 ${new Date().getFullYear() - this.year}살 입니다.`)
    }
}

const H1 = new House('래미안', 2011);
H1.age();

class Personal {

}

// class Student {
//     constructor() {
//         //이름
//         //나이
//         //주민번호
//         // 학번
//     }

//     // 밥을 먹는다
//     // 잠을 잔다.
// }
//const p = new Personal

class Apartment extends House {
    constructor(name, year, floor) {
        //부모(House)의 생성자 호출
        super(name, year);
        this.floor = floor;
    }

    //오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는 것
    age() {
        super.age()
        console.log(`입주는 ${this.year+1}부터 시작했습니다.`);
    }
}


const apart = new Apartment("래미안 아파트", 2013, 15);
console.log(apart.name, apart.floor)
apart.age();

function test(a,b) {
    console.log(`a: ${a}, b: ${b}`)
}
function test(a,b,c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
}
test(2, 5)
// 오버로딩: 똑같은 함수의 이름으로 여러개의 함수를 선언하는 것(매개변수가 다름)
// js에서는 오버로딩 개념이 없다
// 해결하고 싶다면? 하나의 함수로 조건에 따라서 처리될 수 있도록
// function test(a, b=0, c=0){
//     console.log(`a: ${a}, b: ${b}, c: ${c}`)
// }

