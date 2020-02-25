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
function addKeyAndValue(arr, key, value){

    let newArr = [];

    newArr.push(
        arr = ({
            name: "",
            key: key, 
            value: value
        })
    );

    console.log(newArr);
}
//test
addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);


/*
Ex 3. Write a function called valTimesIndex which accepts an array of numbers and
returns a new array with each value multiplied by the index it is at in the array:
*/
function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx;
    })
}
//test
valTimesIndex([1,2,3]);

/*
Ex. 4
Write a function called extractKey which accepts two parameters, 
an array of objects, and the name of a key and returns an array 
with just the values for that key:
*/
