const number = document.querySelector(".number")
const red = document.querySelector(".red")
const green = document.querySelector(".green")

const number2 = document.querySelector(".number2")
const red2 = document.querySelector(".red2")
const green2 = document.querySelector(".green2")

let timer = 15;

function updateTimer() {
    timer--;


    number.innerHTML = timer;
    number2.innerHTML = timer;


    if (timer == 0) {
        timer = 15;



    }

    if (red.style.backgroundColor == "red") {
        red.style.backgroundColor = "black"
        green.style.backgroundColor = "green"
    } else {
        red.style.backgroundColor = "black"
        green.style.backgroundColor = "green"
    }
    if (red2.style.backgroundColor == "green") {
        red2.style.backgroundColor = "black"
        green2.style.backgroundColor = "black"
    } else {
        red2.style.backgroundColor = "red"
        green2.style.backgroundColor = "black"
    }
}



setInterval(updateTimer, 1000)

