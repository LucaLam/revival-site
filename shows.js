//creates row and adds class to row
var div = document.createElement("div");
div.classList.add("shows-table__row")

//creates element and adds class
var dateNode = document.createElement("div");
dateNode.classList.add("shows-table__date")

var artistNode = document.createElement("div");
artistNode.classList.add("shows-table__artist")

var chargeNode = document.createElement("div");
chargeNode.classList.add("shows-table__charge")

//adds new node to row container
div.appendChild(dateNode);
div.appendChild(artistNode);
div.appendChild(chargeNode);

//inserts text into new element
dateNode.innerText = "Sunday July 13, 2020"
artistNode.innerText = "The New Band"
chargeNode.innerText = "$15"

//attaches row to overall container
var element = document.querySelector(".shows-table__container");
element.appendChild(div);
