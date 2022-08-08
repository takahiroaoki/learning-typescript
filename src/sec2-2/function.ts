// optional arg
function sayHello(name: string, greeting?: string): string {
    return greeting ? `${greeting} ${name}` : `Hello ${name}`;
}

console.log(sayHello('Takuya'));
console.log(sayHello('Takuya', 'Hi'));

// default arg
function sayHelloV2(name: string, greeting: string = 'Hello'): string {
    return `${greeting} ${name}`;
}

console.log(sayHelloV2('Takuya'));
console.log(sayHelloV2('Takuya', 'Hi'));

// function as arg
function printName(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName));
}

function formatName(name: string): string {
    return `${name} san`;
}

printName('Takuya', formatName);