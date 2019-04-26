if (document.readyState == 'loading') {
   
    document.addEventListener('DOMContentLoaded', ready)
} else {
    
    ready()
}
function ready() {
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    var purchaseButton = document.getElementsByClassName('btn-purchase')[0]
    console.log(purchaseButton)
    purchaseButton.addEventListener('click', createQueryString)
}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function createQueryString(){
    //get the items in the cart and their quantity
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    //setup four arrays, one for each product attribute that we care about
    var itemNames = []
    var itemImages = []
    var itemPrices = []
    var itemQuantities = []
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var nameElement = cartRow.getElementsByClassName('cart-item')[0]
        console.log(nameElement)
        console.log(nameElement.getElementsByClassName('cart-item-title')[0].innerText)
        itemNames[i] = nameElement.getElementsByClassName('cart-item-title')[0].innerText
        console.log(nameElement.firstElementChild.src)
        itemImages[i] = nameElement.firstElementChild.src
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        itemPrices[i] = price
        var quantity = quantityElement.value
        itemQuantities[i] = quantity
    }
    console.log(itemImages,itemNames,itemPrices,itemQuantities)
    //take all the items and construct a query string 
    var queryString = "?"
    for(var i = 0; i < itemNames.length; i++){
        queryString += itemNames[i] + ","
        queryString += itemPrices[i] + ","
        queryString += itemImages[i] + ","
        queryString += itemQuantities[i] 
            if(i != itemNames.length -1){
                queryString += "&"
            }
    }
    console.log(queryString)
    //route to checkout page w/ the query string
    window.location.href = "http://localhost:3030/checkout.html" + queryString;
 

    //need another function on the checkout page to parse the query string for the items and quantities 
   
}

