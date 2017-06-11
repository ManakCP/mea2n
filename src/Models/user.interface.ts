import { ILogin } from './login.interface';

export interface IUser extends ILogin {
    email: string;
    dob: Date;
    age: number;
}
