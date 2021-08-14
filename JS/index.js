// DOM Selection
// Click on the add to cart and show the number of order in the badge
// Click on the add to cart and show the price of the product in the cart



// Adding the amount of order using function
let numberOfOrderCount = 0
// let totalPriceCount = 0
function cart(){
    let numberOfOrder = document.querySelector("#numberOfOrder")
    let totalOrder = numberOfOrder.innerText = ++numberOfOrderCount;
    totalOrder;

    // Getting Price Together
    let price = document.querySelector("#price").innerText;
    let priceTotalCount = price * numberOfOrderCount
    document.querySelector("#totalPrice").innerText = priceTotalCount


}