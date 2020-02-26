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
