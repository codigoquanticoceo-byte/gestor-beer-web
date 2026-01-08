'use client';

import { useState } from 'react';

export default function CadastrosPage() {
  const [produtos, setProdutos] = useState([
    { id: 1, codigo: 'PROD001', nome: 'Chopp Premium', preco: 8.50, estoque: 150 },
    { id: 2, codigo: 'PROD002', nome: 'Cerveja Artesanal', preco: 12.00, estoque: 89 },
    { id: 3, codigo: 'PROD003', nome: 'Refrigerante 2L', preco: 6.50, estoque: 200 },
  ]);

  const [novoForm, setNovoForm] = useState(false);
  const [formData, setFormData] = useState({ codigo: '', nome: '', preco: '', estoque: '' });

  const handleAddProduto = () => {
    if (formData.codigo && formData.nome && formData.preco && formData.estoque) {
      setProdutos([...produtos, {
        id: produtos.length + 1,
        codigo: formData.codigo,
        nome: formData.nome,
        preco: parseFloat(formData.preco),
        estoque: parseInt(formData.estoque),
      }]);
      setFormData({ codigo: '', nome: '', preco: '', estoque: '' });
      setNovoForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">📋 Cadastros</h1>
        <button
          onClick={() => setNovoForm(!novoForm)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {novoForm ? '❌ Cancelar' : '➕ Novo Produto'}
        </button>
      </div>

      {/* Formulário */}
      {novoForm && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Adicionar Novo Produto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Código"
              value={formData.codigo}
              onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="Nome do Produto"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="number"
              placeholder="Preço"
              value={formData.preco}
              onChange={(e) => setFormData({ ...formData, preco: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="number"
              placeholder="Estoque"
              value={formData.estoque}
              onChange={(e) => setFormData({ ...formData, estoque: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button
            onClick={handleAddProduto}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            Salvar Produto
          </button>
        </div>
      )}

      {/* Tabela de Produtos */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Código</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Nome</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Preço</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Estoque</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-600">{produto.codigo}</td>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{produto.nome}</td>
                <td className="px-6 py-4 text-sm text-gray-600">R$ {produto.preco.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    produto.estoque > 100 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {produto.estoque} un
                  </span>
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">✏️ Editar</button>
                  <button className="text-red-600 hover:text-red-700 font-medium">🗑️ Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
