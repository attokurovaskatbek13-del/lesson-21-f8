let user = [
    {
        name: "Eldar",
        age: 16,
        student: true,
        id: 1,
    },
    {
        name: "Bilal",
        age: 16,
        student: false,
        id: 2,
    },
    {
        name: "Biihan",
        age: 17,
        student: true,
        id: 3,
    },
]


const box = document.getElementById("box")

box.innerHTML = user.map((item) => {
    return `<div class ="user">
    <h4>${item.name}</h4>
    <P>${item.age}</p>
    
    </div>`
}).join("")

// api 

const content = document.getElementById("content")

function getPost() {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        return response.json()
    }).then((todo) => {
        console.log(todo);
        content.innerHTML = todo.post(0, 10).map((item) => {
            return `<div>
            <h3>${item.title}</h3>
            </div>`
        }).join("")
    })


}

getPost()



// api 

const Gun = document.getElementById("Gun")

function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        content.innerHTML = todo.content(0, 10).map((item) => {
            return `<div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            </div>`
        }).join("")
    })


}

getData()


const block = document.getElementById("block")

function getblok() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        return res.json()
    }).then((blok) => {
        console.log(blok);
        content.innerHTML = todo.blok(0, 10).map((item) => {
            return `<div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            </div>`
        }).join("")
    })


}

getblok()




const style = document.getElementById("style")

function getcontent() {
    fetch("https://dummyjson.com/recipes").then((res) => {
        return res.json()
    }).then((data) => {
        console.log(content);
        content.innerHTML = data.sricle(0, 10).map((item) => {
            return `<div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            </div>`
        }).join("")
    })


}

getdata()


