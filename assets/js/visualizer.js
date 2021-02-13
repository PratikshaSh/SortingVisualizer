// console.log("js connected");

var inpSize = document.getElementById('array-size');

var inpGenerate = document.getElementById('generate-array');
var sortButtons = document.querySelectorAll('.sorting-algos-buttons button');
var arraySize = inpSize.value;



var arrayBar = [];
var arrayBarSize = [];
var cont = document.getElementById("array-container");
cont.style = "flex-direction:row";

inpGenerate.addEventListener("click", generateArray);

for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].addEventListener("click", sortingAlgos);
}

inpSize.addEventListener("input", updateArraySize);

function generateArray() {
    cont.innerHTML = "";
    for (var i = 0; i < arraySize; i++) {
        arrayBarSize[i] = Math.floor(Math.random() * 0.5 * (inpSize.max - inpSize.min)) + 10;
        arrayBar[i] = document.createElement("div");
        cont.appendChild(arrayBar[i]);
        var margin_size = 0.1;
        arrayBar[i].style = " margin:0% " + margin_size + "%; background-color:pink; width:" + (100 / arraySize - (2 * margin_size)) + "%; height:" + (arrayBarSize[i]) + "%;";
    }
}

function updateArraySize() {
    arraySize = inpSize.value;
    generateArray();
}

for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].addEventListener("click", sortingAlgos);
}

function sortingAlgos() {

    console.log(this.innerHTML); //button name
    for (var i = 0; i < sortButtons.length; i++) {
        sortButtons[i].className.replace("butt_selected", " ");
        sortButtons[i].className.replace("  ", " ");
    }
    this.className += " butt_selected";
    switch (this.innerHTML) {
        case "Merge Sort":
            alert("Merge Sort is Running");
            //MergeSort();
            break;

        case "Bubble Sort":
            BubbleSort();
            break;

        case "Quick Sort":
            alert("quick Sort is Running");
            //QuickSort();
            break;

        case "Heap Sort":
            alert("heap Sort is Running");
            //HeapSort();
            break;
    }
}

window.onload = updateArraySize();