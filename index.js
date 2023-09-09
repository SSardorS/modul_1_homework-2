// const person1 = {
//     name: "John",
//     age: 35,
//     city:"Delhi",
//     gender:"male"
// }

// const person2 = {
//     name: "Dessi",
//     age: 20,
//     city:"Pune",
//     gender:"fmale"
// }

function Person(name, age, city, gender){
    this.name = name;
    this.age = age;
    this.city = city;
    this.gender = gender;

    this.sleep= () =>{
        console.log(this.name+" Sleep");
    }
}

const person1 =new Person("Sardor", 22,"Tashkent","male");

console.log(person1);

person1.sleep();