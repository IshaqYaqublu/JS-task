// var Person = {
//     ad: "Ishaq",
//     surname: "Yaqublu",
//     yas:23,
//     tevvelludu: function(){
//         return new Date().getFullYear() - this.yas
//     }
    
// }
// // console.log(Person.tevvelludu());

// var x= "10"
// var y = 10
// if(x===y){
//     alert("Duzgundur")
// }
// else{
//     alert("sehvdir")
// }
// console.log(`Salam :${x} Aleykum: ${y}`)
// var z = y>5 ? "Salam" : "Goodbye";


// var d = "Insan"
// switch (d){
//     case "Canavar":
//         alert("Canavarsan sen ?")
//         break;
//     case "Akula":
//         alert("Akulasan sen ?")
//         break;
//     case "Insan":
//         alert("HERRII")
//         break;
//     case "Qartal":
//         alert("Qartalsan sen ?")
//         break;
// }
// function canavar(){
//     var _div = document.getElementById('First');

//     if(_div.style.backgroundColor ==="black"){
//         _div.style.backgroundColor = "blue"

//     }
//     else{
//         _div.style.backgroundColor = "black"
//     }
// }
// console.log(Math.floor(Math.random()*100));

// var tarix = new Date().getHours();
// console.log(tarix)

var date = new Date().getHours();
var body = document.getElementById("boody");

if(date >=0 && date<6){
    body.style.backgroundColor === "blue"
    body.style.backgroundColor = "black"
}
else if(date>=6 && date<12){
    body.style.backgroundColor = "white"
}
else if(date>=12 && date<20){
    body.style.backgroundColor = "purple"
}
else if(date>=20 && date<24){
    body.style.backgroundColor = "orange"
}
