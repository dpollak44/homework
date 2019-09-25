(function () {
    'use strict';

    class Student {
        constructor(first, last, age, grade) {
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;
        }
    }

    const students = [new Student('John', 'Doe', 25, 100), new Student('Jane', 'Doe', 23, 98), new Student('Bibi', 'Netanyahu', 72, 85)];

    function printStudents(firstLast, ...args) {

        if (firstLast === 1) {
            for (let arg of args) {
                const entries = Object.entries(arg);
                entries.forEach(keyValue => {
                    console.log(keyValue[1]);
                });
            }
        }
        else {
            for (let arg of args) {
                console.log(arg.last, arg.first, arg.age, arg.grade);

            }
        }
    }


    function changeStudent(student) {
        const entry = Object.entries(student);
        console.log(entry);
        const [first, last, ...rest] = entry;
        console.log(first, last, ...rest);
        const newEntry = { last, first, ...rest };
        console.log(newEntry);
    }

    printStudents(0, ...students);
    changeStudent(students[0]);




}());