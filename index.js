let x = 0;
let totalAmount = 0;


function getProductListTotal(productName,  quantity, price) {
    const tShirt = document.getElementById(productName).innerText;
    const shirtQunatity = document.getElementById(quantity).innerText;
    const shirtPrice = document.getElementById(price).innerText
    const shirtTotal = shirtQunatity * shirtPrice;

    const tableContainer = document.getElementById('table-container');
    x++;
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${x}</td>
        <td>${tShirt}</td>
        <td>${shirtQunatity}</td>
        <td>${shirtPrice}</td>
        <td>${shirtTotal}</td>

    `;
    tableContainer.appendChild(tr);
    document.getElementById('total-product').innerText = x;
    let total = parseFloat(shirtTotal);
   const a = totalAmount += total;
   document.getElementById('total-amount').innerText = a;

}

function eventWordFunctin(productName, productQuantity, productPrice, priceTotal) {
    const tableContainer = document.getElementById('table-container');
    x++;
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${x}</td>
        <td>${productName}</td>
        <td>${productQuantity}</td>
        <td>${productPrice}</td>
        <td>${priceTotal}</td>

    `;
    tableContainer.appendChild(tr);
    document.getElementById('total-product').innerText = x;
    let total = parseFloat(priceTotal);
    const a = totalAmount += total;
    document.getElementById('total-amount').innerText = a;
}






document.getElementById('first-card').addEventListener('click', function () {
    // const tShirt = document.getElementById('t-shirt').innerText;
    // const shirtQunatity = document.getElementById('shirt-quantity').innerText;
    // const shirtPrice = document.getElementById('shirt-price').innerText
    // const shirtTotal = shirtQunatity * shirtPrice;

    // const tableContainer = document.getElementById('table-container');
   
    // const tr = document.createElement('tr');
    // tr.innerHTML = `
    //     <td>${1}</td>
    //     <td>${tShirt}</td>
    //     <td>${shirtQunatity}</td>
    //     <td>${shirtPrice}</td>
    //     <td>${shirtTotal}</td>

    // `;
    // tableContainer.appendChild(tr);
    getProductListTotal('t-shirt',  'shirt-quantity', 'shirt-price')
    document.getElementById('first-card').setAttribute('disabled', true)


})
document.getElementById('shoes-btn').addEventListener('click', function () {
    getProductListTotal('shoes',  'shoes-quantity', 'shoes-price')
})
document.getElementById('pants-btn').addEventListener('click', function () {
    getProductListTotal('pants',  'pants-quantity', 'pants-price')
})
document.getElementById('belt-btn').addEventListener('click', function () {
    getProductListTotal('belt',  'belt-quantity', 'belt-price')
})
document.getElementById('apple btn').addEventListener('click', function (event) {
    const apple = event.target.parentNode.parentNode.children[0].innerText;
    const appleQuantity = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const applePrice = event.target.parentNode.parentNode.children[3].children[0].innerText;
    const applePriceTotal  = appleQuantity * applePrice;
    
    eventWordFunctin(apple, appleQuantity, applePrice, applePriceTotal)
    
})

