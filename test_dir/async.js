function handleTasks(callback) {
    callback();
}

function task1(callback) {
    setTimeout(() => {
        console.log('Task 01 completed');
        callback();
    }, 1500); // -> to simulate a task that takes time to finish we're using the setTimeout function

}

function task2(callback) {
     setTimeout(() => {
        console.log('Task 02 completed');
        callback();
    }, 1850); // -> to simulate a task that takes time to finish we're using the setTimeout function

}

function task3(callback) {
    setTimeout(() => {
        console.log('Task 03 completed');
        callback();
    }, 1000); // -> to simulate a task that takes time to finish we're using the setTimeout function

}

function task4(callback) {
    setTimeout(() => {
        console.log('Task 04 completed');
        callback();
    }, 2000); // -> to simulate a task that takes time to finish we're using the setTimeout function

}

handleTasks(() => {
    task1(() => {
        task2(() => {
            task3(() => {
                task4(() => {
                    console.log('All tasks completed!');
                });
            });
        });
    });
});

