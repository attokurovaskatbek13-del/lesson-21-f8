// const block = document.getElementById("block")

// function handle(e) {
//     console.log(e);
//     const key = e.key;
//     const keyCode = e.keyCode;

//     block.value = `Key: ${key} \n keyCode: ${keyCode}`
//     if (keyCode == 65) {
//         block.style.color = "blue"
//     } else {
//         block.style.color = "black"
//     }



// }



// document.addEventListener("keydown", handle)

// function check(e) {
//     if (e.keycode == 13) {
//         active.style.backgroundColor = "green"
//     } else {
//         active.style.backgroundColor = "white"

//     }

// }

// document.addEventListener("keydown", check)

const item = document.querySelector(".item")

let left = 0
let t = 0







function goRight() {
    left += 10
    item.style.marginLeft = `${left}px`
}

function goDown() {
    t += 10;
    item.style.marginTop = `${t}px`
}


function check(e) {
    if (e.keyCode == 39) {
        goRight()
    } else if (e.keyCode == 40) {
        goDown()
    }
}





document.addEventListener("keydown", check)
