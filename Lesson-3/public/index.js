"use strict";
console.log("Hello I am index.ts");
var form = document.querySelector('form');
var input = document.querySelector('input');
form.addEventListener("click", function (event) {
    event.preventDefault();
    var data = {
        userName: input.value,
    };
    console.log(data);
});
