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

class Rectangle extends Shape {
    getDegak(){
        const degak = Math.sqrt(super.getArea())
        return degak;
    }
}

class Triangle extends Shape {
    getArea(){
        return super.getArea() / 2;
    }
}

class Circle extends Shape {
    constructor(radius){
        super(radius);
        this.radius = radius
    }

    getArea(){
        const area = (this.radius*this.radius*3.14)
        return area
    }
}

const r1 = new Rectangle(3,4)
const t1 = new Triangle(5,4)
const c1 = new Circle(3.14)

const rec = r1.getDegak()
const tri = t1.getArea()
const cir = c1.getArea()

console.log(rec)
console.log(tri)
console.log(cir)