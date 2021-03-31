// console.log("1")
// setTimeout(() => {
//     console.log("set time out 1")
// }, 1);
// setTimeout(() => {
//     console.log("set time out 2")
// }, 0);
// const a = Promise.resolve("promise")
// a.then((data) => {
//     console.log(data)
// })
// console.log("2")


setTimeout(() => console.log("timeout"));

Promise.resolve()
    .then(() => console.log("promise"));

console.log("code");