'use client';

export default function FinanceiroPage() {
  return (
    <div className="space-y-6">
      <div className="bg-green-700 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold">MÓDULO FINANCEIRO</h1>
      </div>

      {/* Resumo do Dia */}
      <div>
        <h2 className="text-lg font-bold mb-4 text-gray-900">Resumo do Dia</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-green-600 font-semibold text-sm">Entradas</p>
            <p className="text-3xl font-bold text-green-600 mt-2">R$ 0,00</p>
            <p className="text-gray-600 text-xs mt-2">Previsão para hoje</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-red-600 font-semibold text-sm">Saídas</p>
            <p className="text-3xl font-bold text-red-600 mt-2">R$ 0,00</p>
            <p className="text-gray-600 text-xs mt-2">Contas a pagar do dia</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-blue-600 font-semibold text-sm">Saldo Previsto</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">R$ 0,00</p>
            <p className="text-gray-600 text-xs mt-2">Após entradas e saídas</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-orange-600 font-semibold text-sm">Inadimplência</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">Sem atrasos</p>
            <p className="text-gray-600 text-xs mt-2">Títulos vencidos</p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-bold mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-gray-600">Período Inicial</label>
            <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded" defaultValue="2025-01-08" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Período Final</label>
            <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded" defaultValue="2025-01-08" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Tipo de Lançamento</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded">
              <option>Todos</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold">
            🔍 Pesquisar
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded font-semibold">
            Limpar
          </button>
        </div>
      </div>

      {/* Seções */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-4">Contas a Receber</h3>
          <div className="bg-green-600 h-24 rounded-lg"></div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-4">Contas a Pagar</h3>
          <div className="bg-green-600 h-24 rounded-lg"></div>
        </div>
      </div>

      {/* Fluxo de Caixa */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-gray-900 mb-4">Fluxo de Caixa Previsto</h3>
        <div className="bg-green-600 h-32 rounded-lg"></div>
      </div>

      {/* Módulos Financeiros */}
      <div>
        <h2 className="text-lg font-bold mb-4 text-gray-900">Módulos Financeiros</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { nome: 'Contas a Receber', desc: 'Gerencie recebimentos, parcelas e inadimplências' },
            { nome: 'Contas a Pagar', desc: 'Controle fornecedores, vencimentos e pagamentos' },
            { nome: 'Caixa & Bancos', desc: 'Acompanhe saldos em conta e movimentações diárias' },
            { nome: 'Cobrança', desc: 'Envie boletos, SMS e notificações via WhatsApp' },
            { nome: 'Conciliação Bancária', desc: 'Simplifique conferência de extratos e lançamentos' },
          ].map((modulo, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition">
              <p className="font-bold text-sm text-gray-900">{modulo.nome}</p>
              <p className="text-xs text-gray-600 mt-2">{modulo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
