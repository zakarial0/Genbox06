console.log("halo dunia");

// Module 

// load module
// sebuah module lokal yang dibuat oleh dev
const pi = require('./pi') //es5
// import {pi} from "./pi"; //es6

// untuk mempermudah dalam membuat module disarankan menggunakan nama yang sama
console.log(pi);
// diatas contoh local module 

// core module
// module bawaan dari node
const fs = require('fs')

    // fs.writeFile('file.txt','Hallo Semua', (err) => {
    //     if (err) throw err;
    // })
// module dari node ada banyak, baca doc di webnya juga agak ribet

// callback
// sebuah fungsi yang menerima function lain sebagain parameter
// let test = (a) => {
//     console.log(a);
// }
// let coba = (b, c) => {
//     c(b)
// }
// coba("dede zakaria", test)
// c menerima sebuah function b

// list
// 1. forEach
    // let array = [1,2,3]
    // array.forEach((item) => {
    //     console.log(item);
    // })

// 2.
    let time = document.querySelector("span")
    let sec = 1
    let waktu = setInterval(() => {
    time.innerHTML = sec;
    sec++
    },1000)

// 3.
    let input = document.querySelector("input")
    let small = document.querySelector("small")

        input.addEventListener('input', () => {
            small.innerHTML = input.value
        })
// 4.
    function menu() {
        bank();
    }
// third party module (npm)
