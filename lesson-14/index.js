let user = "Askat"

console.log(user);
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
// console.log(user[3]);
// console.log(user[4]);


// for (let i = 0; i < 4; i = i + 2) {
//     console.log(user[i])


// }


// for (let i = 0; i <= 20; i = i + 1) {
//     if (i % 3 == 2) {
//         console.log(i)
//     }
// }


// let a = 7;

// //  a + 4

// a += 5
// a++

// console.log(a);


// for (let i = 0; i <= 6; i++) {
//     if (i == 4) {
//         continue;
//     }
//     console.log(i)
// }


// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "Ali"]

// console.log(number.length);
// for (let i = 0; i < 12; i++) {
//     if (number[i] % 2 == o) {

//     }
//     console.log(number[i])
// }

// let product = ["Alma", "Darbyz", "Juzum", "Almurut"]


// for (let i = 0; i < product.length; i++) {
//     if (product[i] == "Juzum") {
//         continue
//     }
//     console.log(product[i])


// }

// let work = []

// for (let i = 1; i <= 100; i++) {
//     work.push(i)
//     let work = []

// }


let work = []

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        work.push(i)
    }
}

console.log(work)


let numbers = []

for (let num = 5; num <= 100; num += 2) {
    numbers.push(num)
}

console.log(numbers)


let data = []

for (let value = 7; value <= 100; value += 2) {
    data.push(value)
}

console.log(data)

