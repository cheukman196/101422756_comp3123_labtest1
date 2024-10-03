let resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({"message": "Promise resolved in 500ms."});
        }, 500);
    });   
}

let rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject({"error": "Promise rejected in 500ms."});
        }, 500);
    });   
}

resolvedPromise()
    .then(message => console.log(message))
    .catch(err => console.error(err));

rejectedPromise()
    .then(message => console.log(message))
    .catch(err => console.error(err));