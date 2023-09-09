class Person{
    constructor(name, surname, adress, phoneNumber){
       this.name = name;
       this.surname = surname;
       this.adress = adress;
       this.phoneNumber = phoneNumber; 
    }
}

class Teacher extends Person{
    constructor(name, surname, adress, phoneNumber, subject){
        super(name, surname, adress, phoneNumber);
        this.subject = subject;
    }
}

const teacher = new Teacher("Sardor", "Sodiqjonov", "Xuvaydo 2-uy", "+998909078910", "Math");

console.log(teacher);