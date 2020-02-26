//Part 1
//Use the following object for questions in this part:
var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

//Q1. Write a function called printEmails which console.log's each email for the users.
  function printEmails(){
      for (let i=0; i < users.length; i++){
          let emailAdd = users[i].email;
          console.log(emailAdd);
      }
  }

//OR

function printEmails(){
      users.forEach(function(obj){
          console.log(obj.email)
      })
  }

 //test
  printEmails();
  // larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com

//Q2. Write a function called printHobbies which console.log's each hobby for each user.

function printHobbies(){
    users.forEach(function(obj){
        obj.hobbies.forEach(function(hobby){
            console.log(hobby);
        })
    })
}


printHobbies();
// "Fishing",
// "Sailing",
// "Hiking",
// "Swimming",
// "Biking",
// "Hiking",
// "Golf",
// "Cooking",
// "Archery",
// "Tennis",
// "Biking",
// "Archery",
// "Volunteering",
// "Biking",
// "Coding",

//Q3. Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
function findHometownByState(state){
    return users.find(function(v){
             v === state;
             return users;
    })
}

//test
findHometownByState('CA');
/*/
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/*/

//Q4. Write a function called allLanguages which returns an array of all of the unique values
function allLanguages(){
    return users.reduce(function(accu,val){
        val.favoriteLanguages.forEach(function(lang){
            if(!accu.includes(lang)){
                accu.push(lang);
            }
        })
        return accu;
    }, []).sort();
}

//test
allLanguages();
// ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]

//Q5. Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
function hasFavoriteEditor(editor){
    return users.some(function(val){
        return val.favoriteEditor === editor;
    })
}

//test
hasFavoriteEditor('VS Code'); // true

//Q6. Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
function findByUsername(stringData){
    return users.find(function(val){
        return val.username === stringData;
    })
}

//test
findByUsername('david');
/*
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
*/

//Part 2
/*Q1.
Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and
the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
*/
function vowelCount(str){
    let newArr = str.split('').filter(function(letter){
        return ["a","e","i","o","u"].includes(letter);
    });

    return newArr.reduce(function(a,v){
        if(a[v] !== undefined){
            a[v]++;
        } else {
            a[v] = 1;
        }
        return a;
    }, {})
}
//test
vowelCount('incredible');
// {i:2, e: 2}
vowelCount('awesome');
// {a:1, e:2, o:1}


/*Q2
Write a function called removeVowels that accepts a string and returns 
an array of each character that is not a vowel (y should not 
count as a vowel for this function).
*/
