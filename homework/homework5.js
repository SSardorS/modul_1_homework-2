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

class Teacher extends Person {
    constructor(name, surname, adress, phoneNumber, studentClass, teacherName, teacherSurname){
        super(name, surname, adress, phoneNumber, studentClass,);
        this.teacherName = teacherName;
        this.teacherSurname = teacherSurname;
    }
}

class Subject extends Teacher{
    #subjectName;

    constructor(name, surname, adress, phoneNumber, studentClass, teacherName, teacherSurname, subject){
        super(name, surname, adress, phoneNumber, studentClass, teacherName, teacherSurname);
        this.setSubJect(subject);
    }

    setSubJect(subject){
        this.#subjectName = subject;
    }

    getSubJect(){
        return this.#subjectName;
    }
} 

class School extends Teacher{
    constructor(schoolName, schoolAdress, name, surname, adress, phoneNumber, studentClass, teacherName, teacherSurname, subject){
        super(name, surname, adress, phoneNumber, studentClass, teacherName, teacherSurname, subject);
        this.schoolName = schoolName;
        this.schoolAdress = schoolAdress;
    }

    setObject(schoolName, schoolAdress, name, surname, adress, phoneNumber, studentClass, teacherName, teacherSurname, subject){
        if(schoolName!=null) this.schoolName = schoolName;
        if(schoolAdress!=null) this.schoolAdress = schoolAdress;
        if(name!=null) super.name = name;
        if(surname!=null) super.surname = surname;
        if(adress!=null) super.adress = adress;
        if(phoneNumber!=null) super.phoneNumber = phoneNumber;
        if(studentClass!=null) super.studentClass = studentClass;
        if(teacherName!=null) super.teacherName = teacherName;
        if(teacherSurname!=null) super.teacherSurname = teacherSurname;
        if(subject!=null) super.subject = subject;
    }
}

const school = new School("12-maktab", "Mevazor","Sardor","Sodiqjonov", "Keles","+998909078910","9A", "Saodat","Rahimova","Math");

school.setObject("13-maktab", null,null,null, "Xuvaydo","+998909078910","11B", null,null,"English language");
console.log(school); 

