// ôn tập về function
// 1. function declaration
function greet(name) {
    return `Hello, ${name}`
}
console.log(greet("Minh"))
// 2. function Expression
var greet = function (name) {
    return `Hello , ${name}`
}
console.log(greet('Nguyên'))
// 3. Arrow function
const greet = (name) => {
    return `Hello, ${name}`
}
/*
    bài tập
*/
// viết hàm tính tổng
function add(a, b) {
    return a + b
}
var add = function (a, b) {
    return a + b
}
const add = (a, b) => {
    return a + b
}
// hàm tìm số lớn nhất trong mảng
function findMax(arr) {
    return Math.max(...arr)
}
var findMax = function (arr) {
    return Math.max(...arr)
}
const findMax = (arr) => {
    return Math.max(...arr)
}
