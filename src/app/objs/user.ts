export class User{

    id: string;
    user: string;
    psw: string;
    isAdmin: boolean;

    constructor(id: string, user: string, psw: string, isAdmin: boolean ){
        this.id = id;
        this.user = user;
        this.psw = psw;
        this.isAdmin = isAdmin;
    }
    
}