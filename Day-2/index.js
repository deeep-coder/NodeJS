
/*function add(a,b){  
    return a+b;
}*/

/*var add = function(a,b){ // add naam ka variable banaya and usme function store kar diya
    return a+b;
}  */

/*var add = (a,b) => {return a+b}; //arro function

 (function(){   // function which run immidiately
    console.log('HEYYY DEEPP !!');
 })();

var result = add(2,3);
console.log(result);  */




/* --------------------------------------------------*/

// callback functions
/*

type-1

function callback(){ 
    console.log("Deep is calling callback function");
}

const add=function(a,b,callback){ //main function
    var result=a+b;
    console.log("result is - "+result); //main function work complete
    callback(); // calling callback function 
}

add(2,3,callback)*/


/* type - 2

const add=function(a,b,deep){ 
    var result=a+b;
    console.log("result is - "+result); 
    deep();
};

add(2,3,function(){
    console.log("task is completed");
});

*/


/* type-3 

const add=function(a,b,deep){ 
    var result=a+b;
    console.log("result is - "+result); 
    deep();
};

add(2,3 ,() => console.log("add completed"));





------------------------------------------------------------*/


/* OS library 

var fs = require("fs");
var os = require("os");

var user= os.userInfo();
console.log(user);

fs.appendFile('greeting.txt',"Hi " + user.username +"! \n",()=>{
    console.log('file is created')
});

--------------------------------------------------------------------*/



/* import file in node js  

const notes = require('./notes.js')
console.log("index file  loaded");


var age=notes.age;
var result=notes.addNumber(age,10);
console.log(age);
console.log('result is now  - '+ result);


-----------------------------------------------------------------*/

/* lodash package */

const _ = require('lodash'); //_ is the convention 

var data =["person","person","name",1,2,1,2,1,34,55,"name","age"]

var filter = _.uniq(data);
console.log(filter);

//another uses 
console.log(_.isString("Hey Deep"));
console.log(_.isString(9));
console.log(_.isString(true)); //because it is boolean
console.log(_.isString(false));