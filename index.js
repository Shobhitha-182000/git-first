 //GETeLEMENTbYID
//  var text=document.getElementById("hh");
// //  text.innerText="Simple";
// console.log(text.innerText);
// text.style.border='solid black';
// var formId=document.getElementById("form");
//formId.style.border="solid black";


//GETELEMENTBYCLASSNAME

 var list=document.getElementsByClassName("l1");
console.log(list);
console.log(list[1]);
//list[1].textContent='cart 2';
list[2].style.backgroundColor='green';
//we cannot do like this using class we can use id or for loop
// list.style.fontWeight="bold";
// list.style.color='red';

//  var listById=document.getElementById("items");
//  listById.style.fontWeight='Solid';
//  listById.style.color='black';

 //or we can use for loop
 for(let i=0;i<list.length;i++){
    // list[i].style.backgroundColor="#f4f4f4";
    list[i].style.fontWeight='bold';
    list[i].style.color='black';
 }
// hrading.item
// text.innerHTML=<h2>Details </h2>;