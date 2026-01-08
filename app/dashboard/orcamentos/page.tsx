'use client';

export default function OrcamentosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">📄 Orçamentos</h1>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium">
          ➕ Novo Orçamento
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 text-center">Nenhum orçamento registrado</p>
      </div>
    </div>
  );
}
