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

type IdentityOrContact = Identity | Contact;

const contact: IdentityOrContact = {
    id: 1,
    name: 'Takuya',
};

printId(contact.id);