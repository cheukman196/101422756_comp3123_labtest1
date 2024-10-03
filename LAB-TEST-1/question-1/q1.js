let lowerCaseWords = (input) => {
    return new Promise ((resolve, reject) => {
        // resolve / reject if input is or is not Array type
        if(!Array.isArray(input)){
            reject("Input array is not of array type.");
        } else {
            // filter non-string & convert all strings to lowercase
            result = input.filter(item => typeof item == "string")
                            .map(item => item.toLowerCase());
            resolve(result);
        }
    })
}

// function to test with printing & error handling
function lowerCaseWordsTester (input) {
    lowerCaseWords(input)
        .then(output => console.log(output))
        .catch(err => console.error(err));
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const notArray = null;

lowerCaseWordsTester(mixedArray);
lowerCaseWordsTester(notArray);
