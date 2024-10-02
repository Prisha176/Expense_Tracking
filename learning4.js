console.log("");//printing output on the screen
console.log('');
console.log(``);

// window.alert("");//pop ups 
// window.alert('');
// window.alert(``);

document.getElementById("theh1").textContent = " hello";//change the text content of a html file    
document.getElementById("thep").textContent = " hello";

let age = 20;
let name = `prsa`;
console.log(typeof(age));
console.log(`You are ${age} years old`);
console.log(`${name}`);
document.getElementById("theh2").textContent = name;

//how to accept user input
// 1) easy way = window prompt//window prompt accepts the input in the string datatype
let username;
//username = window.prompt("The username is: ");
console.log(username);
//2) professional way = html textbox
document.getElementById("subhere").onclick = function()
{
    username= document.getElementById("text").value;
   // console.log(username);
   document.getElementById("theh1").textContent = ` hii ${username}`;
}

//type conversion
let x = "pizza";
let y = "pizza";
let z= "pizza";
x = Number(x);// explicit type conversion from string to number
y = String(y);
z = Boolean(z);
console.log(x , typeof(x)); 
console.log(y , typeof(y));
console.log(z , typeof(z));
//NaN = not a number

const pi = 3.14;//constant number 
let cir;
document.getElementById("heresub").onclick = function()
{
    radius = document.getElementById("hereinput").value ;
    radius = Number(radius);
    cir = 2 * pi * radius;
    document.getElementById("theh3").textContent = cir + "cm"; // the plus sign indicates the concatenation of the strings 
}

//random number generation
let randomnum = Math.floor(Math.random() * 6);//random number b/w 0 and 5 without decimal part will be generated 
let randomnum2 = Math.floor(Math.random() * 6) +1 ; // b/w 1 and 6 will be generated 
//let randomnum3 = Math.floor(Math.random() * (max-min)) +min; //general formula
//let r = Math.floor(Math.random()* 100) +50; 
console.timeLog(randomnum);
//console.log(r);


//to check if a radio button or ckeckbox is selected 
const check = document.getElementById("check");
const radio1 = document.getElementById("radio1");
//document.getElementById("forcheckbox").textContent =" he";
//const forcheckbox = document.getElementById("forcheckbox");
document.getElementById("mys").onclick = function()
{
    document.getElementById("forcheckbox").textContent ="he";

   if(check.checked)
   {
    document.getElementById("forcheckbox").textContent = " you are subscribed";
  //  console.log("you are subscribed");
   }
   if(radio1.checked)
   {
    forcheckbox.textContent = "mastercard is selected ";
   }

}

 let pname = "prisha hadvani";
console.log(pname.startsWith(" "));//as the pname does not starts with a space startsWith will return false
console.log(pname.endsWith("a"));//as the pname ends with a therefore endsWith return true
console.log(pname.includes("a"));//returns true 
console.log(pname.replaceAll("a","m"));//will replace all a with m
console.log(pname.padStart(20,"h"));//first argument is the length , pad the start of the string with the given character
//similarly padEnd works
let lastchar= pname.slice(-1);//-1 means the last char, -2 will return ni, -3 will return ani ...negative sign starts from the end
console.log(lastchar);
//more dynamic way of slicing 
let firstname = pname.slice(0, pname.indexOf(" "));
let lastname = pname.slice(pname.indexOf(" ")+ 1);
console.log(firstname);
console.log(lastname);

//method chaining
let username1;
username1 = window.prompt(" The user name is:");
username1 = username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase();
console.log(username1);