interface User {
    name: string;
    age: number;
    email: string;
}

type UserKey = keyof User;// 'name' | 'age' | 'email'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: User = {
    name: 'Takuya',
    age: 24,
    email: 'test@example.com',
}

console.log(getProperty(user, 'name'));