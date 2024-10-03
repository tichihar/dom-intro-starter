// Selecting by ID
document.getElementById("firstPara").innerHTML += "<span class='tan'> This is a new tan text.</span>";

// Selecting by Tag Name
let images = document.getElementsByTagName("img");

for(let image of images) {
    image.width = 250;
}

// Selecting by Class
let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");
console.log(ltBlueSpans);

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73"
}

// Select  many with CSS selector
// array of colors
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];
let svgs = document.querySelectorAll("#svgs svg");

for(let i = 0; i < 5; i++) {
    svgs[i].style.stroke = colors[i];
}

//change the first 
document.querySelector("#query .bold").style.color = "#7C9EA6";

// working with the list in the change section
let list = document.querySelector("#change .content_list");
console.log(list);

// replace text in first li
list.children[0].textContent = "This is new list item text";

//add name to third li
list.children[2].innerHTML = "<strong>Takemi Ichihara</strong>";

//remove hidden attribute from paragraph
document.querySelector("#remove a").removeAttribute("hidden");