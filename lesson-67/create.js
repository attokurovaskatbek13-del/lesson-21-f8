const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products";

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const createBtn = document.getElementById("create");

async function createProduct() {
    // Валидация полей
    if (!input1.value || !input2.value || !input3.value) {
        alert("Please fill in all fields!");
        return;
    }

    const newData = {
        name: input1.value,
        price: input2.value,
        thumbnail: input3.value,
    };

    try {
        const res = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        });

        if (res.ok) {
            // Очищаем инпуты
            input1.value = "";
            input2.value = "";
            input3.value = "";

            // Перенаправляем на главную
            window.location.href = "./index.html";
        }
    } catch (error) {
        console.error("Error creating product:", error);
    }
}

createBtn.onclick = createProduct;
