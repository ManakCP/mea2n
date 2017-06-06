export class User {
    name: string;
    password: string;
    email: string;
    dob: Date;

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
