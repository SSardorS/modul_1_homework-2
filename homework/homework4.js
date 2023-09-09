class Subject{
    #subjectName;

    setSubJect(subject){
        this.#subjectName = subject;
    }

    getSubJect(){
        return this.#subjectName;
    }
} 

const subject = new Subject();

subject.setSubJect("Math");

console.log(subject.getSubJect());