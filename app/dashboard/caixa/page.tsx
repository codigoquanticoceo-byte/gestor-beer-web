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
  ]);

  const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  const handleRemover = (id: number) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-orange-600 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold">FRENTE DE CAIXA</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Busca de Produtos */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="font-bold mb-4">BUSCA DE PRODUTOS</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Pesquisar por Nome/Descrição</label>
              <input
                type="text"
                placeholder="Digite aqui..."
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Scanner de Código de Barras:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded font-semibold">
                  Buscar
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Adição rápida por código</span>
            </label>

            <div className="bg-green-600 h-24 rounded-lg"></div>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded font-semibold">
              📋 Listar Todos os Produtos
            </button>
          </div>
        </div>

        {/* Carrinho e Caixa */}
        <div className="lg:col-span-3 space-y-6">
          {/* Abertura do Caixa */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold mb-4">Abertura do Caixa</h3>
            <p className="text-sm text-gray-600">Caixa aguardando abertura</p>
            <p className="text-lg font-bold text-green-600 mt-2">Saldo atual: R$ 0,00</p>
            <p className="text-sm text-gray-600">Valor abertura: R$ 0,00</p>
          </div>

          {/* Carrinho */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold mb-4">
              CARRINHO DE COMPRAS <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm ml-2">0 itens</span>
            </h3>
            <div className="bg-green-600 h-32 rounded-lg mb-4"></div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Subtotal:</p>
                <p className="text-2xl font-bold">R$ 0,00</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Desconto:</p>
                <p className="text-lg">0,00</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">Informar o valor actual em caixa:</p>
                <p className="text-2xl font-bold text-right text-orange-600">R$ 0,00</p>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold">
                ✅ Finalizar Venda
              </button>
              <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold">
                🗑️ Fechar Caixa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
