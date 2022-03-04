//Promises in JavaScript

/*The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value.*/
/*
1. A “producing code” that does something and takes time. For instance, 
some code that loads the data over a network.
2. A “consuming code” that wants the result of the “producing code” once it’s ready. 
Many functions may need that result.
3. A promise is a special JavaScript object that links the “producing code” and 
the “consuming code” together. 
The “producing code” takes whatever time it needs to produce the promised result, 
and the “promise” makes that result available to all of the subscribed code when 
it’s ready.
*/

/* 3 States - Pending, Resolved, Rejected*/

// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) { /* code if successful */ },
//   function (error) { /* code if some error */ }
// );

/* Catch() -  catch() is invoked when a promise is either rejected or some error 
has occurred in execution. It is used as an Error Handler whenever at any step 
there is a chance of getting an error.*/

/* Finally() -  It will execute whether promise is rejected or fulfilled*/

//Benefits of Promises 
/*
1. Improves Code Readability
2. Better handling of asynchronous operations
3. Better flow of control definition in asynchronous logic
4. Better Error Handling
*/

/* Use Cases*/

// Advantage over Callbacks chaing

// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function(result) { // (**)

//   alert(result); // 1
//   return result * 2;

// }).then(function(result) { // (***)

//   alert(result); // 2
//   return result * 2;

// }).then(function(result) {

//   alert(result); // 4
//   return result * 2;

// });

/*------------------------------------------------------------------------------------------------*/

// Promise.all()

// let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests)
//   .then(responses => {
//     // all responses are resolved successfully
//     for(let response of responses) {
//       alert(`${response.url}: ${response.status}`); // shows 200 for every url
//     }

//     return responses;
//   })
//   // map array of responses into an array of response.json() to read their content
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   // all JSON answers are parsed: "users" is the array of them
//   .then(users => users.forEach(user => console.log(user.name)));

/*----------------------------------------------------------------------------------------------*/

// Promise.allSettled()
// Promise.allSettled just waits for all promises to settle, regardless of the result. 
// The resulting array has:
// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.

// Promise.allSettled([
//   Promise.resolve(33),
//   new Promise(resolve => setTimeout(() => resolve(66), 0)),
//   Promise.reject(new Error('an error'))
// ])
// .then(values => console.log(values));

/*----------------------------------------------------------------------------------------------*/

// Promise.race()
// waits only for the first settled promise and gets its result (or error).

// Promise.race([
//   // new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log); // 1

/*----------------------------------------------------------------------------------------------*/

// Promise.any()
// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. 
// If all of the given promises are rejected, then the returned promise is rejected with AggregateError – 
// a special error object that stores all promise errors in its errors property.

const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1];

Promise.any(promises).then((value) => console.log(value));