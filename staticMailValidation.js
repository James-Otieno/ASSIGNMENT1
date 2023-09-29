class Validation {

    static validateEmail(email) {
        const emailcharacter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
             return emailcharacter.test(email);
    }

    static validatePassword(password) {
        return password.length >= 8;
    }
}

const email = "jemo9434@gmail.com";
const password = "Admin@112.";

console.log(`Email is valid: ${Validation.validateEmail(email)}`);
console.log(`Password is valid: ${Validation.validatePassword(password)}`);
