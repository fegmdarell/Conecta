
const sugerencias = ["EcoSAS", "Turismo Express", "Comercial Rápida"];

export default function Matches() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sugerencias de conexión</h2>
      <ul>
        {sugerencias.map((s, i) => (
          <li key={i} className="mb-2 p-4 border rounded flex justify-between">
            <span>{s}</span>
            <button className="bg-green-500 text-white px-3 py-1 rounded">Conectar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
