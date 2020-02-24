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
