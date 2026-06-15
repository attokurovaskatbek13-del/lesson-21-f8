const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list";

// DOM элементтери
const productContainer = document.getElementById("product");
const modalContainer = document.getElementById("modalContainer");
const submitBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close");

const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");

// 1. Продукцияларды алып келүү
async function getProducts() {
    try {
        const res = await fetch(API);
        const data = await res.json();

        productContainer.innerHTML = data.map(item => `
            <div class="card">
                <img src="${item.thumbnail || 'https://via.placeholder.com/280'}" alt="${item.name}" />
                <div class="card-body">
                    <h4>${item.name}</h4>
                    <p class="price">$${item.price}</p>
                    <div class="btns">
                        <button onclick="openModal('${item.id}')" class="update">Update</button>
                        <button onclick="deleteProduct('${item.id}')" class="delete">Delete</button>
                    </div>
                </div>
            </div>
        `).join("");
    } catch (error) {
        console.error("Маалыматты жүктөөдө ката кетти:", error);
    }
}

// 2. Модалды ачуу
async function openModal(id) {
    modalContainer.style.display = "flex";

    try {
        const res = await fetch(`${API}/${id}`);
        const data = await res.json();

        titleInput.value = data.name;
        priceInput.value = data.price;
        imageInput.value = data.thumbnail;

        // Сахна артындагы onclick окуясын жаңылоо
        submitBtn.onclick = () => updateProduct(id);
    } catch (error) {
        console.error("Продукт маалыматын алууда ката кетти:", error);
    }
}

// 3. Модалды жабуу
const closeModal = () => modalContainer.style.display = "none";
closeBtn.onclick = closeModal;

// 4. Продукцияны өзгөртүү (PUT)
async function updateProduct(id) {
    const payload = {
        name: titleInput.value,
        price: Number(priceInput.value),
        thumbnail: imageInput.value
    };

    try {
        const res = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            closeModal();
            getProducts(); // Баракты жаңылоо
        }
    } catch (error) {
        console.error("Өзгөртүүдө ката кетти:", error);
    }
}

// 5. Продукцияны өчүрүү (DELETE)
async function deleteProduct(id) {
    if (confirm("Бул өнүмдү өчүрүүнү каалайсызбы?")) {
        try {
            const res = await fetch(`${API}/${id}`, { method: "DELETE" });
            if (res.ok) getProducts(); // Баракты жаңылоо
        } catch (error) {
            console.error("Өчүрүүдө ката кетти:", error);
        }
    }
}

// Баштапкы ишке киргизүү
getProducts();