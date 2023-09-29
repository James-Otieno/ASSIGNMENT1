class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    showPersonDetails() {
        return `Name: ${this.name}\nAge: ${this.age}\nAddress: ${this.address}`;
    }
}

class Student extends Person {
    constructor(name, age, address, studentId) {
        super(name, age, address);
        this.studentId = studentId;
    }

    showStudentDetails() {
        return `${super.showPersonDetails()}\n
             Student ID: ${this.studentId}`;
    }
}

class Employee extends Student {
    constructor(name, age, address, employeeId, position) {
        super(name, age, address, employeeId);
        this.position = position;
    }

    showEmployeeDetails() {
        return `${super.showStudentDetails()}\nEmployee ID: ${this.employeeId}\nPosition: ${this.position}`;
    }
}


            const employee = new Employee("james ochieng", 21, "kisumu", "msu-3056", "Ml architecturer");

                 console.log(employee.showEmployeeDetails());
