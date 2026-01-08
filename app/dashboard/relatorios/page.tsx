'use client';

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">📈 Relatórios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <p className="text-2xl mb-2">📊</p>
          <p className="font-bold text-lg">Relatório de Vendas</p>
          <p className="text-gray-600 text-sm">Análise detalhada de vendas por período</p>
        </button>
        <button className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <p className="text-2xl mb-2">📦</p>
          <p className="font-bold text-lg">Relatório de Estoque</p>
          <p className="text-gray-600 text-sm">Status completo do inventário</p>
        </button>
        <button className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <p className="text-2xl mb-2">💰</p>
          <p className="font-bold text-lg">Relatório Financeiro</p>
          <p className="text-gray-600 text-sm">Análise de receitas e despesas</p>
        </button>
        <button className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <p className="text-2xl mb-2">👥</p>
          <p className="font-bold text-lg">Relatório de Clientes</p>
          <p className="text-gray-600 text-sm">Histórico de compras dos clientes</p>
        </button>
      </div>
    </div>
  );
}
