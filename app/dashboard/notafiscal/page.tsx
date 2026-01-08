'use client';

export default function NotaFiscalPage() {
  return (
    <div className="space-y-6">
      <div className="bg-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold">📄 NOTAS FISCAIS DE ENTRADA</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por número, fornecedor ou chave..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold">
            ➕ Nota Fiscal
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold">
            📊 Filtrar
          </button>
        </div>

        <div className="bg-green-600 h-32 rounded-lg mb-6"></div>

        <div className="mt-6 pt-6 border-t text-sm text-gray-600">
          <p>Total: 0 registros</p>
          <p>Valor Total: R$ 0,00</p>
        </div>
      </div>
    </div>
  );
}