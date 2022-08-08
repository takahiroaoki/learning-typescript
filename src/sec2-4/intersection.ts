type Id = number | string;

function printId(id: Id) {
    console.log(id);
}

type Identity = {
    id: Id;
    name: string;
}

type Contact = {
    name: string;
    email: string;
    phone: string;
}

type Employee = Identity & Contact

const contact: Employee = {
    id: 1,
    name: 'Takuya',
    email: 'test@example.com',
    phone: '012345678',
};

printId(contact.id);