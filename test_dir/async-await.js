'use strict'

// there is also a third method, using the keywords async/await
// this makes async code look like sync code

async function fetchData() {
    // prefixing a function with the async keyword, makes it return a promise automatically
    return 'Data fetched sucessfully!';
}

async function main() {
    const data = await fetchData(); // waits until fetchData completes
    console.log(data);
}

main();