window.onload = function () {
    //table 1
    countryListTable();

    //table 2
    var table2 = document.querySelector("#menu_21")
    table2.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Population greater than 100 million");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        populationOver100mTable();
    }

    //table 3
    var table3 = document.querySelector("#menu_22")
    table3.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Population between 1 and 2 million");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        population1and2mTable();
    }

    //table 4
    var table4 = document.querySelector("#menu_31")
    table4.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Area greater than 1 million Km2, Americas");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        americasAreaOver1mKmTable();
    }

    //table 5
    var table5 = document.querySelector("#menu_32")
    table5.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - All countries in Asia");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        asiaCountriesTable();
    }

    //table 6
    var table6 = document.querySelector("#menu_41")
    table6.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in English");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTable();
    }

    //table 7
    var table7 = document.querySelector("#menu_42")
    table7.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Arabic");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTableIn("Arabic");
    }

    //table 8
    var table8 = document.querySelector("#menu_43")
    table8.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Chinese");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTableIn("Chinese");
    }

    //table 9
    var table9 = document.querySelector("#menu_44")
    table9.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in French");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTableIn("Franch");
    }

    //table 10
    var table10 = document.querySelector("#menu_45")
    table10.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Hindi");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTableIn("Hindi");
    }

    //table 11
    var table11 = document.querySelector("#menu_46")
    table11.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Korean");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTableIn("Korean");
    }

    //table 12
    var table12 = document.querySelector("#menu_47")
    table12.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Japanese");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTableIn("Japanese");
    }

    //table 13
    var table13 = document.querySelector("#menu_48")
    table13.onclick = function () {
        var oldSubtitle = document.querySelector("#subtitle")
        var newSubtitle = document.createElement("h4");
        newSubtitle.id = "subtitle";
        var title = document.createTextNode("List of Countries and Dependencies - Country/Dep. Name in Russian");
        newSubtitle.appendChild(title);
        oldSubtitle.parentNode.replaceChild(newSubtitle, oldSubtitle);
        countryListTableIn("Russian");
    }
    
}

var countryListTable = function(){
    var table = document.querySelector("#outputTable")
    var clear = document.querySelectorAll("#tmpTr")
    for (var i = 0; i < clear.length; i++) {
        table.removeChild(clear[i])
    }

    for (var i = 0; i < countries.length; i++) {
        var row = document.createElement("tr");
        row.id = "tmpTr"

        var flagCell = document.createElement("td");
        var codeCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var continentCell = document.createElement("td");
        var areaCell = document.createElement("td");
        var populationCell = document.createElement("td");
        var capitalCell = document.createElement("td");
        
        var flag = document.createElement("img");
        var flagsrc = "flags/" + countries[i].Code.toLowerCase() + ".png";
        flag.src = flagsrc;
        var code = document.createTextNode(countries[i].Code);
        var name = document.createTextNode(countries[i].Name.English);
        var continent = document.createTextNode(countries[i].Continent);
        var area = document.createTextNode(countries[i].AreaInKm2);
        var population = document.createTextNode(countries[i].Population);
        var capital = document.createTextNode(countries[i].Capital);
        
        flagCell.appendChild(flag);
        codeCell.appendChild(code);
        nameCell.appendChild(name);
        continentCell.appendChild(continent);
        areaCell.appendChild(area);
        populationCell.appendChild(population);
        capitalCell.appendChild(capital);

        row.appendChild(flagCell);
        row.appendChild(codeCell);
        row.appendChild(nameCell);
        row.appendChild(continentCell);
        row.appendChild(areaCell);
        row.appendChild(populationCell);
        row.appendChild(capitalCell);

        table.appendChild(row);
    }
}

var populationOver100mTable = function () {
    var table = document.querySelector("#outputTable")
    var clear = document.querySelectorAll("#tmpTr")
    for (var i = 0; i < clear.length; i++) {
        table.removeChild(clear[i])
    }
 
    for (var i = 0; i < countries.length; i++) {
        var row = document.createElement("tr");
        row.id = "tmpTr"

        var flagCell = document.createElement("td");
        var codeCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var continentCell = document.createElement("td");
        var areaCell = document.createElement("td");
        var populationCell = document.createElement("td");
        var capitalCell = document.createElement("td");

        var flag = document.createElement("img");
        var flagsrc = "flags/" + countries[i].Code.toLowerCase() + ".png";
        flag.src = flagsrc;
        var code = document.createTextNode(countries[i].Code);
        var name = document.createTextNode(countries[i].Name.English);
        var continent = document.createTextNode(countries[i].Continent);
        var area = document.createTextNode(countries[i].AreaInKm2);
        var population = document.createTextNode(countries[i].Population);
        var capital = document.createTextNode(countries[i].Capital);

        flagCell.appendChild(flag);
        codeCell.appendChild(code);
        nameCell.appendChild(name);
        continentCell.appendChild(continent);
        areaCell.appendChild(area);
        populationCell.appendChild(population);
        capitalCell.appendChild(capital);

        row.appendChild(flagCell);
        row.appendChild(codeCell);
        row.appendChild(nameCell);
        row.appendChild(continentCell);
        row.appendChild(areaCell);
        row.appendChild(populationCell);
        row.appendChild(capitalCell);

        if (countries[i].Population > 100000000) {
            table.appendChild(row);
        }
    }
}

var population1and2mTable = function () {
    var table = document.querySelector("#outputTable")
    var clear = document.querySelectorAll("#tmpTr")
    for (var i = 0; i < clear.length; i++) {
        table.removeChild(clear[i])
    }

    for (var i = 0; i < countries.length; i++) {
        var row = document.createElement("tr");
        row.id = "tmpTr"

        var flagCell = document.createElement("td");
        var codeCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var continentCell = document.createElement("td");
        var areaCell = document.createElement("td");
        var populationCell = document.createElement("td");
        var capitalCell = document.createElement("td");

        var flag = document.createElement("img");
        var flagsrc = "flags/" + countries[i].Code.toLowerCase() + ".png";
        flag.src = flagsrc;
        var code = document.createTextNode(countries[i].Code);
        var name = document.createTextNode(countries[i].Name.English);
        var continent = document.createTextNode(countries[i].Continent);
        var area = document.createTextNode(countries[i].AreaInKm2);
        var population = document.createTextNode(countries[i].Population);
        var capital = document.createTextNode(countries[i].Capital);

        flagCell.appendChild(flag);
        codeCell.appendChild(code);
        nameCell.appendChild(name);
        continentCell.appendChild(continent);
        areaCell.appendChild(area);
        populationCell.appendChild(population);
        capitalCell.appendChild(capital);

        row.appendChild(flagCell);
        row.appendChild(codeCell);
        row.appendChild(nameCell);
        row.appendChild(continentCell);
        row.appendChild(areaCell);
        row.appendChild(populationCell);
        row.appendChild(capitalCell);

        if (countries[i].Population > 1000000 && countries[i].Population < 2000000) {
            table.appendChild(row);
        }
    }
}

var americasAreaOver1mKmTable = function () {
    var table = document.querySelector("#outputTable")
    var clear = document.querySelectorAll("#tmpTr")
    for (var i = 0; i < clear.length; i++) {
        table.removeChild(clear[i])
    }

    for (var i = 0; i < countries.length; i++) {
        var row = document.createElement("tr");
        row.id = "tmpTr"

        var flagCell = document.createElement("td");
        var codeCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var continentCell = document.createElement("td");
        var areaCell = document.createElement("td");
        var populationCell = document.createElement("td");
        var capitalCell = document.createElement("td");

        var flag = document.createElement("img");
        var flagsrc = "flags/" + countries[i].Code.toLowerCase() + ".png";
        flag.src = flagsrc;
        var code = document.createTextNode(countries[i].Code);
        var name = document.createTextNode(countries[i].Name.English);
        var continent = document.createTextNode(countries[i].Continent);
        var area = document.createTextNode(countries[i].AreaInKm2);
        var population = document.createTextNode(countries[i].Population);
        var capital = document.createTextNode(countries[i].Capital);

        flagCell.appendChild(flag);
        codeCell.appendChild(code);
        nameCell.appendChild(name);
        continentCell.appendChild(continent);
        areaCell.appendChild(area);
        populationCell.appendChild(population);
        capitalCell.appendChild(capital);

        row.appendChild(flagCell);
        row.appendChild(codeCell);
        row.appendChild(nameCell);
        row.appendChild(continentCell);
        row.appendChild(areaCell);
        row.appendChild(populationCell);
        row.appendChild(capitalCell);

        if (countries[i].Continent == "Americas" && countries[i].AreaInKm2 > 1000000) {
            table.appendChild(row);
        }
    }
}

var asiaCountriesTable = function () {
    var table = document.querySelector("#outputTable")
    var clear = document.querySelectorAll("#tmpTr")
    for (var i = 0; i < clear.length; i++) {
        table.removeChild(clear[i])
    }

    for (var i = 0; i < countries.length; i++) {
        var row = document.createElement("tr");
        row.id = "tmpTr"

        var flagCell = document.createElement("td");
        var codeCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var continentCell = document.createElement("td");
        var areaCell = document.createElement("td");
        var populationCell = document.createElement("td");
        var capitalCell = document.createElement("td");

        var flag = document.createElement("img");
        var flagsrc = "flags/" + countries[i].Code.toLowerCase() + ".png";
        flag.src = flagsrc;
        var code = document.createTextNode(countries[i].Code);
        var name = document.createTextNode(countries[i].Name.English);
        var continent = document.createTextNode(countries[i].Continent);
        var area = document.createTextNode(countries[i].AreaInKm2);
        var population = document.createTextNode(countries[i].Population);
        var capital = document.createTextNode(countries[i].Capital);

        flagCell.appendChild(flag);
        codeCell.appendChild(code);
        nameCell.appendChild(name);
        continentCell.appendChild(continent);
        areaCell.appendChild(area);
        populationCell.appendChild(population);
        capitalCell.appendChild(capital);

        row.appendChild(flagCell);
        row.appendChild(codeCell);
        row.appendChild(nameCell);
        row.appendChild(continentCell);
        row.appendChild(areaCell);
        row.appendChild(populationCell);
        row.appendChild(capitalCell);

        if (countries[i].Continent == "Asia") {
            table.appendChild(row);
        }
    }
}

var countryListTableIn = function (language) {
    var table = document.querySelector("#outputTable")
    var clear = document.querySelectorAll("#tmpTr")
    for (var i = 0; i < clear.length; i++) {
        table.removeChild(clear[i])
    }

    for (var i = 0; i < countries.length; i++) {
        var row = document.createElement("tr");
        row.id = "tmpTr"

        var flagCell = document.createElement("td");
        var codeCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var continentCell = document.createElement("td");
        var areaCell = document.createElement("td");
        var populationCell = document.createElement("td");
        var capitalCell = document.createElement("td");
        
        var flag = document.createElement("img");

        var flagsrc = "flags/" + countries[i].Code.toLowerCase() + ".png";
        flag.src = flagsrc;

        var code = document.createTextNode(countries[i].Code);

        if (language == "Arabic") {
            var name = document.createTextNode(countries[i].Name.Arabic);
        } else if (language == "Chinese") {
            var name = document.createTextNode(countries[i].Name.Chinese);
        } else if (language == "Franch") {
            var name = document.createTextNode(countries[i].Name.Franch);
        } else if (language == "Hindi") {
            var name = document.createTextNode(countries[i].Name.Hindi);
        } else if (language == "Korean") {
            var name = document.createTextNode(countries[i].Name.Korean);
        } else if (language == "Japanese") {
            var name = document.createTextNode(countries[i].Name.Japanese);
        } else {
            var name = document.createTextNode(countries[i].Name.Russian);
        }
        
        var continent = document.createTextNode(countries[i].Continent);
        var area = document.createTextNode(countries[i].AreaInKm2);
        var population = document.createTextNode(countries[i].Population);
        var capital = document.createTextNode(countries[i].Capital);
        
        flagCell.appendChild(flag);
        codeCell.appendChild(code);
        nameCell.appendChild(name);
        continentCell.appendChild(continent);
        areaCell.appendChild(area);
        populationCell.appendChild(population);
        capitalCell.appendChild(capital);

        row.appendChild(flagCell);
        row.appendChild(codeCell);
        row.appendChild(nameCell);
        row.appendChild(continentCell);
        row.appendChild(areaCell);
        row.appendChild(populationCell);
        row.appendChild(capitalCell);

        table.appendChild(row);
    }
}