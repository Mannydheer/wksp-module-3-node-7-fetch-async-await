# Module 3 - Node day 7 

## ASYNC / AWAIT

### Exercise 0

Rewrite the code from yesterday's exercise to make use of `async`/`await`

### Exercise 1

Rewrite the code from yesterday's exercise to make use of `async`/`await`

### Exercise 2

1. Write a function called `doublesLater` that returns a new Promise that doubles a num after 2 seconds.
2. Here is a promise called `addPromise` that adds 3 numbers, one after another and then resolves to the sum of a number and the doubles of 3 other numbers (10, 20, 30). As you can see, it is quite the hellish situation. _it is also a convoluted and totally fabricated situation..._

```js
function addPromise(num){
    return new Promise(resolve => {
        doubleAfter2Seconds(10)
            .then((a) => {
                doubleAfter2Seconds(20)
                    .then((b) => {
                        doubleAfter2Seconds(30).then((c) => {
                            resolve(num + a + b + c);
                        })
                })
        })
    });
}
```

To get the result, we call the function and `then` console it...

```js
addPromise(10).then((sum) => {
    console.log(sum);
});
```

Rewrite this function to use `async`/`await`.


