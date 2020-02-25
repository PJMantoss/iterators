/*
Ex 1. Write a function called printFirstAndLast which accepts an array (of objects)
and console.logs a new string with the first character and the last character of each value.
*/
function printFirstAndLast(arr){
    for (let i=0; i<arr.length; i += 1){
        console.log(arr[i].charAt(0).concat(arr[i].charAt(arr[i].length - 1)));
    }
}

//test
printFirstAndLast(['awesome','example','of','forEach']); // ae, ee, of, fh

/*
Ex 2. Write a function called addKeyAndValue which accepts three parameters, an array (of objects),
 a key and a value. This function should return the array of objects after each key and value have 
 been added to each object in the array.
*/
