let btnDecrement = document.getElementById('btn-decrement');
let btnIncrement = document.getElementById('btn-increment');
let btnReset = document.getElementById('btn-reset');
let count = document.getElementById('count');

let counter = 0;

btnIncrement.onclick = function(){
    counter = counter + 1;
    count.textContent = counter;
}

btnDecrement.onclick = function(){
    counter = counter - 1;
    count.textContent = counter;
}

btnReset.onclick = function() {
    counter = 0;
    count.textContent = counter;
}