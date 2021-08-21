//Calculate the total
function calculateTotal() {
    const memTotal = parseInt(document.getElementById('memory-price').innerText);
    const strTotal = parseInt(document.getElementById('storage-price').innerText);
    const delTotal = parseInt(document.getElementById('delivery-price').innerText);
    let calcTotal = memTotal + strTotal + delTotal;
    //console.log(calcTotal);
    return calcTotal;
}


//Set current values
function changeLocalPrice(priceLocal, sent) {
    //console.log('yeh');
    document.getElementById(priceLocal).innerText = sent;
    const getTotal = calculateTotal();
    document.getElementById('total-price').innerText = getTotal + 1299;
    document.getElementById('final-price').innerText = getTotal + 1299;
}

//Set valus by calling another function
function memorybtnPPress(btnP) {
    //console.log('success');
    if (btnP == '8gb-btn') {
        changeLocalPrice('memory-price', 0);
    }
    else if (btnP == '16gb-btn') {
        changeLocalPrice('memory-price', 180);
    }
    if (btnP == '256gb-btn') {
        changeLocalPrice('storage-price', 0);
    }
    else if (btnP == '512gb-btn') {
        changeLocalPrice('storage-price', 100);
    }
    else if (btnP == '1tb-btn') {
        changeLocalPrice('storage-price', 180);
    }
    if (btnP == 'free-delivery-btn') {
        changeLocalPrice('delivery-price', 0);
    }
    else if (btnP == 'cost-delivery-btn') {
        changeLocalPrice('delivery-price', 20);
    }
}

//Apply promocode and final calculate
function calculatePromo() {
    let finaltotal = parseInt(document.getElementById('final-price').innerText);
    //console.log(finaltotal);
    let finalPriceAfterPromo = finaltotal - finaltotal * 20 / 100;
    console.log(finalPriceAfterPromo);
    document.getElementById('final-price').innerText = finalPriceAfterPromo;
}

//Promo function
function promoCode() {
    //console.log(promoCodeValue.value);
    document.getElementById('promo-code-btn').addEventListener('click', function () {
        const promoCodeValue = document.getElementById('promo-code').value;
        if (promoCodeValue == 'stevekaku') {
            document.getElementById('promo-code').value = '';
            calculatePromo();
        }
    })
}

//Click handler function
function catchTheElement(buttonPassed) {
    document.getElementById(buttonPassed).addEventListener('click', function () {
        memorybtnPPress(buttonPassed);
        //console.log('clisker');
    })
}
catchTheElement('8gb-btn');
catchTheElement('16gb-btn');
catchTheElement('256gb-btn');
catchTheElement('512gb-btn');
catchTheElement('1tb-btn');
catchTheElement('free-delivery-btn');
catchTheElement('cost-delivery-btn');
promoCode();
