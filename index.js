// let a=10;
// let b=20;
// let check = new Promise((resolve,reject), ()=>{
//     setTimeout(() =>{
//         let b=20
//         resolve(b);
//     },2000)
// })
// check.then((b)  =>{
//     console.log(a+b)
// })

// let a = 10;
// let b = 15

// useing a promises

// let check = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let b = 20; // This might be intended to be a different value, but I'm assuming 20 for now
//         resolve(b);
//     }, 2000);
// });

// check.then((b) => {
//     console.log(a + b);
// });

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    
    console.log("sent a data by browser ",req.query.name)
    res.status(200).send({
        message: "hello"
    })
})

app.get('/about',(req,res)=>{
    res.status(200).send(" hii i m developer")
})

app.listen(5001, ()=>{
    console.log("hello i m online");
})