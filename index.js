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
{id:1,Name:"John Bla",City:"Toronto"},
{id:2,Name:"Anna Mo",City:"Tirane"},
{id:3,Name:"Jane Turner",City:"Durres"},
{id:4,Name:"Grent Jack",City:"Lyon"}

]

for(let user of users){

    alert( 'ID:'+ " " + user.id+ " "+" "+ "Name:"+ user.Name +" "+" " + "City:"+" "+ user.City);


}


let prove=prompt("What's your id?")

for (prove of users ){

    console.log(users[0])



}



