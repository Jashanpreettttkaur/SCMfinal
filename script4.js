document.addEventListener("DOMContentLoaded", function () {
    const totalSpan = document.getElementById("totalPrice");
  
    // Dummy prices from the HTML
    const prices = [10.99, 5.98, 2.50];
    const total = prices.reduce((sum, val) => sum + val, 0);
    totalSpan.textContent = `$${total.toFixed(2)}`;
  });
  
  function placeOrder() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    if (!name || !address || !phone) {
      alert("Please fill in all required fields.");
      return;
    }
  
    alert("Order placed successfully!");
    // You can replace this with actual backend call
  }
  