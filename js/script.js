$(document).ready(function () {
    let cart = [];
    let total = 0;

    $(".add-to-cart").click(function () {
        const productName = $(this).closest('[data-role="content"]').find('h3').text();
        const productPrice = 699; // Could be made dynamic
        
        cart.push({
            name: productName,
            price: productPrice
        });
        
        total += productPrice;
        updateCart();
        alert(`${productName} added to cart!`);
    });

    function updateCart() {
        $("#cart-items").empty();
        
        cart.forEach(item => {
            $("#cart-items").append(
                `<li>
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                </li>`
            );
        });
        
        $("#total-amount").text(`$${total}`);
        $("#cart-items").listview("refresh");
    }
});
