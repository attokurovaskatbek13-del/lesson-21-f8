const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products";
const productContainer = document.getElementById("product");

// Получение и отрисовка всех карточек
async function getProduct() {
    try {
        const res = await fetch(API);
        const data = await res.json();

        productContainer.innerHTML = data.map((item) => {
            return `
            <div class="card">
                <div class="card-img-container">
                    <img src="${item.thumbnail}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500'"/>
                </div>
                <div class="card-info">
                    <h4>${item.name}</h4>
                    <p class="price">$${item.price}</p>
                </div>
                <div class="btns">
                    <button onclick="openModal('${item.id}')" class="update">Update</button>
                    <button onclick="deleteProduct('${item.id}')" class="delete">Delete</button>
                </div>
            </div>`;
        }).join("");

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

getProduct();

const content = document.querySelector(".content");
const sumbitBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");

// Открытие модального окна и заполнение полей данными
async function openModal(id) {
    content.style.display = "flex";

    try {
        const res = await fetch(`${API}/${id}`);
        const data = await res.json();

        titleInput.value = data.name;
        priceInput.value = data.price;
        imageInput.value = data.thumbnail;

        sumbitBtn.onclick = function () {
            updateProduct(data.id);
        };

    } catch (error) {
        console.error("Error opening modal:", error);
    }
}

function closeModal() {
    content.style.display = "none";
}

closeBtn.onclick = closeModal;

// Функция отправки обновленных данных (PUT)
async function updateProduct(id) {
    // Исправлено: собираем измененные данные в payload перед отправкой
    const payload = {
        name: titleInput.value,
        price: priceInput.value,
        thumbnail: imageInput.value
    };

    try {
        const res = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json" // Исправлена опечатка в application
            },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            closeModal();
            getProduct(); // Обновляем список на странице
        }
    } catch (error) {
        console.error("Error updating product:", error);
    }
}

// Функция удаления продукта (DELETE)
async function deleteProduct(id) {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
        const res = await fetch(`${API}/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            getProduct(); // Обновляем список
        }
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}