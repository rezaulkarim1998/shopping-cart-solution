
function updateProductNumber(product,price, isIncrassing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(isIncrassing){
        productNumber = parseFloat(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseFloat(productNumber) - 1;
    }
    // update total 
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case')* 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalPrice = subTotal + tax;
    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammunt').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone encrase decrase event 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
 })
 document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false);
 })

// handle encrase case decrase event 
document.getElementById('case-plus').addEventListener('click', function(){   
     updateProductNumber('case', 59,  true);
})
document.getElementById('case-minus').addEventListener('click', function(){    
     updateProductNumber('case', 59 , false);    
})
