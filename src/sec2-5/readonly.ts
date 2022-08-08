type User = {
    readonly id: string;
    name: string;
    gender: string;
};

let user: User = {
    id: '0001',
    name: 'Takuya',
    gender: 'Male',
}

console.log(user.id);


type UserReadonly = Readonly<User>;
let userReadonly: UserReadonly = {
    id: '0001',
    name: 'Takuya',
    gender: 'Male',
};

console.log(user.id);