// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
var createCounter = function (init) {
    let presentCount = init;
    function increment() {
        return ++presentCount;
    }
    function decrement() {
        return --presentCount;
    }
    function reset() {
        return (presentCount = init)
    }
    return { increment, decrement, reset }
}
// Tạo một đối tượng Counter với giá trị khởi tạo là 5
const counter = createCounter(5);
console.log(counter.increment())
console.log(counter.decrement())
