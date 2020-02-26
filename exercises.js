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
    
    arr.forEach(function(val, idx, array){
            val[key] = value;
            console.log(val);
    })

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
function extractKey(arr, key){
    return arr.map(function(obj){
        return obj[key];
    })
}

//test
extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
// ["Elie", "Tim", "Matt"]

/*
Ex 5. Write a function called filterLetters which accepts an array of letters 
and returns the number of occurrences of a specific letter. 
This function should be case insensitive
*/
function filterLetters(arr, letter){
    let count = 0;
    let newArr = arr.map(function(val){
        return val.toLowerCase()
    });

    newLetter = letter.toLowerCase();

     newArr.filter(function(val){
        if(val === letter){
            count++;
        }
    })
    return count;
}
//test
filterLetters(["a","a","b","c","A"], "a"); // 3

/*Ex 6.
Write a function called filterKey which accepts two parameters, an array of objects, 
and the name of a key and returns an array with only those objects which have truthy values for that key:
*/
function filterKey(arr, key){
    return arr.filter(function(obj){
        if(obj[key] === true){
            console.log(obj);
        };
    })
}
//test
filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")
// [{name: "Tim", isInstructor:true, isHilarious:true}]


//REDUCE
/*
Ex. 1 Write a function called
extractKey which accepts two parameters, an array of objects, 
and the name of a key and returns an array with just the values for that key:
*/
function extractKey(arr, key){
     return arr.reduce(function(acc,obj){

         return acc.concat(obj[key]);
    }, [])
}
//test
extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
// ["Elie", "Tim", "Matt"]

/*
Ex 2. Write a function called filterLetters which accepts an array of letters and
returns the number of occurrences of a specific letter. This function should be case insensitive
*/
