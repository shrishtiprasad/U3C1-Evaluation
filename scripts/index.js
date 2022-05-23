//store the products array in localstorage as "products"

let arr = [];

function Product(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}
function addData(event){

    event.preventDefault();

    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new Product(type, desc, price, image);
    
    arr.push(p1);
    console.log(arr);

    localStorage.setItem("products", JSON.stringify(arr));  

    window.location.reload();
}