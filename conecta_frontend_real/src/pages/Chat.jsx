
export default function Chat() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Chat</h2>
      <div className="border p-4 h-64 overflow-y-scroll mb-2">
        <p><strong>Juan:</strong> ¡Hola!</p>
        <p className="text-right"><strong>Tú:</strong> ¡Hola! ¿Cómo estás?</p>
      </div>
      <input className="w-full p-2 border rounded" placeholder="Escribe un mensaje..." />
    </div>
  );
}
