/* convert json data to string :-

const jsonString = '{"name": "John", "age": 30, "city": "New York"}'; // this is json data 
const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
console.log(jsonObject.name); // Output: John

*/

// convert JSON object to string :-

/*
const objectToConvert = { name: "Alice", age: 25 };
const jsonStringified = JSON.stringify(objectToConvert); // Convert object to JSON string
console.log(jsonStringified); // Output: {"name": "Alice", "age":25}

console.log(typeof jsonString);*/



/*------------------------------------------------------------------------------------ */


// express.js


const express = require("express");
const app= express();

app.get('/',function(req,res){
    res.send('welcome to my hotel .... we have idli and dosa in our menu')
})

app.get('/idli', (req,res)=>{
    res.send('we have two option in idli, rawa idli and plain idli please enter with slace')
})

app.get('/dosa', (req,res)=>{
    res.send('we have two option in dosa, masala dosa and plain dosa please enter with slace')
})

app.get('/plaindosa', (req,res)=>{
    res.send('ok sir please wait for 15 min your order is prepare')
})

app.get('/masaladosa', (req,res)=>{
    res.send('ok sir please wait for 15 min your order is prepare')
})

app.get('/plainidli', (req,res)=>{
    res.send('ok sir please wait for 15 min your order is prepare')
})

app.get('/rawaidli', (req,res)=>{
    res.send('ok sir please wait for 15 min your order is prepare')
})

app.listen(3000, ()=>{ // if server is dead then show this message
    console.log('listening on port 3000');
    })