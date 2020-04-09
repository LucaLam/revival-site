var upComingShows = [{
    date: "Sunday July 13, 2020",
    artist: "The New Band",
    charge: "$15"
},
{
    date: "Friday July 22, 2020",
    artist: "The Old Band",
    charge: "$10"
},

{
    date: "Saturday July 23, 2020",
    artist: "The Band",
    charge: "$15"
},

{
    date: "Sunday July 24, 2020",
    artist: "Comedy Lunch",
    charge: "$20"
}
]

upComingShows.map(show => {

    var div, element, dateNode, artistNode, chargeNode;

    if(show){
        
        //creates row
        div = document.createElement("div");
        div.classList.add("shows-table__row")

        //adds row to overall container
        element = document.querySelector(".shows-table__container");
        element.appendChild(div);

        //creates elements for each category 
        dateNode = document.createElement("div");
        dateNode.classList.add("shows-table__date")

        artistNode = document.createElement("div");
        artistNode.classList.add("shows-table__artist")

        chargeNode = document.createElement("div");
        chargeNode.classList.add("shows-table__charge")

        //adds new node to row container
        div.appendChild(dateNode);
        div.appendChild(artistNode);
        div.appendChild(chargeNode);

        //inserts text into new element
        dateNode.innerText = show.date;
        artistNode.innerText = show.artist
        chargeNode.innerText = show.charge

    }
});


