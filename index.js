// Description
// This is the first try at a common program built by new developers, the todo list. You'll have to use everything we've covered so far in JS to tackle this challenge

// Instructions
// - Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/day-4-todo-lists-template-2phy2?from-embed=&file=/index.js
// - ⚠️ Do not code your solution in CodeSandbox ⚠️ Copy or recreate the javascript files in your project.
// - Create an alert that lists all users, with their ids, names and what city they're from   ✔✔


// - Prompt the user for a user id and then:
// - Display an alert with the username and all the todos titles that belong to that user 


// - Display an alert with the username and all the todos
// titles that belong to that user 

// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure
let users=[
{id:1,Name:"John Bla",City:"Toronto",tittle:"Lorem ipsum dolor sit amet"},
{id:2,Name:"Anna Mo",City:"Tirane",tittle:"Lorem ipsum dolor sit amet"},
{id:3,Name:"Jane Turner",City:"Durres",tittle:"Lorem ipsum dolor sit amet"},
{id:4,Name:"Grent Jack",City:"Lyon",tittle:"Lorem ipsum dolor sit amet"}

]

for(let user of users){

    alert( 'ID:'+ " " + user.id+ " "+" "+ "Name:"+ user.Name +" "+" " + "City:"+" "+ user.City);


}



// Prompt the user for a user id and then:
// - Display an alert with the username and all the todos titles that belong to that user 

let promptedUserID = Number(prompt("Write  the user ID that you are choosing"));

console.log(promptedUserID);


let message1 = "";
for(let user of users){
  if (promptedUserID === users.id)
  message1 = message1 + ("This is  username: " + user.Name )
}





