// Exercise 2
// // ----------

// 1. Write a function called `doublesLater` that returns a new Promise that doubles a num after 2 seconds.
// 2. Here is a promise called `addPromise` that adds 3 numbers, one after another and then resolves to the sum of a number and the doubles of 3 other numbers (10, 20, 30). As you can see, it is quite the hellish situation. _it is also a convoluted and totally fabricated situation..._

// ```js
// function addPromise(num){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10)
//             .then((a) => {
//                 doubleAfter2Seconds(20)
//                     .then((b) => {
//                         doubleAfter2Seconds(30).then((c) => {
//                             resolve(x + a + b + c);
//                         })
//                 })
//         })
//     });
// }
// ```

// To get the result, we call the function and `then` console it...

// ```js
// addPromise(10).then((sum) => {
//     console.log(sum);
// });
// ```

// Rewrite this function to use `async`/`await`.



// const newPauseFunction = (sec) => {
//     return new Promise(function(resolve) {
//         console.log(`${sec}s pause`);
//         setTimeout(() => resolve('resolve'), sec * 1000);
//     });
// }



// const doublesLater = async(num) {
//     const double = await new Promise(resolve =>{
//         setTimeout(() => {
//             return resolve(num * 2)

//         }, 2000);
//       }) 
// }
doublesLater = (num) => {
//promise is waiting for something, it is asynchrnous'
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(num * 2)

        }, 2000);
    })
}






const addPromise = async (num) => {
    try {
    let firstNum = await doublesLater(10)
    let secondNum = await doublesLater(20)
    let thirdNum = await doublesLater(30)
    console.log(num + firstNum+secondNum+thirdNum)
    } catch(err) {
        console.log(err)

    }   
}
addPromise(10);