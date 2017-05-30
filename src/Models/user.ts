export class user{
    constructor(
        public username: string,
        public password: string,
        public emailId: string,
        public dob: Date,
        public gender: boolean
    ){}
}