

const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/img/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/img/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/img/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]
  const ArrayCart = []
const loadcomponent = ()=>{
    const loader = document.getElementById("loader")
    setTimeout(()=>{
        loader.classList.add("hide")
    }, 3000)    
}
window.addEventListener('scroll',changeBgColor)
 
function changeBgColor(){
    const navBar = document.querySelector("nav")
    if(window.scrollY >= 200){
        navBar.classList.add("change-Bg")
    }else{
        navBar.classList.remove("change-Bg")
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    loadcomponent()
})

const themeIcon = document.getElementById( "theme-btn" )


themeIcon.addEventListener( "click", () => {
    document.body.classList.toggle("dark")
    if( themeIcon.classList.contains("bx-moon") ){
        themeIcon.classList.replace("bx-moon", "bx-sun")
    }else{
        themeIcon.classList.replace("bx-sun", "bx-moon")
    }

})



const cart = document.getElementById("cart-container")
const menu = document.getElementById("menu-container")

const openCart = (menu)=>{
    menu.classList.remove("hide")
}
const closeCart = (menu)=>{
    menu.classList.add("hide")
}


const shopIcon = document.getElementById("cart-shop")

const closeShopIcon = document.getElementById("close-cart")


const menuIcon = document.getElementById("menu-shop")

const closeMenuIcon = document.getElementById("close-menu")

shopIcon.addEventListener("click",()=>{
    openCart(cart)
    menuIcon.classList.add("hide")
}  )

closeShopIcon.addEventListener("click", ()=>{
    closeCart(cart)
    menuIcon.classList.remove("hide")
})

menuIcon.addEventListener("click",()=>{
    openCart(menu)
    shopIcon.classList.remove("hide")
}  )

closeMenuIcon.addEventListener("click", ()=>{
    closeCart(menu)
})






function createItem( item ) {
    const contenedor = document.createElement("article")
    contenedor.classList.add("product")
    const contenedorImg = document.createElement("div")
    const contenedorText = document.createElement("div")
    contenedorText.classList.add("product-description")
    contenedorText.id=`${item.id}`

    const contenedorgrl = document.querySelector(".products")

    const name = document.createElement("h3")
    name.innerText = `${item.name}`
    name.classList.add("product-name")

    const price = document.createElement("h4")
    price.innerText = `$${item.price}.00`
    price.classList.add("product-price")

    const stock = document.createElement("h4")
    stock.innerText = `Stock: ${item.quantity}`
    stock.classList.add("product-stock")

    const img = document.createElement("img")
    img.src = `${item.image}`
    img.classList.add( "img-product" )

    const btn = document.createElement("button")
    btn.innerText = `+`
    btn.classList.add("add-to-cart")
    
    contenedorImg.appendChild( img )
    contenedor.appendChild(contenedorImg)
    contenedorText.appendChild(btn)
    contenedorText.appendChild( price )
    contenedorText.appendChild( stock )
    contenedorText.appendChild( name)

    

    contenedor.appendChild(contenedorText)
    
    contenedorgrl.appendChild(contenedor)
    cartFunctionality(btn)

}

items.forEach(item => createItem(item))
let itemsCounter = 0
let totalPrice = 0


function cartFunctionality(button){
   
    button.addEventListener("click", e => {

        const id = parseInt(e.target.parentElement.id)
        const selectedProduct = items.find( item => item.id === id )
        let index = ArrayCart.indexOf(selectedProduct)
        if(index>=0){
            if(ArrayCart[index].quantity<= ArrayCart[index].cantidad){
                alert("no hay stock")
            }else{
                ArrayCart[index].cantidad++
                itemsCounter += 1
                totalPrice += selectedProduct.price 
            }
        }else{
            selectedProduct.cantidad=1
            ArrayCart.push(selectedProduct)
            itemsCounter += 1
                totalPrice += selectedProduct.price
        }
        //
        Changetext(".cart-items", `${itemsCounter} items`)
        Changetext(".cart-price",`$${totalPrice}.00`)
        Changetext("#cart-counter",itemsCounter)

        show(ArrayCart) 
    })
    
       
}
function show(array){
    const div = document.querySelector(".cart-content")
    
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    array.forEach(item=>{

        createItemCart(item,div)
    })
}

function Changetext(old, newText){
    const tag=document.querySelector(old)
    tag.innerText=newText
}


function createItemCart( item ) {
    const contenedorgrl = document.querySelector(".cart-content")
    const contenedor = document.createElement("article")
    contenedor.classList.add("cart-item")

    const contenedorImg = document.createElement("div")
    contenedorImg.classList.add("cart-product-image")

    const contenedorText = document.createElement("div")
    contenedorText.classList.add("cart-item-description")
    contenedorText.id=`${item.id}`

    const stockAndPrice = document.createElement("div")
    stockAndPrice.classList.add("stock-and-price")

    const btnsCantidad = document.createElement("div")
    btnsCantidad.classList.add("btns-cantidad")

    const name = document.createElement("h3")
    name.innerText = `${item.name}`
    name.classList.add("cart-item-name")

    const price = document.createElement("h4")
    price.innerText = `$${item.price}`
    price.classList.add("cart-item-price")
    price.classList.add("red")

    const subT = document.createElement("h4")
    subT.innerText = `Subtotal: $${item.price*item.cantidad}`
    subT.classList.add("cart-item-subTotal")
    subT.classList.add("red")

    const stock = document.createElement("h4")
    stock.innerText = `Stock: ${item.quantity}`
    stock.classList.add("cart-item-stock")
    

    const units = document.createElement("h4")
    units.innerText = `${item.cantidad} units`
    units.classList.add("cart-item-units")

    const img = document.createElement("img")
    img.src = `${item.image}`
    img.classList.add( "img-cart-item" )

    const btn = document.createElement("button")
    btn.innerText = `+`
    btn.classList.add("delete")
    const btn2 = document.createElement("button")
    btn2.innerText = `-`
    btn2.classList.add("add")
    
    const trash = document.createElement("i")
    trash.classList.add("bx")
    trash.classList.add("bx-trash-alt")
    trash.classList.add("red")

    contenedorImg.appendChild( img )
    contenedor.appendChild(contenedorImg)
    stockAndPrice.appendChild( stock )
    stockAndPrice.appendChild( price )
    btnsCantidad.appendChild(btn)
    btnsCantidad.appendChild( units)
    btnsCantidad.appendChild(btn2)

    contenedorText.appendChild(name)
    contenedorText.appendChild(stockAndPrice)
    contenedorText.appendChild( subT)
    contenedorText.appendChild(btnsCantidad)
    

    

    contenedor.appendChild(contenedorText)
    contenedor.appendChild(trash)
    contenedorgrl.appendChild(contenedor)

}
