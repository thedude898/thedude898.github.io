let perdun = document.getElementById("buffon");
let fib = [1,1]
let numero = 0
function sasi(){
        numero = fib[fib.length-1]
        fib.push(fib[fib.length-1] + fib[fib.length-2])
        perdun.textContent = "fibonach perdach: " + String(numero)
        state = 1
}