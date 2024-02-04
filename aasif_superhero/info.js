var MD5 = require("crypto-js/md5");
// let ts = new Date().getTime();
// console.log(ts);
// console.log(MD5(ts).toString());


console.log(MD5(1+"ed615082ba1aeeb9a2bc93e43faca64ee2d8fd16"+"7269fb0c70af5fcbdc952a3bce50f685").toString());

// developer.marvel.com

// ts=1

// Your public key: 7269fb0c70af5fcbdc952a3bce50f685

// Your private key: ed615082ba1aeeb9a2bc93e43faca64ee2d8fd16

// hashkey=1a9d41554193f4d05560816ff1d0f12f


// comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// let urll=`developer.marvel.com/?ts=${ts}&apikey=7269fb0c70af5fcbdc952a3bce50f685&hash=${MD5(ts+"ed615082ba1aeeb9a2bc93e43faca64ee2d8fd16"+"7269fb0c70af5fcbdc952a3bce50f685").toString()}`
// MD5(ts+"ed615082ba1aeeb9a2bc93e43faca64ee2d8fd16"+"7269fb0c70af5fcbdc952a3bce50f685").toString()

// var xhrr = new XMLHttpRequest();
// xhrr.open('get', urll, true);
// xhrr.send();
// xhrr.onload = function(){
//     jsonresponsee = JSON.parse(xhrr.response);
//     console.log(jsonresponsee);
//     if(jsonresponsee.meals == null){
//         location.reload();
//     }}
    


// https://gateway.marvel.com/v1/public/comics?ts=1&apikey=7269fb0c70af5fcbdc952a3bce50f685&hash=1a9d41554193f4d05560816ff1d0f12f