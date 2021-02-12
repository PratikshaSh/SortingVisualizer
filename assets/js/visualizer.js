// console.log("js connected");

var inpSize = document.getElementById('array-size');

var inpGenerate = document.getElementById('generate-array');
var sortButtons = document.querySelectorAll('.sorting-algos-buttons button');
var arraySize;



var arrayBar = [];
var arrayBarSize = [];

inpGenerate.addEventListener("click", generateArray);

function generateArray() {
    alert("new array generated");
}

for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].addEventListener("click", sortingAlgos);
}

inpSize.addEventListener("click", updateArraySize);

function updateArraySize() {
    arraySize = inpSize.value;
    alert("size updated");
    generateArray();
}

for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].addEventListener("click", sortingAlgos);
}

function sortingAlgos() {

    console.log(this.innerHTML);
    switch (this.innerHTML) {
        case "Merge Sort":
            alert("Merge Sort is Running");
            //MergeSort();
            break;

        case "Bubble Sort":
            alert("bubble Sort is Running");
            //BubbleSort();
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