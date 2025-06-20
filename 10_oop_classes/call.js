function setUserName(username) {
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    // this.username = username
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

let riki = new createUser("abu bakkar siddique", "abu@gmail.com", "12345")

console.log(riki);
