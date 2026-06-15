const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/list";

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const createBtn = document.getElementById("create");

async function createProduct() {
    // Валидация (бош болсо эскертет)
    if (!input1.value.trim() || !input2.value.trim()) {
        alert("Сураныч, өнүмдүн атын жана баасын жазыңыз!");
        return;
    }

    const newData = {
        name: input1.value,
        price: Number(input2.value),
        thumbnail: input3.value || "https://via.placeholder.com/280"
    };

    try {
        const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData)
        });

        if (res.ok) {
            alert("Өнүм ийгиликтүү кошулду!");
            window.location.href = "index.html"; // Башкы бетке кайтуу
        }
    } catch (error) {
        console.error("Продукт кошууда ката кетти:", error);
    }
}

createBtn.onclick = createProduct;