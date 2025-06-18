
export default function Profile() {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tu Perfil</h2>
      <input placeholder="Empresa" className="w-full mb-2 p-2 border rounded" />
      <input placeholder="Sector" className="w-full mb-2 p-2 border rounded" />
      <textarea placeholder="Descripción" className="w-full mb-2 p-2 border rounded" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
    </div>
  );
}
