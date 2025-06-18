
export default function Pricing() {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Planes y Precios</h2>
      <div className="mb-4 p-4 border rounded">
        <h3 className="text-xl font-semibold">Gratis</h3>
        <p>Acceso a funciones básicas y coincidencias limitadas.</p>
      </div>
      <div className="p-4 border rounded">
        <h3 className="text-xl font-semibold">Premium</h3>
        <p>Visibilidad prioritaria, más conexiones y soporte dedicado.</p>
        <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded">Suscribirse</button>
      </div>
    </div>
  );
}
