let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let info= count+" - "
    saveEl.textContent+=info
    console.log(count)
    count=0
    countEl.textContent = count
}


