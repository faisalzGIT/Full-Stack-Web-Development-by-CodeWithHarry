async function doubleTheNumbs(numbers) {
    const promises = numbers.map(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    });

    // Await all the promises to resolve
    return Promise.all(promises);
}

async function processNumbs() {
    const numbs = [1, 2, 3, 4];
    
    // Await the result of doubleTheNumbs
    const result = await doubleTheNumbs(numbs);
    console.log(result); // [2, 4, 6, 8]
}

processNumbs();