'use client';

export default function FinanceiroPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">💰 Financeiro</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Receitas do Mês</p>
          <p className="text-3xl font-bold text-green-600 mt-2">R$ 12.500,00</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Despesas do Mês</p>
          <p className="text-3xl font-bold text-red-600 mt-2">R$ 3.200,00</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Saldo</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">R$ 9.300,00</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Últimas Transações</h2>
        <p className="text-gray-600">Nenhuma transação registrada</p>
      </div>
    </div>
  );
}
