'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { nome: 'Dashboard', href: '/dashboard', icon: '📊' },
    { nome: 'Cadastros', href: '/dashboard/cadastros', icon: '📋' },
    { nome: 'Frente de Caixa', href: '/dashboard/caixa', icon: '💳' },
    { nome: 'Vendas', href: '/dashboard/vendas', icon: '🛍️' },
    { nome: 'Orçamentos', href: '/dashboard/orcamentos', icon: '📄' },
    { nome: 'Financeiro', href: '/dashboard/financeiro', icon: '💰' },
    { nome: 'Relatórios', href: '/dashboard/relatorios', icon: '📈' },
    { nome: 'Configurações', href: '/dashboard/configuracoes', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-amber-900 text-white min-h-screen p-4 fixed left-0 top-0">
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-amber-100">🍺 GestorBeer</h2>
        <p className="text-amber-300 text-sm">Gestão Inteligente</p>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-amber-700 text-white'
                  : 'text-amber-100 hover:bg-amber-800'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.nome}
            </Link>
          );
        })}
      </nav>

      {/* Rodapé */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors">
          Sair
        </button>
      </div>
    </aside>
  );
}
