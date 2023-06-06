//TRAVERSING OF DOM================//

var child=document.querySelector('#items');
//parent node
// console.log(child.parentNode);
// child.parentNode.style.backgroundColor='#f4f4f4';
// console.log(child.parentNode.parentNode.parentNode);

//PARENT ELEMENT==========
//  console.log(child.parentElement);
//  child.parentElement.style.backgroundColor='#f4f4f4';
//console.log(child.parentElement.parentElement.parentElement);

//CHILD NODEs=======
//console.log(child.childNodes);//in this white space it will take so dont use much

//CHILDERN========
// console.log(child.children[1]);
// child.children[1].style.backgroundColor='#f4f4f4';

//FIRSTCHILD====
// console.log(child.firstElementChild);
// console.log(child.nextElementSibling);
// child.firstElementChild.textContent="cart 1";

//LastElemet
// console.log(child.lastElementChild);

//CREATE ELEMENT
//creating div tag
var div=document.createElement("div");
//add class
div.className="hello";
//add id
div.id="hello1";
//add attributes
div.setAttribute('title','hello world');
//adding element;
var element=document.createTextNode("first div");
div.appendChild(element);
//inserting this element on heading
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(div,h1);
console.log(div);

// var title=document.querySelector('.title');
// var card card-body=document.querySelector('div')

 


