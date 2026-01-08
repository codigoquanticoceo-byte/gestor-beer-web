'use client';

import { useState } from 'react';

export default function ConfiguracoesPage() {
  const [abaAtiva, setAbaAtiva] = useState('personalizacao');

  const abas = [
    { id: 'personalizacao', nome: '🎨 Personalização' },
    { id: 'geral', nome: '⚙️ Geral' },
    { id: 'auditoria', nome: '📊 Auditoria' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-green-700 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold">⚙️ CONFIGURAÇÕES</h1>
      </div>

      {/* Abas */}
      <div className="bg-white rounded-t-lg shadow">
        <div className="flex gap-2 border-b p-4">
          {abas.map((aba) => (
            <button
              key={aba.id}
              onClick={() => setAbaAtiva(aba.id)}
              className={`px-4 py-2 font-semibold transition rounded-t ${
                abaAtiva === aba.id
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {aba.nome}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="bg-white rounded-b-lg shadow p-6">
        {abaAtiva === 'personalizacao' && (
          <div className="max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Personalização do Sistema</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 font-semibold">Tema</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded mt-1">
                  <option>Verde (Padrão)</option>
                  <option>Azul</option>
                  <option>Escuro</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 font-semibold">Nome da Loja</label>
                <input type="text" placeholder="GestorBeer" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600 font-semibold">Logotipo</label>
                <input type="file" accept="image/*" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600 font-semibold">Mensagem de Bem-vindo</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded mt-1 h-24"></textarea>
              </div>
              <div className="flex gap-2 pt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold">
                  Salvar Alterações
                </button>
                <button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded font-semibold">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {abaAtiva === 'geral' && (
          <div className="max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Configurações Gerais</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 font-semibold">CNPJ</label>
                  <input type="text" placeholder="00.000.000/0000-00" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 font-semibold">Razão Social</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600 font-semibold">Endereço</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600 font-semibold">Telefone</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 font-semibold">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 font-semibold">Horário de Funcionamento</label>
                  <input type="text" placeholder="08:00 - 23:00" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold">
                  Salvar Alterações
                </button>
                <button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded font-semibold">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {abaAtiva === 'auditoria' && (
          <div>
            <h3 className="font-bold text-lg mb-4">Log de Auditoria</h3>
            <div className="space-y-3 mb-4">
              <div>
                <label className="text-sm text-gray-600 font-semibold">Filtrar por Data</label>
                <div className="flex gap-2 mt-2">
                  <input type="date" className="px-3 py-2 border border-gray-300 rounded" />
                  <input type="date" className="px-3 py-2 border border-gray-300 rounded" />
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold">
                    Filtrar
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 h-80 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-200">
                  <tr>
                    <th className="text-left px-2 py-2">Data/Hora</th>
                    <th className="text-left px-2 py-2">Usuário</th>
                    <th className="text-left px-2 py-2">Ação</th>
                    <th className="text-left px-2 py-2">Tabela</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-2 py-2">2024-01-15 14:30:22</td>
                    <td className="px-2 py-2">Admin</td>
                    <td className="px-2 py-2">INSERT</td>
                    <td className="px-2 py-2">Produtos</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-2 py-2">2024-01-15 14:15:45</td>
                    <td className="px-2 py-2">Admin</td>
                    <td className="px-2 py-2">UPDATE</td>
                    <td className="px-2 py-2">Vendas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-2 py-2">2024-01-15 14:00:12</td>
                    <td className="px-2 py-2">Vendedor01</td>
                    <td className="px-2 py-2">DELETE</td>
                    <td className="px-2 py-2">Carrinho</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600 mt-4">Total de registros: 3 (exibindo últimos 30 dias)</p>
          </div>
        )}
      </div>
    </div>
  );
}
