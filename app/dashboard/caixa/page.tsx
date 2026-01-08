'use client';

import { useState } from 'react';

interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export default function CaixaPage() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([
    { id: 1, nome: 'Chopp Premium', preco: 8.50, quantidade: 2 },
    { id: 2, nome: 'Cerveja Artesanal', preco: 12.00, quantidade: 1 },
  ]);

  const [novoProduto, setNovoProduto] = useState('');

  const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  const handleRemover = (id: number) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">💳 Frente de Caixa</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Carrinho */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Carrinho de Compras</h2>

          {carrinho.length === 0 ? (
            <p className="text-gray-500">Carrinho vazio</p>
          ) : (
            <div className="space-y-4">
              {carrinho.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.nome}</p>
                    <p className="text-gray-500 text-sm">R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      defaultValue={item.quantidade}
                      className="w-16 px-2 py-1 border border-gray-300 rounded"
                    />
                    <p className="text-lg font-semibold text-gray-900 w-20">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                    <button
                      onClick={() => handleRemover(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Resumo */}
        <div className="bg-amber-50 rounded-lg shadow p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Resumo da Venda</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">R$ {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Desconto:</span>
              <span className="font-semibold">R$ 0,00</span>
            </div>
            <div className="border-t-2 border-gray-300 pt-4 flex justify-between">
              <span className="text-lg font-bold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-amber-600">R$ {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors">
              ✅ Finalizar Venda
            </button>
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors">
              🗑️ Limpar Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
