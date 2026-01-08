'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const router = useRouter();
  const [nomeUsuario, setNomeUsuario] = useState('');

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuario_logado');
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado);
      setNomeUsuario(usuario.nomeCompleto);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuario_logado');
    router.push('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-50">
      <div className="px-8 py-4 flex justify-between items-center">
        {/* Título */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Painel de Controle</h1>
          <p className="text-gray-500 text-sm">Bem-vindo ao GestorBeer</p>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-gray-800 font-medium">{nomeUsuario || 'Usuário'}</p>
            <p className="text-gray-500 text-sm">Administrador</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
