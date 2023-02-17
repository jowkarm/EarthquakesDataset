/*
  Mehdi Jokar 

  This JavaScript file contains the JS functions and script that
  makes the web page more interactive.
*/


//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function (event) {
    index--;

    //make sure that index is never less than zero...
    if (index >= 0) {
        display();
    } else {
        alert("This is the first record!");
        index++;
    }
}

//responds to clicks of the "next" button
next.onclick = function (event) {
    index++;

    //make sure that index is never greater than
    //array.length - 1
    if (index < arrayLength) {
        display();
    } else {
        alert("This is the last record!");
        index--;
    }
}

//shows the current record in the array of records
//at the position within the index variable
function display() {
    let id = document.getElementById("id");
    id.innerHTML = earthquakes[index].id;

    let location = document.getElementById("location");
    location.innerHTML = earthquakes[index].location.full;

    let time = document.getElementById("time");
    time.innerHTML = earthquakes[index].time.full;

    let depth = document.getElementById("depth");
    depth.innerHTML = earthquakes[index].location.depth;

    let distance = document.getElementById("distance");
    distance.innerHTML = earthquakes[index].location.distance;

    let gap = document.getElementById("gap");
    gap.innerHTML = earthquakes[index].impact.gap;

    let significance = document.getElementById("significance");
    significance.innerHTML = earthquakes[index].impact.significance;

    let magnitude = document.getElementById("magnitude");
    magnitude.innerHTML = earthquakes[index].impact.magnitude;
}

// enter the number of elements in the dataset into the page
let arrayLength = earthquakes.length;
let totalElements = document.getElementById("totalElements");
totalElements.innerHTML = arrayLength;

// display called when the page has completed loading
window.onload = display;

// interesting facts: average magnitude
// sum of all magnitudes
let sumMagnitude = 0;
for (let i = 0; i < earthquakes.length; i++) {
    sumMagnitude += earthquakes[i].impact.magnitude;
}
// calculate average of magnitude and round it
let averageValue = sumMagnitude / earthquakes.length;
let aveVal = averageValue.toFixed(2);
// enter into the page
let average = document.getElementById("average");
average.innerHTML = "The average magnitude is "
    + aveVal + ".";



// interesting facts: total records in WA state
// sum of all WA records
let sumW = 0;
for (let i = 0; i < earthquakes.length; i++) {
    let state = earthquakes[i].location.name;
    if (state == "Washington") {
        sumW++;
    }
}
// enter into the page
let washington = document.getElementById("washington");
washington.innerHTML = "There are " + sumW
    + " records for the state of Washington.";


// interesting facts: min depth
// finding min depth
let minDepth = earthquakes[0].location.depth;
let minLocation = earthquakes[0].location.name;;
for (let i = 1; i < earthquakes.length; i++) {
    let locationName = earthquakes[i].location.name;
    let depthVal = earthquakes[i].location.depth;
    if (depthVal < minDepth) {
        minDepth = depthVal;
        minLocation = locationName;
    }
}
// enter into the page
let minimumDepth = document.getElementById("minimum");
minimumDepth.innerHTML = "The minimum depth was " + minDepth
    + " and it happened in " + minLocation + ".";


// interesting facts: max magnitude
// finding max magnitude
let maxMagnitude = earthquakes[0].impact.magnitude;
let maxLocation = earthquakes[0].location.name;;
for (let i = 1; i < earthquakes.length; i++) {
    let locationName = earthquakes[i].location.name;
    let magVal = earthquakes[i].impact.magnitude;
    if (magVal > maxMagnitude) {
        maxMagnitude = magVal;
        maxLocation = locationName;
    }
}
// enter into the page
let maxMag = document.getElementById("maximum");
maxMag.innerHTML = "The maximum magnitude was " + maxMagnitude
    + " and it happened in " + maxLocation + ".";


