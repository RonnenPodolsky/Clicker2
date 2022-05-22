let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

const setCounter = () => countEl.textContent = count;

const incerement = () => {
    if (count === 10){
        alert("no more than 10!")
        saveEntry()
    }
    else{
        count += 1;
        setCounter();
    }
}

const remove = () => {
    saveEl.textContent = "Previous entries: ";
    count = 0;
    setCounter();
}

const saveEntry = () => {
    let countString = count + " - ";
    saveEl.textContent += countString;
    count = 0;
    setCounter();
}