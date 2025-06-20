class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value
    }




}

const user1 = new user('abu@example', 'abcd')

console.log(user1.password);
