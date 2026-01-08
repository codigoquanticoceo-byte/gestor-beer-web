'use client';

import { useState } from 'react';

export default function ConfiguracoesPage() {
  const [dados, setDados] = useState({
    empresa: 'Minha Cervejaria',
    cnpj: '00.000.000/0000-00',
    email: 'contato@cervejaria.com',
    telefone: '(11) 9999-9999',
    endereco: 'Rua das Bebidas, 123',
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">⚙️ Configurações</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">Dados da Empresa</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
            <input
              type="text"
              value={dados.empresa}
              onChange={(e) => setDados({...dados, empresa: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CNPJ</label>
            <input
              type="text"
              value={dados.cnpj}
              onChange={(e) => setDados({...dados, cnpj: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={dados.email}
              onChange={(e) => setDados({...dados, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
            <input
              type="tel"
              value={dados.telefone}
              onChange={(e) => setDados({...dados, telefone: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Endereço</label>
            <input
              type="text"
              value={dados.endereco}
              onChange={(e) => setDados({...dados, endereco: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium mt-6">
            💾 Salvar Alterações
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Outras Opções</h2>
        <div className="space-y-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
            👥 Gerenciar Usuários
          </button>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium">
            🔐 Alterar Senha
          </button>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium">
            🗑️ Limpar Dados
          </button>
        </div>
      </div>
    </div>
  );
}
