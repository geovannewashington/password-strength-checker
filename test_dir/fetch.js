'use strict'

async function parseJsonFile() {
    const response = await fetch('./common-passwords.json');
    if (!response.ok) throw new Error("Failed to fetch JSON");
    return await response.json();    
}

parseJsonFile()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });