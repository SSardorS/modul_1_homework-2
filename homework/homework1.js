class Person{
    constructor(name, surname, adress, phoneNumber){
       this.name = name;
       this.surname = surname;
       this.adress = adress;
       this.phoneNumber = phoneNumber; 
    }
}

class Student extends Person{
    constructor(name, surname, adress, phoneNumber, studentClass){
        super(name, surname, adress, phoneNumber);
        this.studentClass = studentClass;
    }
}

const student = new Student("Sardor", "Sodiqjonov", "Xuvaydo 2-uy", "+998909078910", "9B");

console.log(student);