// functions
function calculator(operation) {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    if (operation == "add") {
        return add
    } else if (operation == "subtract") {
        return subtract
    } else {
        return null
    }
}

const addFunction = calculator("add");
const subtractFunction = calculator("subtract");

console.log(addFunction(5, 3)); // Kết quả: 8
console.log(subtractFunction(10, 4)); // Kết quả: 6

// function trả về 1 object
function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

const person = createPerson("Minh", 29)
console.log(person)
// Ôn tập function
//1. Khai báo hàm
function sayHello() {
    console.log("Hello")
}
// 2. Biểu thức hàm ( hàm trong biến) - Function Expression
const sayHello = function () {
    console.log('Hello')
}
// tuy nhieenL một cái tên cũng có thể được cung cấp trong biểu thức hàm
const heloo = function sayHello(){
    
}