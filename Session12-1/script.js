let pant = document.getElementById("pant");
let skirt = document.getElementById("skirt");
let tshirt = document.getElementById("t-shirt");
let blue = document.getElementById("blue");
let pink = document.getElementById("pink");
let yellow = document.getElementById("yellow");

const filterItems = (type) => {
    const _items = document.querySelectorAll(".item");
    for (let i=0; i<_items.length; i++){
        _items[i].style.display = "none";
    }
    const filtered_items = document.querySelectorAll(type);
    for (let i=0; i<filtered_items.length; i++){
        filtered_items[i].style.display = "block";
    }
}

pant.addEventListener("click", () => {
    filterItems(".pant-item");
});

skirt.addEventListener("click", () => {
    filterItems(".skirt-item");
});

tshirt.addEventListener("click", () => {
    filterItems(".t-shirt-item");
});

blue.addEventListener("click", () => {
    filterItems(".blue-item");
});

pink.addEventListener("click", () => {
    filterItems(".pink-item");
});

yellow.addEventListener("click", () => {
    filterItems(".yellow-item");
});
