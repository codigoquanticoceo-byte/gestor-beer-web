'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Usuario {
  id: number;
  login: string;
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

  const stats = [
    { titulo: 'Total de Vendas', valor: 'R$ 45.230,00', icone: '💰', cor: 'bg-blue-100 text-blue-700' },
    { titulo: 'Produtos em Estoque', valor: '1.234', icone: '📦', cor: 'bg-green-100 text-green-700' },
    { titulo: 'Usuários Ativos', valor: '12', icone: '👥', cor: 'bg-purple-100 text-purple-700' },
    { titulo: 'Ticket Médio', valor: 'R$ 450,00', icone: '🎟️', cor: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <div className="space-y-8">
      {/* Saudação */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo, {usuario?.nomeCompleto}! 🎉</h1>
        <p className="text-amber-100">Aqui está um resumo do seu negócio</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className={`${stat.cor} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}>
              {stat.icone}
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.titulo}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.valor}</p>
          </div>
        ))}
      </div>

      {/* Gráfico e Tabela */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Vendas Diárias (Últimos 7 dias)</h2>
          <div className="space-y-4">
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map((dia, i) => (
              <div key={dia} className="flex items-center gap-4">
                <span className="w-12 text-sm font-medium text-gray-600">{dia}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  />
                </div>
                <span className="text-gray-600 text-sm">R$ {Math.floor(Math.random() * 5000)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Produtos Mais Vendidos */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Produtos Mais Vendidos</h2>
          <div className="space-y-4">
            {['Chopp Premium', 'Cerveja Artesanal', 'Refrigerante', 'Água'].map((produto, i) => (
              <div key={produto} className="flex items-center justify-between">
                <span className="text-gray-600">{produto}</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                  {Math.floor(Math.random() * 100)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            ➕ Nova Venda
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            ➕ Novo Produto
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            ➕ Novo Fornecedor
          </button>
        </div>
      </div>
    </div>
  );
}
