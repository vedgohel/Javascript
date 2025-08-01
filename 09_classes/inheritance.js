class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.username = username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new  course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai" , "chai@Teacher.com" , "123")

chai.addCourse()

const masalachai = new User("masalaChai")

masalachai.logMe()

console.log(chai === Teacher);
