let num = document.getElementById("number").value;
let result = document.getElementById("numberResult");

if (number < 5) {
    result.innerHTML = " бештен чон кичине";
    result.style.backgroundColor = "green"
}
else if (number < 10) {
    result.innerHTML = "Кичине сан";
    result.style.backgroundColor = "red"
}
else {

    result.innerHTML = "Ондон чон сан";
    result.style.backgroundColor = "blue"
}


function showName() {

    let name = document.getElementById("name").value;
    let result = document.getElementById("nameResult");

    result.innerHTML = "Салам " + name;

    block.value = ""

}