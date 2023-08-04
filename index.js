let numberOfDrumButtons = document.querySelectorAll(".drum").length;

function createSound(charecter) {
    switch (charecter) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }

}

// Detest button press
for (let i = 0; i < numberOfDrumButtons; i++) {
    // Adds event listener to click of class drum 
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Takes the content on which the click is made
        let buttonInnerHTML = this.innerHTML;
        createSound(buttonInnerHTML)

    })


}

// Detect keyboard press
document.addEventListener('keypress', function (event) {
    // call create sound
    createSound(event.key)

})

