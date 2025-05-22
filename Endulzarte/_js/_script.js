  function updateQuantity(productIndex, delta) {
    const quantitySpan = document.getElementById('quantity' + productIndex);
    let currentQuantity = parseInt(quantitySpan.innerText);
    const newQuantity = currentQuantity + delta;
    if (newQuantity >= 0) {
      quantitySpan.innerText = newQuantity;
    }
  }

  function sendEmail() {
    let body = "Detalles de la compra:\n";
    let total_price = 0;
    const item_price = 0.10;

    for (let i = 1; i <= 3; i++) {
      const quantity = parseInt(document.getElementById('quantity' + i).innerText);
      if (quantity > 0) {
        body += "Producto " + i + ": " + quantity + " unidades\n";
        total_price += quantity * item_price;
      }
    }

    if (total_price > 0) {
      body += "\nPrecio total: " + total_price.toFixed(2) + "€";
      const mailto_link = "mailto:jrecdor2301@g.educaand.es" +
                          "?subject=Compra" +
                          "&body=" + encodeURIComponent(body);
      window.location.href = mailto_link;
    } else {
      alert("Por favor, selecciona al menos un producto.");
    }
  }

  function change(page) {
    window.location.href = page;
}