
document.addEventListener("DOMContentLoaded", () => {
    let basket = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-basket").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.closest(".food-item");
            const name = item.dataset.name;
            const price = parseFloat(item.dataset.price);

            basket.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(basket));

            document.getElementById("basket-count").textContent = basket.length;
        });
    });


    document.getElementById("basket-count").textContent = basket.length;
});
