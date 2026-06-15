// // let obj = {}
// // let box = new Object()

// // console.log(obj);
// // console.log(box);

// // let user = {
// //     name: "Ali",
// //     age: "16",
// // }

// // user.name = "ASKAT"
// // user.city = "Osh"
// // user.student = "false"

// // user["name"] = "Bilal"
// // user["city"] = "Batken"

// // delete user.city
// // delete user.student



// // console.log(user);
// // console.log(user.name);



// // let admin = {
// //     name: " kabyl",
// //     age: 16,
// //     adress: {
// //         street: "Manas",
// //         number: 148,
// //     }
// // }

// // // admin.address.street = "Chui"
// // // user.city = "123"



// // console.log(admin);


// const block = document.querySelector(".block")

// let product = {
//     title: "Banan",
//     prince: 180,
//     image: "https://edadeal.ru/journal/240403-the-benefits-of-bananas/polza-bananov_hu187b67689381065d443709efabcdbb41_256089_1200x1200_fill_lanczos_smart1_3.png",
//     color: "yellow",
//     weight: 5

// }

// block.innerHTML = `<div class="card">
//       <img src= "${product.image}" />
//       <h2>${product.title}</h2>

// </div>`

// let array = [];
// letArr = new Array()

// console.log(array);


// let students = ["Ali", "Askat", "Bilal"]

// students[2] = "Biihan"
// students[3] = "Kabyl"

// students.push("Baisal")
// students.push("Aruuke")

// students.pop()

// students.unshift("Aktilek")
// students.unshift("aktan")

// students.shift()
// students.shift()

// console.log(students)
// console.log(students[1]);

// let numbers = [1, 5, 2, 9, 6, 8, 11, 3, 19, 15, 12, 13, 7, 21, 4, 27, 10, 25, 2, 34]

// let result = numbers.filter((item) => item >= 12
// )

// let output = numbers.filter((x) => x % 2 == 1)

// console.log(numbers);
// console.log(result);
// console.log(output)

let MyNumbers = [5, 12, 27, 8, 45, 19, 33, 20, 3, 50, 14, 22];

let result = MyNumbers.filter((item) => item >= 20);

console.log("number:", MyNumbers);
console.log("style:", result);

let pointList = [11, 24, 35, 48, 57, 62, 73, 86, 95, 100];


let oddNumbers = pointList.filter((x) => x % 2 == 1);

console.log("Numbers:", pointList);
console.log("Students:", oddNumbers);


let cashAmounts = [150, 233, 400, 555, 612, 705, 888, 921];


let evenNumbers = cashAmounts.filter((x) => x % 2 == 0);

console.log("result:", cashAmounts);
console.log("block:", evenNumbers);