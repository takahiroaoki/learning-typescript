type User = {
    name: string,
    social?: {
        facebook: boolean,
        twitter: boolean,
    }
}

let user: User = {
    name: 'Takuya',
    social: {
        facebook: true,
        twitter: true,
    }
}

console.log(user.social?.facebook);

user = {
    name: 'Takuya',
}

console.log(user.social?.facebook);