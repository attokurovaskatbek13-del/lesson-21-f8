// function

// function home() {
//     alert("Hello Askat")
// }

// home()

// let info = "Ali"

// function show() {
//     let about = `Hi   ${info}`

//     alert(about)
// }

// show()

// function number(a) {
//     alert(a)
// }

// number("Darbyz")
// number("Banan")
// number(23)

// function setNumber(a, b) {
//     if (a < b) {
//         alert(a + b)
//     } else if (a > b) {
//         alert(a - b)
//     } else {
//         alert(a * b)
//     }


// }

// setNumber(7, 9) // 16
// setNumber(12, 8) // 4
// setNumber(14, 23) // 37

// function getName(y, x) {
//     const sum = y + x

//     return sum

//     alert("Hello Baisal")
// }

// let return = getName(7, 14)


// alert(result)

// function check() {
//     if (24 > 19) {
//         alert("Ali")
//         return
//     }

//     alert("Askat")

// }

// check()

// DOM
// const active = document.getElementById("content")
// console.log(active);

// active.textContent = "HI Bilal"

// active.innerHTML = "<h1>Hello world</h1>"

// active.style.color = "red"

// active.style.width = "200px"
// active.style.height = "120px"
// active.style.border = "4px solid red"

// const clickBtn = document.getElementById("click")
// function setColor() {
//     active.style.borderradius = "4px"

// }

// clickBtn.onclick = setColor





let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

function GreenBox() {
    box1.style.background = "green";
    box2.style.background = "white";
    box3.style.background = "white";
}

function BlueBox() {
    box1.style.background = "white";
    box2.style.background = "blue";
    box3.style.background = "white";
}

function orangeBox() {
    box1.style.background = "white";
    box2.style.background = "white";
    box3.style.background = "orange";
}



