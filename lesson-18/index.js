
// 2. DummyJSON Продукцияларын жүктөө
async function loadDummyProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const list = document.getElementById('dummy-products-list');
        list.innerHTML = '';

        data.products.slice(0, 8).forEach(product => {
            const li = document.createElement('li');
            li.classList.add('card');
            li.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
            `;
            list.appendChild(li);
        });
    } catch (error) {
        document.getElementById('dummy-products-list').innerHTML = "<p style='color:red;'>DummyJSON продукцияларын жүктөөдө ката кетти.</p>";
    }
}

// 3. DummyJSON Постторун жүктөө
async function loadPosts() {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        const list = document.getElementById('posts-list');
        list.innerHTML = '';

        data.posts.slice(0, 4).forEach(post => {
            const div = document.createElement('div');
            div.classList.add('post-card');
            const tags = post.tags.map(t => `<span class="tag">#${t}</span>`).join('');

            div.innerHTML = `
                <h3 class="post-title">${post.title}</h3>
                <p>${post.body}</p>
                <div>${tags}</div>
            `;
            list.appendChild(div);
        });
    } catch (error) {
        document.getElementById('posts-list').innerHTML = "<p style='color:red;'>Постторду жүктөөдө ката кетти.</p>";
    }
}

// Баракча толук жүктөлгөндө баарын иштетүү
document.addEventListener("DOMContentLoaded", () => {
    loadMockProducts();
    loadDummyProducts();
    loadPosts();
});

// 2. DummyJSON Products
async function loadDummyProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const list = document.getElementById('dummy-products-list');
        list.innerHTML = '';

        data.products.slice(0, 8).forEach(product => {
            const li = document.createElement('li');
            li.classList.add('card');
            li.innerHTML = `
                        <img src="${product.thumbnail}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p class="price">$${product.price}</p>
                    `;
            list.appendChild(li);
        });
    } catch (error) {
        document.getElementById('dummy-products-list').innerHTML = "<p style='color:red;'>Маалымат жүктөөдө ката кетти.</p>";
    }
}

// 3. DummyJSON Posts
async function loadPosts() {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        const list = document.getElementById('posts-list');
        list.innerHTML = '';

        data.posts.slice(0, 4).forEach(post => {
            const div = document.createElement('div');
            div.classList.add('post-card');
            const tags = post.tags.map(t => `<span class="tag">#${t}</span>`).join('');

            div.innerHTML = `
                        <h3 class="post-title">${post.title}</h3>
                        <p>${post.body}</p>
                        <div>${tags}</div>
                    `;
            list.appendChild(div);
        });
    } catch (error) {
        document.getElementById('posts-list').innerHTML = "<p style='color:red;'>Постторду жүктөөдө ката кетти.</p>";
    }
}

// Баарын иштетүү
loadMockProducts();
loadDummyProducts();
loadPosts();

async function fetchPosts() {
    const url = 'https://dummyjson.com/posts';
    const container = document.getElementById('posts-container');

    try {
        const response = await fetch(url);
        const data = await response.json();

        // DummyJSON постторду 'posts' массивинин ичинде берет
        const posts = data.posts;

        // Контейнерди тазалоо
        container.innerHTML = '';

        // Ар бир постту экранга чыгаруу
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('post-card');

            // Тегдерди өзүнчө спан (span) кылып түзүү
            const tagsHTML = post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
            postCard.innerHTML = `
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-body">${post.body}</p>
                        <div class="tags">${tagsHTML}</div>
                        <div class="reactions">
                            <span>👍 Жактыруулар: ${post.reactions.likes || 0}</span> | 
                            <span>👎 Жактырбоолор: ${post.reactions.dislikes || 0}</span> | 
                            <span>👁 Көрүүлөр: ${post.views || 0}</span>
                        </div>
                    `;

            container.appendChild(postCard);
        });

    } catch (error) {
        console.error("Маалыматты алууда ката кетти:", error);
        container.innerHTML = "<p style='text-align:center; color:red;'>Постторду жүктөөдө ката келип чыкты.</p>";
    }
}

// Баракча ачылганда функцияны чакыруу
fetchPosts();



