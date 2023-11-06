// getting all elements by id so that we can manipulate with it down the line
let restyleElement = document.getElementById("output");
let submitButton = document.getElementById("submit");
let outputText = document.getElementById("output");
let nameBox = document.getElementById("nameInput");

// adding a function to run when we click the submit button
submitButton.addEventListener("click", function () {
    // we set the inner text of the output text to the generated text
    outputText.innerText = generate(nameBox.value);
    // we fire off the restyle function 
    restyle();
});

function generate(name) {
    // list of possible results
    let possibleResults = [" will learn why those Quebecois use church words as profanities in the near future...", " will get rickrolled when he tries to talk to their friends...", " will get scammed by a frat party that turns out to just be a weird courtyard party...", " will get an internship at Apple...", " will actually manage to rizz someone up and start dating them...", " will chaotically decide to rent a car on Turo and drive to and from Toronto within the same weekend...", " will manage to break their MacBook keyboard enough times that they manage to guilttrip Apple into providing them a brand new laptop..."];

    // choose a result via random, but then floor it because we want to index the list with integers only
    let result = possibleResults[Math.floor(Math.random() * possibleResults.length)];
    // print out the name concatted with the result
    console.log(name + result);
    // return the result so that we can use it for the inner text of the output text
    return name + result;
}

function restyle() {
    // make rng for the rgb, times 255 because we max out at 255
    let rngRed = Math.random() * 255;
    let rngGreen = Math.random() * 255;
    let rngBlue = Math.random() * 255;

    // we set the color to the rng numbers
    restyleElement.style.color = "rgb(" + rngRed + "," + rngGreen + "," + rngBlue + ")";
    // we rng the font size with a font cap of 200pt
    restyleElement.style.fontSize = Math.random() * 200 + "pt";
    // we rng the rotation of the text, which might be blursed
    restyleElement.style.transform = "rotate(" + Math.random() + "turn)";
}

