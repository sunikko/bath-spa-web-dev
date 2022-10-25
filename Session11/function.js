
var input = document.getElementById("itemInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addItemBtn").click();
  }
});

const itemList = [];

function addItemToList(){
    let itemObj = document.getElementById("itemInput");
    let itemValue = itemObj.value;
    
    console.log(itemValue, itemList, itemValue in itemList);

    if(itemList.includes(itemValue)){
        alert("Sorry "+itemValue+" is already in the list.");
    }else{
        document.getElementById("result").innerHTML +=  `<li>${itemValue}</li>`;
        // document.getElementById("result").innerHTML = itemList;
        itemList.push(itemValue);
        itemObj.value = '';
    }
}


