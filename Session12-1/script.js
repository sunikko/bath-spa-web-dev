const showAllItmes = () => {
    const _items = document.querySelectorAll(".item");
    for (let i=0; i<_items.length; i++){
        _items[i].style.display = "block";     
    }
}

const hideAllItems = () => {
    const _items = document.querySelectorAll(".item");
    for (let i=0; i<_items.length; i++){
        _items[i].style.display = "none";
    }
}

const filterItems = (type) => {
    hideAllItems();
    const filtered_items = document.querySelectorAll(type);
    for (let i=0; i<filtered_items.length; i++){
        filtered_items[i].style.display = "block";
    }
}

const btn = document.querySelectorAll(".btn");

for(let i=0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        if(btn[i].id == 'home')
            showAllItmes();
        else{
            let _id = "." + btn[i].id + "-item";
            filterItems(_id);
        }
    });
}
