'use strict'

/* better than callbacks, promise based */

// se we use the constructor of promise and assign it to a variable
// if gets a callback function as the argument, and the callback function it self 
// contains two parameters (resolve and reject) that are utilized to control the return of the promise
const myPromise = new Promise((resolve, reject) => {
    // resolve means -> I sucessfully fetched the data for instance
    // whereas reject means -> oops! an error occured...
    resolve('data successfully retrieved!');
});

// then we use the .then and .catch methods when calling the function

myPromise
    .then((data) => {
        console.log(data); // -> prints: data sucessfully retrieved!
    })
    .catch((error) => {
        // -> this will be logged if an error ocorrus
        console.error("An error occured while fetching data: ", error);
    });

/*
myPromise
    .then(console.log('sucess'))
    .catch();
*/

// NOTE: besides resolved and rejected there is also the pending state of a promise, it's 
// essentially when it's working on it