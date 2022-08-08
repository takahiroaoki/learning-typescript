// assertion
const response: { data: any } = {
    data: 'testResponse',
}
const data: string = response.data as string;

// alias
type User = {
    name: string,
    age: number,
};
const user: User = {
    name: 'takashi',
    age: 25,
}

type Formatter = (a: string) => string;
function printName(firstName: string, formatter: Formatter) {
    console.log(formatter(firstName));
}

type Label = {
    [key: string]: string,
}

const labels: Label = {
    topTitle: 'This is the title of the top page.',
    topSubtitle: 'This is the subtitle.',
}