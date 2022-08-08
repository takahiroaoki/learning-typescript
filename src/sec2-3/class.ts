// definition
class Point {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    moveX(delta: number): void {
        this.x += delta;
    }

    moveY(delta: number): void {
        this.y += delta;
    }
}

const point = new Point();
point.moveX(10);
console.log(`${point.x}, ${point.y}`);

// extending
class Point3D extends Point {
    z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y);
        this.z = z;
    }

    moveZ(delta: number): void {
        this.z += delta;
    }
}
const point3D = new Point3D();
point3D.moveY(10);
point3D.moveZ(2);
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);

// implements interface
interface UserInterface {
    name: string;
    age: number;
    sayHello: () => string;
}

class User implements UserInterface {
    name: string;
    age: number;

    constructor() {
        this.name = '';
        this.age = 0;
    }

    sayHello(): string {
        return `Hello, I'm ${this.name} and ${this.age} y.o.`;
    }
}

const user = new User();
user.name = 'Takuya';
user.age = 26;
console.log(user.sayHello());