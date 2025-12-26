export function generateHTML(product){
   return`
    <div class="eachbox" data-aos="fade-up" data-aos-duration="2000">
        <img src="${product.photos}" width="300px"/>
        <p class="productname">${product.name}</p>
        <p class="pricename">${product.price} $</p>
        <div class="icons">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
   ` 
}