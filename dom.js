//TRAVERSING OF DOM================//

// var child=document.querySelector('#items');
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
// var div=document.createElement("div");
//add class
// div.className="hello";
//add id
// div.id="hello1";
//add attributes
// div.setAttribute('title','hello world');
//adding element;
// var element=document.createTextNode("first div");
// div.appendChild(element);
//inserting this element on heading
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// container.insertBefore(div,h1);
// console.log(div);

 var form=document.getElementById("addForm");
 var ul=document.getElementById("items");
 var filter=document.getElementById("filter");
//to perform action
form.addEventListener("submit",create);
//to perform delete action
ul.addEventListener("click",removeItems);
 //to search items 
 filter.addEventListener("keyup",filterFunction);

 //TO ADD ITEM
 function create(c){
    c.preventDefault();
    
    //to get element by input
    var input=document.getElementById("item").value;

    //to create new list to get input from after submit that will display into list
        var li=document.createElement("li");
        li.className="list-group-item";
        li.appendChild(document.createTextNode(input));
        ul.appendChild(li);
    //to add delete button
        var deleteButton=document.createElement("Button");
        deleteButton.className="btn btn-danger btn-sm float-right delete";
        deleteButton.appendChild(document.createTextNode("X"));
        li.appendChild(deleteButton);
        ul.appendChild(li);
    //to add edit button 
    var edit=document.createElement("button");
    edit.className="btn btn-danger btn-sm float-right delete";
    edit.appendChild(document.createTextNode("edit"));
    li.appendChild(edit);
    ul.appendChild(li);
 }

    //TO REMOVE ITEM
function removeItems(c){
    if(c.target.classList.contains("delete")){
        if(confirm("Are you sure??")){//pop up msg
            var deleteAction=c.target.parentElement;
            ul.removeChild(deleteAction);
        }    
    }
}

//FILTER OR TO SEARCH
function filterFunction(c){
    //convert to lowerCase
    var text=c.target.value.toLowerCase();
    //get list of items
    var itemLsit=ul.getElementsByTagName("li");
    //converting htmlcollections to array
    Array.from(itemLsit).forEach(function(i){
        var itemName=i.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            i.style.display='bold';
        }else{
            i.style.display='none';
        }
    })
}

 


