const filterItems = (type) => {
    const _items = document.querySelectorAll(".item");
    for (let i=0; i<_items.length; i++){
        if(type == ".home-item")
            _items[i].style.display = "block";
        else
            _items[i].style.display = "none";
    }
    const filtered_items = document.querySelectorAll(type);
    for (let i=0; i<filtered_items.length; i++){
        filtered_items[i].style.display = "block";
    }
}

const btn = document.getElementsByClassName("btn");

for(let i=0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        let _id = "." + btn[i].id + "-item";
        filterItems(_id);
    });
}
