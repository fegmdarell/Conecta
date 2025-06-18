
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import Chat from "./pages/Chat";
import Help from "./pages/Help";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <div className="min-h-screen flex">
      <nav className="w-60 bg-blue-800 text-white p-4 space-y-2">
        <h1 className="text-xl font-bold mb-4">Conecta</h1>
        <Link to="/" className="block">Login</Link>
        <Link to="/register" className="block">Registro</Link>
        <Link to="/dashboard" className="block">Dashboard</Link>
        <Link to="/profile" className="block">Perfil</Link>
        <Link to="/matches" className="block">Sugerencias</Link>
        <Link to="/chat" className="block">Chat</Link>
        <Link to="/pricing" className="block">Planes</Link>
        <Link to="/help" className="block">Ayuda</Link>
      </nav>
      <main className="flex-1 p-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/help" element={<Help />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
    </div>
  );
}
