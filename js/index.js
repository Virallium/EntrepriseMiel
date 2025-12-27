import { data } from "./data.js";
import { generateHTML } from "./function.js";
const container=document.querySelector(".productscontainer")
const AfficherProduits=(products)=>{
    products.forEach(product => {

        if(container===""){
            const message=document.createElement("h3")
            message.innerHTML="<p>Aucun Produit</p>"
            container.appendChild(message)
        }
        else{
            const HTMLbox=document.createElement("div")
            HTMLbox.innerHTML=generateHTML(product)
            HTMLbox.classList.add("boxeach")
            container.appendChild(HTMLbox)
            const dialog=document.createElement("dialog")
                dialog.innerHTML=`
                    <div class="dgcontent">
                        <i class="fa-solid fa-x" id="close"></i>
                        <img src="${product.photos}" width="300px"/>
                        <div class="texts">
                            <p>${product.name}</p>
                            <p>${product.price}$</p>
                        </div>
                        <a href="#">Commander</a>
                    </div>
                `
            document.body.appendChild(dialog)
            HTMLbox.addEventListener("click", ()=>{
                dialog.showModal()
                dialog.classList.add("dialogOpen")
                dialog.classList.remove("removeDialog")
            })
            const closed=dialog.querySelector("#close")
            closed.addEventListener("click", ()=>{
                dialog.close()
                dialog.classList.add("removeDialog")
                dialog.classList.remove("dialogopen")
            })
        }

    });
}
AfficherProduits(data)