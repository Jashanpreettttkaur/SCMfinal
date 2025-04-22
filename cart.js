document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    function updateCartDisplay() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - Rs.${item.price}
                <button class="remove-button" data-index="${index}">Remove</button>
            `;
            cartList.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
        localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
    }

    cartList.addEventListener("click", function(e) {
        if (e.target.classList.contains("remove-button")) {
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1); // Remove the item
            updateCartDisplay();
        }
    });

    updateCartDisplay();
});

