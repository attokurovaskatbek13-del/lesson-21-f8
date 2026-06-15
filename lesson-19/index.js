// CRUD
// C = create, post 
// R = READ GET 
// U = Update PUT 
// D = Delete DELETE 


const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list"
const product = document.getElementById("product")
async function getProduct() {
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data)
        product.innerHTML = data.map((item) => {
            return `<div class="card">
            <img src="${item.thumbnail}" />
            <h4>${item.name}</h4>
             <p>${item.price}<p>
             <div class="btns">
             <button onclick="openModal('${item.id}')" 
             class="update">Update</button>
              <button class="delete">Delete</button>
             </div>
            </div>`
        }).join("")

    } catch (error) {
        console.log(error);

    }

}

getProduct()

const content = document.querySelector(".content")
const sumbitBtn = document.getElementById("submit")
const closeBtn = document.getElementById("close")
const titleInput = document.getElementById("title")
const priceInput = document.getElementById("price")
const imageInput = document.getElementById("image")


async function openModal(id) {
    content.style.display = "flex"

    try {
        const res = await fetch(`${API}/${id}`)
        const data = await res.json()

        console.log(data);
        titleInput.value = data.name;
        priceInput.value = data.price;
        imageInput.value = data.thumbnail;


        sumbitBtn.onclick = function () {
            updateProduct(data.id)
        }



    } catch (error) {
        console.log(error);
    }
}

function closeModal() {
    content.style.display = "none"

}

closeBtn.onclick = closeModal


async function updateProduct(id) {
    try {
        const res = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "applicatoin/json"
            },
            body: JSON.stringify(payload)

        })
        const data = await res.json()
        console.log(res);
        console.log(data);


    } catch (error) {

    }
}