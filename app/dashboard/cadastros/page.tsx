'use client';

import { useState } from 'react';

export default function CadastrosPage() {
  const [abaAtiva, setAbaAtiva] = useState('funcionarios');

  const abas = [
    { id: 'funcionarios', nome: '👥 Funcionários' },
    { id: 'clientes', nome: '👤 Clientes' },
    { id: 'fornecedores', nome: '🏢 Fornecedores' },
    { id: 'entregadores', nome: '🚚 Entregadores' },
    { id: 'usuarios', nome: '🔐 Usuários' },
    { id: 'produtos', nome: '📦 Produtos' },
    { id: 'combos', nome: '🎁 Combos' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-green-700 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold">📋 CADASTROS</h1>
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
        {abaAtiva === 'funcionarios' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Formulário */}
            <div className="lg:col-span-1">
              <h3 className="font-bold mb-4">Dados do Funcionário</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Nome</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Telefone</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm text-gray-600">Endereço</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Bairro</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Nº</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Função</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded mt-1">
                    <option>Vendedor</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-4">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded font-semibold">
                    Salvar
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded font-semibold">
                    Adicionar
                  </button>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded font-semibold">
                  Excluir
                </button>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded font-semibold">
                  Limpar
                </button>
              </div>
            </div>

            {/* Lista */}
            <div className="lg:col-span-3">
              <h3 className="font-bold mb-4">Lista de Funcionários</h3>
              <div className="flex gap-2 mb-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold">
                  Atualizar Lista
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-semibold">
                  Ver lista completa
                </button>
              </div>
              <div className="bg-green-600 h-64 rounded-lg"></div>
              <p className="text-xs text-gray-600 mt-4">Total: 0 funcionários cadastrados</p>
            </div>
          </div>
        )}

        {abaAtiva !== 'funcionarios' && (
          <div className="text-center py-8 text-gray-600">
            <p>Seção: {abas.find(a => a.id === abaAtiva)?.nome}</p>
            <p className="text-sm mt-2">Conteúdo em desenvolvimento...</p>
          </div>
        )}
      </div>
    </div>
  );
}
