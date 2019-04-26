if (document.readyState == 'loading') {
   
    document.addEventListener('DOMContentLoaded', decodeQueryString)
} else {
    
    decodeQueryString()
}

function decodeQueryString(){
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    var params = []
    for (var i = 0; i < queries.length; i++)
    {
        
        params[i] = queries[i].split(',')
        console.log(params[i])
        //for(var j = 0; j < 4; j++)
    }
    console.log(params)

    buildPage(params)
}

function buildPage(params){
    console.log(params)
        // var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        // for (var i = 0; i < cartItemNames.length; i++) {
        //     if (cartItemNames[i].innerText == title) {
        //         alert('This item is already added to the cart')
        //         return
        //     }
        // }
        for(var i = 0; i < params.length; i++ ){
            var cartRow = document.createElement('div')
            cartRow.classList.add('cart-row')
             var cartItems = document.getElementsByClassName('cart-items')[0]
    
            var title = params[i][0]
            var price = params[i][1]
            var imageSrc = params[i][2]
            var quantity = params[i][3]
            console.log(quantity)
            var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="${quantity}">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
        console.log(cartRowContents)
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

        }
    
  updateCartTotal()  
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
