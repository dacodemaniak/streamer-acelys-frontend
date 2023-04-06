interface Role {
    [key: string]: string;
}

export class Member {
    // Mettre les attributes necessaires en fonction du diagram de l'api
    private _id?: number;
    private _email: string = '';
    private _firstName?: string = '';
    private _lastName?: string = '';
    private _login?: string = '';
    private _password?: string = '';
    private _phoneNumber?: string = '';
    private _role?: string = '';

    private roles: Role = {
        ADMIN: 'Admin',
        STUDENT: 'Student',
        CONCEPTOR: 'Conceptor'
    }

    constructor(public role: string) { }

    isValidRole() {
        return this.role in this.roles;
    }

    getRoleName() {
        return this.roles[this.role] ?? 'User';
    }

    showRole(user: Member): string {
        return user.isValidRole() ? user.getRoleName() : 'User';
    }
}
