// extending interface after definition
interface Point {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(`x座標は${point.x}です`);
    console.log(`y座標は${point.y}です`);
    console.log(`z座標は${point.z}です`);
}

interface Point {
    z: number;
}

printPoint({ x: 100, y: 100, z: 100 });

// implements
class MyPoint implements Point {
    x: number;
    y: number;
    z: number;
    pointName: string;
}

// new interface
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
    center: Point;
}

interface ColorfulCircle extends Colorful, Circle { }

const colorfulCircle: ColorfulCircle = {
    color: 'red',
    radius: 10,
    center: {
        x: 100,
        y: 100,
        z: 100,
    },
}

printPoint(colorfulCircle.center);