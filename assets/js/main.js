

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
const loadcomponent = ()=>{
    const loader = document.getElementById("loader")
    setTimeout(()=>{
        loader.classList.add("hide")
    }, 1000)    
}

document.addEventListener("DOMContentLoaded",()=>{
    loadcomponent()
})

const themeIcon = document.getElementById( "theme-btn" )


themeIcon.addEventListener( "click", () => {
    //element.classList.toggle("clase")
    //Si la clase NO existe, la agrega
    //Si la clase YA existe, la quita

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

    const contenedorgrl = document.querySelector(".products")

    const name = document.createElement("h3")
    name.innerText = `${item.name}`
    name.classList.add("product-name")

    const price = document.createElement("h4")
    price.innerText = `$${item.price}`
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
}

items.forEach(item => createItem(item))
