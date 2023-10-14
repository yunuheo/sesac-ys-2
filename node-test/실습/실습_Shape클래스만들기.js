class Shape {
    constructor(garo,sero){
        this.garo = garo;
        this.sero = sero;
    }

    getArea(){
        const area = (this.garo*this.sero);
        return area;
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea())