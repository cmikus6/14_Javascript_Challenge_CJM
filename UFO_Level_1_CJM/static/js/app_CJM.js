// from data.js
var tableData = data;

// LEVEL 1 BEGINS HERE
var table = d3.select("table");
var tbody = d3.select("tbody");
tbody.html("");

table = table.classed("table-striped", true);
tableData.forEach((sightingInfo) => {
    var row = tbody.append("tr");
    Object.entries(sightingInfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
// LEVEL 1 ENDS HERE

// LEVEL 2 BEGINS HERE
var button = d3.select("#filter-btn");
button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElementDate = d3.select("#datetime-input");
    var inputElementCity = d3.select("#city-input");
    var inputElementState = d3.select("#state-input");
    var inputElementCountry = d3.select("#country-input");
    var inputElementShape = d3.select("#shape-input");

    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value").toLowerCase();
    var inputValueState = inputElementState.property("value").toLowerCase();
    var inputValueCountry = inputElementCountry.property("value").toLowerCase();
    var inputValueShape = inputElementShape.property("value");

    var filtered = tableData;
    console.log(filtered);

// Use if statements to consider all filters independently (in case 1+ fields is blank)
    if (inputValueDate != "") {
        filtered = filtered.filter(sighting => sighting.datetime == inputValueDate);
        console.log(filtered);
    }
    if (inputValueCity != "") {
        filtered = filtered.filter(sighting => sighting.city == inputValueCity);
        console.log(filtered);
    }
    if (inputValueState != "") {
        filtered = filtered.filter(sighting => sighting.state == inputValueState);
        console.log(filtered);
    }
    if (inputValueCountry != "") {
        filtered = filtered.filter(sighting => sighting.country == inputValueCountry);
        console.log(filtered);
    }
    if (inputValueShape != "") {
        filtered = filtered.filter(sighting => sighting.shape == inputValueShape);
        console.log(filtered);
    }

    console.log(filtered);

    var table = d3.select("table");
    var tbody = d3.select("tbody");
    tbody.html("");

    table = table.classed("table-striped", true);
    filtered.forEach((sightingInfo) => {
        console.log(sightingInfo);
        var row = tbody.append("tr");
        Object.entries(sightingInfo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
// LEVEL 2 ENDS HERE