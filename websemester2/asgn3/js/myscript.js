var logoImage = {
    alt: "Toronto Maple Leafs",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/512px-Toronto_Maple_Leafs_2016_logo.svg.png",
    height: 200
};

var players = [{number: "22", nationCode: "DK", player: "Nikita Zaitsev", position: "D", age: 25},
                {number: "25", nationCode: "US", player: "James van Riemsdyk", position: "LW", age: 28},
                {number: "26", nationCode: "DK", player: "Nikita Zaitsev", position: "RW", age: 23},
                {number: "18", nationCode: "US", player: "Ben Smith", position: "RW", age: 29},
                {number: "44", nationCode: "CA", player: "Morgan Rielly", position: "D", age: 23},
                {number: "29", nationCode: "SE", player: "William Nylander", position: "C", age: 21},
                {number: "35", nationCode: "US", player: "Curtis McElhinney", position: "C", age: 34},
                {number: "34", nationCode: "US", player: "Auston Matthews", position: "C", age: 19},
                {number: "15", nationCode: "CA", player: "Matt Martin", position: "C", age: 19}, 
                {number: "16", nationCode: "CA", player: "Mitchell Marner", position: "RW", age: 20},
                {number: "-", nationCode: "CA", player: "Patrick Marleau", position: "L", age: 25},
                {number: "52", nationCode: "SK", player: "Martin Marincin", position: "L", age: 33},
                {number: "19", nationCode: "CA", player: "Joffrey Lupul", position: "LW", age: 25},
                {number: "32", nationCode: "CA", player: "Josh Leivo", position: "LW", age: 25}];
window.onload = function(){
    var image = document.querySelector("#outputImage");
    image.innerHTML = "<img alt= "+logoImage.alt+" "+" src= '" + logoImage.url + "'" + "style='height:" + logoImage.height + "px' />";
    
    var myTable = document.querySelector("#outputTable");
    myTable.setAttribute('border', '1');
    var rows = "";
    for (var i= 0; i < players.length; i++){
        rows += "<tr>" +
            "<td>" + players[i].number + "</td>" +
            "<td>" + "<img alt = '" + players[i].nationCode + "'" + "src='file:/C:/Users/willi/Desktop/asgn3/photo/country/" + players[i].nationCode + ".png' />" + "</td>" +
            "<td>" + players[i].player + "</td>" +
            "<td>" + players[i].position + "</td>" +
            "<td>" + players[i].age + "</td>" +
            "</tr>";
    }
    myTable.innerHTML += rows;
}
