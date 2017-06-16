export interface IDashBoard {
    name: string;
    isLoggedInUser: boolean;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IUser extends ILogin, IDashBoard {
    dob: Date;
    age: number;
}