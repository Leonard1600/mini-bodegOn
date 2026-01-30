import React from "react";

function CartSummary({ cart, totalVES }) {
  if (cart.length === 0) {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-2">Carrito</h3>
        <p className="text-sm text-gray-500">
          No hay productos en el carrito.
        </p>
      </div>
    );
  }

  const buildWhatsAppMessage = () => {
    let message = "Hola, quiero hacer el siguiente pedido:%0A%0A";

    cart.forEach((item) => {
      message += `• ${item.qty} x ${item.name}%0A`;
    });

    message += `%0ATotal: Bs. ${totalVES.toLocaleString("es-VE", {
      minimumFractionDigits: 2,
    })}`;

    return message;
  };

  const whatsappNumber = "584142316762"; // 0414 2316762
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Carrito</h3>

      <ul className="space-y-2 mb-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between text-sm"
          >
            <span>
              {item.qty} × {item.name}
            </span>
            <span>
              Bs.{" "}
              {(item.priceUSD * item.qty * 38.5).toLocaleString("es-VE", {
                minimumFractionDigits: 2,
              })}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t pt-3 mb-4">
        <p className="font-semibold text-right">
          Total: Bs.{" "}
          {totalVES.toLocaleString("es-VE", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}

export default CartSummary;

