'use client';

import { useState } from 'react';

export default function NotaFiscalPage() {
  const [abaAtiva, setAbaAtiva] = useState('entrada');

  const abas = [
    { id: 'entrada', nome: '📥 Notas de Entrada', cor: 'bg-purple-600' },
    { id: 'saida', nome: '📤 Notas de Saída', cor: 'bg-blue-600' },
    { id: 'devolvidas', nome: '↩️ Devolvidas', cor: 'bg-red-600' },
  ];

  const abaAtual = abas.find(a => a.id === abaAtiva);

  return (
    <div className="space-y-6">
      <div className={`${abaAtual?.cor} text-white p-6 rounded-lg`}>
        <h1 className="text-2xl font-bold">📄 NOTAS FISCAIS</h1>
      </div>

      {/* Abas */}
      <div className="bg-white rounded-t-lg shadow">
        <div className="flex gap-2 border-b p-4 overflow-x-auto">
          {abas.map((aba) => (
            <button
              key={aba.id}
              onClick={() => setAbaAtiva(aba.id)}
              className={`px-4 py-2 font-semibold whitespace-nowrap transition rounded-t ${
                abaAtiva === aba.id
                  ? `${aba.cor} text-white`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {aba.nome}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="bg-white rounded-b-lg shadow p-6 space-y-4">
        {/* Buscas e Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Buscar por número..."
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Fornecedor/Cliente..."
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <div className="flex gap-2">
            <button className={`${abaAtual?.cor} hover:opacity-90 text-white px-4 py-2 rounded font-semibold transition flex-1`}>
              🔍 Buscar
            </button>
            <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded font-semibold transition">
              🔄 Limpar
            </button>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex gap-2 flex-wrap">
          <button className={`${abaAtual?.cor} hover:opacity-90 text-white px-6 py-2 rounded font-semibold transition`}>
            ➕ Nova Nota Fiscal
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold transition">
            📊 Relatório
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition">
            📥 Importar
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded font-semibold transition">
            📤 Exportar
          </button>
        </div>

        {/* Tabela */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Número NF</th>
                <th className="text-left px-4 py-3 font-semibold">
                  {abaAtiva === 'entrada' ? 'Fornecedor' : 'Cliente'}
                </th>
                <th className="text-left px-4 py-3 font-semibold">Data Emissão</th>
                <th className="text-left px-4 py-3 font-semibold">Valor</th>
                <th className="text-left px-4 py-3 font-semibold">Status</th>
                <th className="text-left px-4 py-3 font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-3">NFE-001</td>
                <td className="px-4 py-3">Distribuidora XYZ</td>
                <td className="px-4 py-3">2024-01-15</td>
                <td className="px-4 py-3">R$ 2.500,00</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                    Processada
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">📄 Ver</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-3">NFE-002</td>
                <td className="px-4 py-3">Fornecedor ABC</td>
                <td className="px-4 py-3">2024-01-14</td>
                <td className="px-4 py-3">R$ 1.200,00</td>
                <td className="px-4 py-3">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">
                    Pendente
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">📄 Ver</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Total de Notas</p>
            <p className="text-2xl font-bold text-green-700">2</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Valor Total</p>
            <p className="text-2xl font-bold text-blue-700">R$ 3.700,00</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Notas Pendentes</p>
            <p className="text-2xl font-bold text-yellow-700">1</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Processadas</p>
            <p className="text-2xl font-bold text-purple-700">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}