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

const r = new Rectangle(3,4)
const t = new Triangle(3,4)
const c = new Circle(3,4)

const r_area = r.getArea()
const t_area = t.getArea()
const c_area = c.getArea()

console.log(r_area)
console.log(t_area)
console.log(c_area)