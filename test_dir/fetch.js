'use strict'

async function parseJsonFile() {
    const response = await fetch('./common-passwords.json');
    console.log(response.body); // -> Response objects returned by fetch('url')
    if (!response.ok) throw new Error("Failed to fetch JSON");
    return await response.json(); // -> since .json() is async we need to await for it 
}

parseJsonFile()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
