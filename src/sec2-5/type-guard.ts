type User = {
    info?: {
        name: string,
        age: number,
    },
}

let response = {
    info: {
        name: 'Takuya',
    },
}
const user = (response as any) as User;

if (user.info) {
    console.log(user.info.name);
}