
export class Students {
    constructor(
        public account:UserDetails,
        public joined_on:any,
        public location: any,
        public payment: any,
        public stack:any
    ){}
}

// export class User{
//     constructor(
//         public username:any,
//         public first_name:any,
//         public last_name:any,
//         public email:any,
//         public password:any
//     ){}
// }

export class Auth{
    constructor(
        public username:any,
        public password:any
    ){}
}

export class UserDetails{
    constructor(
        public username:any,
        public first_name:any,
        public last_name:any,
        public email:any,
        public avatar:any,
        public gender:any,
        public password:any
    ){}
}


