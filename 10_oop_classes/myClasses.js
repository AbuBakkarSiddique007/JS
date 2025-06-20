class user {
    constructor(name, mail, password) {
        this.name = name
        this.mail = mail
        this.password = password
    }
    encryptPassword() {
        return `${this.password}abcd`
    }
    changeUsername() {
        return `${this.name.toUpperCase()}`
    }
}

const user1 = new user('abu bakkar siddique', 'abu@example.com', '12345')

console.log(user1.encryptPassword());
console.log(user1.changeUsername());



// Behind the scene:
// function user(name, mail, password) {
//     this.name = name
//     this.mail = mail
//     this.password = password
// }

// user.prototype.encryptPassword = function () {
//     return `${this.password}abcd`
// }

// user.prototype.changeUsername = function () {
//     return `${this.name.toUpperCase()}`
// }

// const user1 = new user('riki ahmed', 'riki@example.com', '12345')
// console.log(user1);
// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())
