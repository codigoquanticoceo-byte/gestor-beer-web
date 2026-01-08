'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
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

  const handleBack = () => {
    router.back();
  };

  const abas = [
    { nome: 'Cadastros', href: '/dashboard/cadastros', icon: '📋' },
    { nome: 'Frente Caixa', href: '/dashboard/caixa', icon: '💳' },
    { nome: 'Financeiro', href: '/dashboard/financeiro', icon: '💰' },
    { nome: 'Nota Fiscal', href: '/dashboard/notafiscal', icon: '📄' },
    { nome: 'Configurações', href: '/dashboard/configuracoes', icon: '⚙️' },
  ];

  return (
    <header className="bg-green-700 text-white">
      {/* Barra Superior */}
      <div className="flex items-center justify-between px-6 py-3 bg-green-700">
        {/* Lado Esquerdo */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold transition"
          >
            ← Voltar
          </button>
        </div>

        {/* Abas no Centro */}
        <div className="flex gap-2 flex-1 ml-6">
          {abas.map((aba) => {
            const isActive = pathname === aba.href;
            return (
              <Link
                key={aba.href}
                href={aba.href}
                className={`px-4 py-2 rounded font-semibold transition flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-green-700'
                    : 'bg-green-600 hover:bg-green-600 text-white'
                }`}
              >
                <span>{aba.icon}</span>
                {aba.nome}
              </Link>
            );
          })}
        </div>

        {/* Lado Direito */}
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold transition"
        >
          🚪 Sair
        </button>
      </div>
    </header>
  );
}
