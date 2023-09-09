class Person{
    #name;
    constructor(name, age, city, gender){
        if(this.constructor == Person)
            throw new Error("Person clasdan object olish mumkin emas")

        this.#name = name;
        this.age  = age;
        this.city = city;
        this.gender = gender;
    }

    setName(name){
        this.#name=name;
    }

    getName(){
        return this.#name;
    }

    sleep(){
        console.log(this.name+" Sleep");
    }

    display(){
        throw new Error("Display methodi hali yozilmagan");
    }
}

class Student extends Person{
    #studentClass;

    constructor(name, age, city, gender, studentClass){
        super(name, age, city, gender);

        this.#studentClass = studentClass;
    }

    display(){
        console.log("Person classi icidagi display abstrack clasi ozgartirildi funksiyasi")
    }
}

const person1 = new Student("Sardor",22, "Tashkent", "male", "5A");
console.log(person1);

person1.setName("Sanjar");

console.log(person1.getName());

person1.display();