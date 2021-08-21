// adding all cost price from this function 
function priceAddition(suitableId, suitablePrice){
    let catchId = document.getElementById(suitableId)
    catchId.innerText = suitablePrice
}

// adding total amount and final total amount by all cost sum
function addTotal(){
    let updatedMemoryPrice = document.getElementById('memory-cost')
    let updatedMemoryPriceValue = parseFloat(updatedMemoryPrice.innerText)
    let updatedStoragePrice = document.getElementById('storage-cost')
    let updatedStoragePriceValue = parseFloat(updatedStoragePrice.innerText)
    let updatedDeliveryCost = document.getElementById('delivery-cost')
    let updatedDeliveryCostValue = parseFloat(updatedDeliveryCost.innerText)
    let total = updatedMemoryPriceValue+ updatedStoragePriceValue+updatedDeliveryCostValue
    // total sum
    let catchTotal = document.getElementById('total').innerText = total + 1299

    //final total sum
    document.getElementById('final-total').innerText = catchTotal
}

// all fetures button
document.getElementById('free-memory').addEventListener('click', function(){
    priceAddition('memory-cost', '0')
    addTotal()
})
document.getElementById('paid-memory').addEventListener('click', function(){
    priceAddition('memory-cost', '180')
    addTotal()
})
document.getElementById('free-storage').addEventListener('click', function(){
    priceAddition('storage-cost', '0')
    addTotal()
})
document.getElementById('medium-storage').addEventListener('click', function(){
    priceAddition('storage-cost', '100')
    addTotal()
})
document.getElementById('heigh-storage').addEventListener('click', function(){
    priceAddition('storage-cost', '180')
    addTotal()
})
document.getElementById('free dalivery').addEventListener('click', function(){
    priceAddition('delivery-cost', '0')
    addTotal()
})
document.getElementById('paid-delivery').addEventListener('click', function(){
    priceAddition('delivery-cost', '20')
    addTotal()
})

// pomo code apply and discount 
document.getElementById('pomo-btn').addEventListener('click', function (){
    let pomoInput = document.getElementById('pomo-input')
    let pomoCode = pomoInput.value
    let finalTotal = document.getElementById('final-total')
    let totalPrice = document.getElementById('total')
    let totalPriceValue = parseFloat(totalPrice.innerText)

    // pomo code apply and get 20% discount
    if (pomoCode.toLowerCase() == 'stevekaku'){
        let discount = (totalPriceValue * 20) / 100
        let totalWithDiscount = totalPriceValue - discount
        let additionTotal = totalPrice.innerText = totalWithDiscount
        finalTotal.innerText = additionTotal
        pomoInput.value = ''
    }
})