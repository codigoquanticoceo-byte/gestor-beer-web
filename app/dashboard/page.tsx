'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Usuario {
  id: number;
  usuario: string;
  nomeCompleto: string;
  tipoPermissao: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuario_logado');
    if (!usuarioLogado) {
      router.push('/login');
    } else {
      setUsuario(JSON.parse(usuarioLogado));
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div className="text-center text-xl">Carregando...</div>;
  }

  const atalhos = [
    {
      titulo: 'Vendas Hoje',
      descricao: 'Atualize o módulo Frente de Caixa',
      link: '/dashboard/caixa',
      cor: 'green'
    },
    {
      titulo: 'Clientes Cadastrados',
      descricao: 'Sincronize pelo módulo Cadastros',
      link: '/dashboard/cadastros',
      cor: 'blue'
    },
    {
      titulo: 'Produtos Ativos',
      descricao: 'Dados vindos do módulo Produtos',
      link: '/dashboard/cadastros',
      cor: 'green'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Logo e Bem-vindo */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
            <span className="text-6xl">🍺</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold">GestorBeer – Sistema de Gestão de Bebidas</h1>
        <p className="text-gray-600">
          Bem-vindo(a), Usuário admin. Selecione um módulo abaixo para começar.
        </p>
      </div>

      {/* Atalhos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {atalhos.map((atalho, idx) => {
          const corBorder = atalho.cor === 'green' ? 'border-green-500' : 'border-blue-500';
          const corDot = atalho.cor === 'green' ? 'bg-green-500' : 'bg-blue-500';
          
          return (
            <Link
              key={idx}
              href={atalho.link}
              className={`bg-white border-t-4 ${corBorder} rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer`}
            >
              <div className={`w-1 h-8 ${corDot} mb-4`}></div>
              <h3 className="text-lg font-bold text-gray-900">{atalho.titulo}</h3>
              <p className="text-gray-600 text-sm mt-2">{atalho.descricao}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
