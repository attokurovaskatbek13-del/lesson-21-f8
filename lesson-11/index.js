const item1 = document.getElementById("item1")
const redBtn = document.getElementById("red")

function setcolor() {
    item1.style.backgroundColor = "red"
}

redBtn.onclick = setcolor


const item2 = document.getElementById("item2")
const buyBtn = document.getElementById("buy")

function setcolor1() {
    item1.style.backgroundColor = "blue"
}
blueBtn.onclick = check



const item3 = document.getElementById("item3")
const greenBtn = document.getElementById("green")

function check() {
    item3.style.backgroundColor = "green"
}

// greenBtn.onclick = check




const block = document.getElementById("block")
const send = document.getElementById("send")
const result = document.getElementById("result")

function getPost() { }

if (block.value == "0777") {

    result.innerHTML = "beeline"
    result.style.width = "200px"
    result.style.height = "15opx"
    result.style.backgroundColor = "yellow"
}

if (block.value == "0700") {


    result.innerHTML = "O!"
    result.style.width = "300px"
    result.style.height = "250px"
    result.style.backgroundColor = "pink"

}

if (block.value == "0550") {

    result.innerHTML = "megakom"
    result.style.width = "300px"
    result.style.height = "250px"
    result.style.backgroundColor = "green"
} else {
    alert("Siz Tuure emes kod jazdynyz")
}










//     result.innerHTML = Belleain.value

//     belleain.value = ""

// }

// send.onclick = getPost



// // sendBtn.addEventListener("click", getPost)

// function enterClick(e) {
//     console.log(e)
//     if (e.keycode == 13) {
//         getpost()
//    }
//}

document.addEventListener("keydown", enterClick)