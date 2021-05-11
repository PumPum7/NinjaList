export interface Address {
    city: string;
}

export interface Ninja {
    id: string;
    name: string;
    username: string;
    email: string;
    website: string;
    address: Address;
}
