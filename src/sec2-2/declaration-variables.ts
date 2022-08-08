// primitive
let employeeName: string = 'John';
let age: number = 28;
let isDone: boolean = false;

// array
const array: string[] = [];
array.push(employeeName);

const union: (string | number)[] = [employeeName, age, 'hoge'];
const tuple: [string, number] = [employeeName, age];

// object
const user: { name: string; age: number } = {
    name: 'Takuya',
    age: 28,
}
console.log(user.name);
console.log(user.age);

const userOptionalAge: { name: string; age?: number } = {
    name: 'Takuya',
}

// any
let userAny: any = { firstName: 'Takuya' };