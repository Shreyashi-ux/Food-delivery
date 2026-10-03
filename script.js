let cart = [];
let total = 0;



function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    document.getElementById("cart-count").innerText = cart.length;

    updateCart();

    document.getElementById("cart-popup").classList.add("show");
}



function updateCart() {

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p style='text-align:center;margin-top:40px;color:#777;'>Your cart is empty.</p>";

    } else {

        cart.forEach((item, index) => {

            cartItems.innerHTML += `
                <div class="cart-item">

                    <div>
                        <strong>${item.name}</strong>
                        <p>₹${item.price}</p>
                    </div>

                    <span onclick="removeItem(${index})"
                          style="cursor:pointer;color:#f4511e;">
                        Remove
                    </span>

                </div>
            `;

        });
    }

    document.getElementById("cart-total").innerText = total;
}




function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    document.getElementById("cart-count").innerText = cart.length;

    updateCart();
}




function closeCart() {

    document.getElementById("cart-popup").classList.remove("show");

}


// CLICK CART ICON

document.querySelector(".cart").addEventListener("click", function () {

    document.getElementById("cart-popup").classList.add("show");

});



function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert(
            "Order placed successfully! 🎉\n\nTotal: ₹" +
            total
        );

        cart = [];
        total = 0;

        document.getElementById("cart-count").innerText = "0";

        updateCart();

        closeCart();
    }
}



const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", function () {

        categories.forEach(item =>
            item.classList.remove("active")
        );

        this.classList.add("active");

    });

});