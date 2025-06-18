
export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <input placeholder="Correo" className="w-full mb-2 p-2 border rounded" />
      <input type="password" placeholder="Contraseña" className="w-full mb-2 p-2 border rounded" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
    </div>
  );
}
