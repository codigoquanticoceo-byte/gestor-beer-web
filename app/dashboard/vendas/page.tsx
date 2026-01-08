'use client';

export default function VendasPage() {
  const vendas = [
    { id: 1, numero: 'V001', data: '07/01/2026', cliente: 'Cliente A', total: 250.50, status: 'Concluída' },
    { id: 2, numero: 'V002', data: '07/01/2026', cliente: 'Cliente B', total: 180.00, status: 'Concluída' },
    { id: 3, numero: 'V003', data: '07/01/2026', cliente: 'Cliente C', total: 320.75, status: 'Pendente' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">🛍️ Vendas</h1>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium">
          ➕ Nova Venda
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Número</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Data</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Cliente</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Total</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map((venda) => (
              <tr key={venda.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{venda.numero}</td>
                <td className="px-6 py-4">{venda.data}</td>
                <td className="px-6 py-4">{venda.cliente}</td>
                <td className="px-6 py-4 font-semibold">R$ {venda.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    venda.status === 'Concluída' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {venda.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-600 hover:text-blue-700">👁️ Ver</button>
                  <button className="text-red-600 hover:text-red-700">🗑️ Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
