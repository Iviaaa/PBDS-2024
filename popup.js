// Get the popup and button elements
// const previous = document.querySelectorAll('.previous');
// const next = document.querySelectorAll('.next');
let index = 0;
let lastElementIndex = index;

//get list of sentences
const textList = [
    "In the digital age, vast amounts of information are constantly generated and stored, often stripped of context and reduced to mere data points.",
    "This process is evident in the rise of platforms that aggregate content, where creativity is quantified and monetized, often prioritizing engagement metrics over artistic integrity.",
    "As a result, individual expression risks being subsumed into a broader database, where unique ideas are categorized and indexed, leading to a homogenization of creative output.",
    "This commodification also raises ethical questions about ownership and attribution, as creators navigate a landscape where their work is easily replicated and redistributed without adequate compensation or recognition.",
    "Critics argue that this trend diminishes the intrinsic value of creativity, reducing it to a product rather than a form of human expression that reflects cultural nuances and personal experiences.",
    "The implications for society are profound, suggesting a need for reevaluation of how we support and value creative endeavors in an increasingly data-driven world."
];

// Get the display window element
const outputDiv = document.getElementById('displaywindow');

// Show the popup window
outputDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('previous')) {
        destroyLastElement();
    } else if (event.target.classList.contains('next')) {
        displayNextElement();
    }
});

function displayNextElement() {
    console.log('Element clicked!');

    if (index < textList.length - 1) {
        outputDiv.innerHTML += `<div class="window" id="prev${index + 1}" style="width: 300px; position:absolute;top: ${window.innerHeight * Math.random() * 0.7}px; left: ${window.innerWidth * Math.random() *0.7}px; background-color:white">
            <div class="title-bar" style=" background:blue; border: black 1px solid; color: black">
                <div class="title-bar-text" style="font-size: 10pt; color: white">Artist Statement</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize" style="background-color:transparent"></button>
                    <button aria-label="Maximize" style="background-color:transparent"></button>
                    <button aria-label="Close" style="background-color:transparent"></button>
                </div>
            </div>
            <div class="window-body">
                <p>${textList[index]}</p>
            </div>
            <button disabled  style="background-color:transparent">Click me</button>
            <button class="previous"  style="background-color:transparent">Previous</button>
            <button class="next"  style="background-color:transparent">Next</button>
        </div>`; // Append next element
        index++; // Move to next element in the array
        lastElementIndex = index;
    } else if(index ==textList.length - 1){
        outputDiv.innerHTML += `<div class="window" id="prev${index + 1}" style="width: 300px; position:absolute;top: ${window.innerHeight * Math.random() * 0.7}px; left: ${window.innerWidth * Math.random() *0.7}px;  background-color:white">
        <div class="title-bar" style=" background:blue; border: black 1px solid; color: black">
            <div class="title-bar-text" style="font-size: 10pt;  color: white">Artist Statement</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize" style="background-color:transparent"></button>
                <button aria-label="Maximize" style="background-color:transparent"></button>
                <button aria-label="Close"  style="background-color:transparent"></button>
            </div>
        </div>
        <div class="window-body">
            <p>${textList[index]}</p>
        </div>
        <a href="details.html" target="_blank" ><button  style="background-color:transparent">Click me</button></a>
        <button class="previous"  style="background-color:transparent">Previous</button>
        <button disabled class="next"  style="background-color:transparent">Next</button>
        </div>`; // Append next element
        index++; // Move to next element in the array
        lastElementIndex = index;
    }
};

function destroyLastElement() {
    console.log('Element clicked!');
    if (lastElementIndex > 0) {
        const elementToDestroy = document.getElementById(`prev${lastElementIndex}`);
        elementToDestroy.remove(); // Remove the element
        lastElementIndex--; // Move to the previous element
        index = lastElementIndex;
    }
};


// function displayNextElement() {
//     console.log('Element clicked!');

//     if (index < textList.length) {
//         const outputDiv = document.getElementById('displaywindow');
//         outputDiv.innerHTML += `<div class="window" id="prev${index+1}" style="width: 300px;position:fixed; left:${Math.random()*window.innerWidth}; top:${Math.random()*window.innerHeight};">
//         <div class="title-bar">
//           <div class="title-bar-text" style="font-size: 10pt">Artist Statement</div>
//           <div class="title-bar-controls">
//             <button aria-label="Minimize"></button>
//             <button aria-label="Maximize"></button>
//             <button aria-label="Close"></button>
//           </div>
//         </div>
//         <div class="window-body">
//           <p>${textList[index]}</p>
//         </div>
//         <button disabled>Click me</button>
//         <button class="previous" >Previous</button>
//         <button class="next" >Next</button>
//         </div>`;// Append next element
//         index++; // Move to next element in the array
//         lastElementIndex = index;
//     } else {
//         alert("All elements have been displayed!");
//     }
// };

// function destroyLastElement() {
//     console.log('Element clicked!');
//     if (lastElementIndex > 0) {
//         const elementToDestroy = document.getElementById(`prev${lastElementIndex}`);
//         elementToDestroy.remove(); // Remove the element
//         lastElementIndex--; // Move to the previous element
//         index = lastElementIndex;
//     } else {
//         alert("All elements have been destroyed!");
//     }
// };

// // Show the popup window
// previous.forEach(function(element) {
//     element.addEventListener('click', destroyLastElement);
// });

// // Hide the popup window when clicking "X" or "OK"
// next.forEach(function(element) {
//     element.addEventListener('click', displayNextElement);
// });
