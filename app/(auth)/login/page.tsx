'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    try {
      if (usuario && senha) {
        localStorage.setItem('usuario_logado', JSON.stringify({
          id: 1,
          usuario,
          nomeCompleto: usuario,
          tipoPermissao: 'admin'
        }));
        if (lembrar) {
          localStorage.setItem('lembrar_acesso', 'true');
        }
        router.push('/dashboard');
      } else {
        setErro('Usuário e senha são obrigatórios');
      }
    } catch (error) {
      setErro('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  // SVG padrão de ícone de cerveja/gráfico
  const BeerIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 16h2V4h-2zm-5 2H9V2h3zm-7-2H4V8H2v8zm4-8h2V6h-2v4zm0 8h2v-4h-2v4z"/>
    </svg>
  );

  return (
    <div 
      className="min-h-screen flex bg-white overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg opacity='0.08'%3E%3Cpath d='M20,30 Q30,20 40,30 Q30,40 20,30' fill='none' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M45,25 L60,25 L65,35 L40,35 Z' fill='%23333'/%3E%3Ctext x='35' y='45' font-size='12' fill='%23333'%3E$%3C/text%3E%3Cpath d='M55,45 L70,45 L75,60 L50,60 Z' fill='%23333'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat'
      }}
    >
      {/* Lado Esquerdo - Verde */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 to-green-700 p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Padrão de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🍺</div>
          <div className="absolute top-32 right-20 text-5xl">📊</div>
          <div className="absolute bottom-20 left-20 text-6xl">🍺</div>
          <div className="absolute bottom-10 right-10 text-5xl">💰</div>
          <div className="absolute top-1/2 right-1/4 text-6xl">📊</div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <span className="text-3xl">🍺</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold">GestorBeer</h1>
                <p className="text-green-100 text-sm">Painel de performance em bebidas</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Domine seu estoque, vendas e entregas em um só lugar.
          </h2>

          <p className="text-green-100 text-base mb-8">
            Automatize rotinas, acompanhe métricas em tempo real e mantenha sua operação afinada da entrada ao pós-venda.
          </p>

          <div className="flex gap-8 mb-12">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold">+32%</p>
              <p className="text-green-100 text-sm">aumento de ticket</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold">15 cidades</p>
              <p className="text-green-100 text-sm">já usam GestorBeer</p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20 relative z-10">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="font-semibold text-sm">Acesso seguro</p>
              <p className="text-green-100 text-xs">Criptografia aponta a rastreio de auditoria em todos os logins.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Bem-vindo(a)</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Faça login para continuar</h1>
            <p className="text-gray-600 text-sm">Conecte-se para acompanhar pedidos, compras e indicadores do dia.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Campo Usuário */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usuário
              </label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition text-sm"
                placeholder="seu usuário"
              />
            </div>

            {/* Campo Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition text-sm"
                placeholder="sua senha"
              />
            </div>

            {/* Mensagem de Erro */}
            {erro && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                {erro}
              </div>
            )}

            {/* Checkbox e Link */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="lembrar"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                  className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                <label htmlFor="lembrar" className="ml-2 text-sm text-gray-700">
                  Lembrar meu acesso
                </label>
              </div>
              <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                Esqueci minha senha
              </a>
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded transition duration-200 disabled:opacity-50 mt-6"
            >
              {loading ? 'Entrando...' : 'Entrar agora'}
            </button>
          </form>

          {/* Rodapé */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-600">
            <p>
              Suporte 24/7 • 
              <a href="mailto:contato@gestorbeer.com" className="text-green-600 hover:text-green-700 ml-1 font-medium">
                contato@gestorbeer.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
