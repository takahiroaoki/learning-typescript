function fetchFromServer(id: string): Promise<{ success: boolean }> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ success: true })
        }, 100);
    });
}

async function asyncFunc(): Promise<string> {
    const result = await fetchFromServer('111');
    return `The result: ${result.success}`;
}

// using async
(async () => {
    const result = await asyncFunc();
    console.log(result);
})();

// using promise
asyncFunc().then(result => console.log(result));