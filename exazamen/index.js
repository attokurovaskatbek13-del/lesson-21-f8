function checkNumber() {

    let num = Number(document.getElementById("number").value);
    let result = document.getElementById("numberResult");

    if (num < 5) {
        result.innerHTML = "Бештен кичине сан";
        result.style.backgroundColor = "green";
    }
    else if (num < 10) {
        result.innerHTML = "Ондон кичине сан";
        result.style.backgroundColor = "red";
    }

    else {
        result.innerHTML = "Ондон чоң сан";
        result.style.backgroundColor = "blue";
    }
}

function showName() {
    let nameInput = document.getElementById("name");
    let name = nameInput.value;
    let result = document.getElementById("nameResult");


    result.innerHTML = "Салам " + name;


    result.style.backgroundColor = "transparent";
    result.style.color = "black";
    result.style.boxShadow = "none";
    result.style.border = "none";

    nameInput.value = "";
}




