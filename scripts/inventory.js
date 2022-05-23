
let getData = JSON.parse(localStorage.getItem("products"));
console.log(getData);

getData.map(function(element, index){

    let container = document.getElementById("all_products");

    let box = document.createElement("div");

    let imgD = document.createElement("img");
    imgD.src = element.image;

    let typeD = document.createElement("h4");
    typeD.innerText = element.type;

    let descD = document.createElement("p");
    descD.innerText = element.desc;

    let priceD = document.createElement("p");
    priceD.innerText = element.price;

    //console.log(imgD, typeD, descD, priceD);

    let button = document.createElement("button");
    button.innerText = "Remove";
    button.setAttribute("id", "remove_product");
    button.addEventListener("click", function(element){

        removeItem(element, index)
    })

    box.append(imgD, typeD, descD, priceD, button);
    container.append(box);
})

function removeItem(element, index){

    getData.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(getData));
    window.location.reload();
}