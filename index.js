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

// var submit=document.querySelector("input[type=submit]");
// submit.value="send";

// var list=document.querySelector(".l1");
// list.style.color='red';
// var list1=document.querySelector(".l1:last-child");
// list1.style.color='green';
// var list1=document.querySelector(".l1:nth-child(2");
// list1.style.color='white';

// //QUERYSELECTORALL
// var titles=document.querySelectorAll("title");
// console.log(titles);
// var odd=document.querySelectorAll("li:nth-child(odd)");
// var even=document.querySelectorAll("li:nth-child(even)");
// for(var i=0;i<l.length;i++){
//     odd[i].style.backgroundColor="#ccc";
// }
// Sample item data
var items = [
    { name: "Apple", description: "A fruit that is typically red or green." },
    { name: "Banana", description: "A long, curved fruit with a yellow skin." },
    { name: "Orange", description: "A round citrus fruit with a thick orange skin." },
    { name: "Grapes", description: "Small, juicy fruits that grow in clusters." },
    { name: "Mango", description: "A tropical fruit with a sweet, juicy taste." }
  ];
  
  // Function to display items based on search string
  function displayItems(searchString) {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; // Clear previous results
  
    // Filter items based on search string
    var filteredItems = items.filter(function(item) {
      return (
        item.name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.description.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  
    // Display filtered items
    filteredItems.forEach(function(item) {
      var li = document.createElement("li");
      var name = document.createElement("div");
      var description = document.createElement("div");
  
      name.textContent = item.name;
      description.textContent = item.description;
  
      li.appendChild(name);
      li.appendChild(description);
      itemList.appendChild(li);
    });
  }
  
  // Event listener for input changes
  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function() {
    var searchString = searchInput.value;
    displayItems(searchString);
  });
  