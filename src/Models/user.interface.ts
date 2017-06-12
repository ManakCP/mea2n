export interface ILogin {
    email: string;
    password: string;
}

export interface IUser extends ILogin {
    name: string;
    dob: Date;
    age: number;
}
