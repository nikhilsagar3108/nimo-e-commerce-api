async function getAllData() {
    let str = '';
    let data = await axios.get('https://fakestoreapi.com/products');
    console.log(data.data);
    data.data.forEach((items) => {
        str += `
        <div class = "col-sm-4 mt-4">
        <div class="card">
        <img class="card-img-top image" src="${items.image}" alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${items.title.slice(0,20)}</h4>
          <p class="card-text">${items.price}</p>
          <a class="btn btn-primary"  onclick = "saveProductDetails(${items.id})">View</a>
        </div>
      </div>
      </div>`
    });
    document.getElementById("result").innerHTML = str;
}
getAllData();
// get all categories

async function getAllCategories(){
let get_str = "";
let categories = await axios.get('https://fakestoreapi.com/products/categories');
console.log("categories",categories.data);
categories.data.forEach((items)=>{
    get_str += `<a class="dropdown-item" onclick = "getCategoryProduct(this)" href="#">${items}</a>`
})
document.getElementById('categ').innerHTML = get_str;
}
getAllCategories();

// get category wise product
 async function getCategoryProduct(getcate_data){
let cat_str = '';
let get_category = getcate_data.innerText;
console.log(get_category,"response" )
let res = await axios.get(`https://fakestoreapi.com/products/category/${get_category}`);
    console.log(res,"response");
    res.data.forEach((items) => {
        cat_str += `
        <div class = "col-sm-4 mt-4">
        <div class="card">
        <img class="card-img-top image" src="${items.image}" alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${items.title.slice(0,20)}</h4>
          <p class="card-text">${items.price}</p>
          <a class="btn btn-primary" onclick = "saveProductDetails(${items.id})">View</a>
        </div>
      </div>
      </div>`
    });
    document.getElementById("result").innerHTML = cat_str;
}
getAllCategories();

//  Product Details
 async function saveProductDetails(product_id){
    let product = await axios.get(`https://fakestoreapi.com/products/${product_id}`);
    localStorage.setItem("singleproduct", JSON.stringify(product.data));
    window.location = ("product.html");
}
// show product on product page
