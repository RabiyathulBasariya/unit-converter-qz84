let meter = 3.281;
let liter = 0.264;
let kilogram = 2.204;

let ipt = document.getElementById("ipt");
let btn = document.getElementById("btn");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

function convert() {
    if (ipt.value === '' || ipt.value === '0') {
        a.textContent = b.textContent = c.textContent = "Please Enter a Valid Number";
        return;
    }
    let meters = `${ipt.value} meters = ${(ipt.value * meter).toFixed(3)} feet | ${ipt.value} feet = ${(ipt.value / meter).toFixed(3)}  meters`;
    a.textContent = meters;
    let liters = `${ipt.value} liters = ${(ipt.value * liter).toFixed(3)} gallons | ${ipt.value} gallons = ${(ipt.value / liter).toFixed(3)} liters`;
    b.textContent = liters;
    let kilos = `${ipt.value} kilos = ${(ipt.value * kilogram).toFixed(3)} pounds | ${ipt.value} pounds = ${(ipt.value / kilogram).toFixed(3)} kilos`
    c.textContent = kilos;
}

btn.addEventListener("click", convert);

convert();

