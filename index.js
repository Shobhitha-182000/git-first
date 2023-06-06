 //GETeLEMENTbYID
//  var text=document.getElementById("hh");
// //  text.innerText="Simple";
// console.log(text.innerText);
// text.style.border='solid black';
// var formId=document.getElementById("form");
//formId.style.border="solid black";
// text.innerHTML=<h2>Details </h2>;

//GETELEMENTBYCLASSNAME====================//

//  var list=document.getElementsByClassName("l1");
// console.log(list);
// console.log(list[1]);
//list[1].textContent='cart 2';
// list[2].style.backgroundColor='green';
//we cannot do like this using class we can use id or for loop
// list.style.fontWeight="bold";
// list.style.color='red';

//  var listById=document.getElementById("items");
//  listById.style.fontWeight='Solid';
//  listById.style.color='black';

 //or we can use for loop
//  for(let i=0;i<list.length;i++){
//     // list[i].style.backgroundColor="#f4f4f4";
//     list[i].style.fontWeight='bold';
//     list[i].style.color='black';
//  }

//GETELEMENTBYTagNAME====================// 

// var head=document.getElementsByTagName("h1");
// console.log(head);

//QueySelector===============//
var formId=document.querySelector("#form");
formId.style.backgroundColor='green';

var formTag=document.querySelector("input");
formTag.value='hello wolrld';

var submit=document.querySelector("input[type=submit]");
submit.value="send";

var list=document.querySelector(".l1");
list.style.color='red';
var list1=document.querySelector(".l1:last-child");
list1.style.color='green';
var list1=document.querySelector(".l1:nth-child(2");
list1.style.color='white';

//QUERYSELECTORALL
var titles=document.querySelectorAll("title");
console.log(titles);
var odd=document.querySelectorAll("li:nth-child(odd)");
var even=document.querySelectorAll("li:nth-child(even)");
for(var i=0;i<l.length;i++){
    odd[i].style.backgroundColor="#ccc";
}