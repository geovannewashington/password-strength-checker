'use strict'

async function fetchJson() {
    const response = await fetch("./jsonStr.json"); // fetch is also async so I need to await it
    if (!response.ok) throw new Error("Failed to fetch Json Data");
    return await response.json();
}

fetchJson()
    .then((response) => {
        console.log("Sucessfully fetched the JSON file: ", response);
    })
    .catch((err) => {
        console.error("An error occured: ", err.message);
    });

