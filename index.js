
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let canceledEl = document.getElementById("canceled-el")

let orders = totalOrders(saveEl + count);
document.getElementById("orders").innerHTML = orders;

function totalOrders() {
return saveEl + count;

}

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    canceledEl.textContent = count
}

function save() {
    let countStr = count + " , "
    let countStrDe = count - " , "
    saveEl.textContent += countStr
    canceledEl.textContent -= countStrDe
    countEl.textContent = 0
    count = 0
}



