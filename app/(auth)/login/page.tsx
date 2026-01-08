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

  return (
    <div 
      className="min-h-screen flex bg-gray-50"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.02) 35px, rgba(0,0,0,.02) 70px),
                          url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.08'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-. 627 0-1-. 373 0-1 .627-1 1.373 0 1 .627 1 1zm-20-16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-.746-.627-1-1.373-1-.746 0-1 .627-1 1.373 0 1 .627 1 1zm40 40c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-.746-.627-1-1.373-1-.746 0-1 .627-1 1.373 0 1 .627 1 1zM50 20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-.746-.627-1-1.373-1-.746 0-1 .627-1 1.373 0 1 .627 1 1zm-30 66c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-.746-.627-1-1.373-1-.746 0-1 .627-1 1.373 0 1 .627 1 1zM20 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-.746-.627-1-1.373-1-.746 0-1 .627-1 1.373 0 1 .627 1 1zM50 86c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-.746-.627-1-1.373-1-.746 0-1 .627-1 1.373 0 1 .627 1 1zM20 16c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm11 0c0-.746-.627-1-1.373-1-.746 0-1 .627-1 1.373 0 1 .627 1 1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      {/* Lado Esquerdo - Verde */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 to-green-700 p-12 flex-col justify-between text-white">
        <div>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full p-2">
                <span className="text-2xl">🍺</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">GestorBeer</h1>
                <p className="text-green-100 text-sm">Painel de performance em bebidas</p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Domine seu estoque, vendas e entregas em um só lugar.
          </h2>

          <p className="text-green-100 text-lg mb-8">
            Automatize rotinas, acompanhe métricas em tempo real e mantenha sua operação afinada da entrada ao pós-venda.
          </p>

          <div className="flex gap-8 mb-12">
            <div>
              <p className="text-4xl font-bold">+32%</p>
              <p className="text-green-100">aumento de ticket</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15 cidades</p>
              <p className="text-green-100">já usam GestorBeer</p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-6 border border-white border-opacity-30">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="font-semibold">Acesso seguro</p>
              <p className="text-green-100 text-sm">Criptografia aponta para a rastreio de auditoria em todos os logins.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Bem-vindo(a)</p>
            <h1 className="text-3xl font-bold text-gray-900">Faça login para continuar</h1>
            <p className="text-gray-600 text-sm mt-2">Conecte-se para acompanhar pedidos, compras e indicadores do dia.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Usuário */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usuário
              </label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                placeholder="sua senha"
              />
            </div>

            {/* Mensagem de Erro */}
            {erro && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {erro}
              </div>
            )}

            {/* Checkbox e Link */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="lembrar"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                  className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-2 focus:ring-green-500"
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
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Entrando...' : 'Entrar agora'}
            </button>
          </form>

          {/* Rodapé */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>
              Suporte 24/7 • 
              <a href="mailto:contato@gestorbeer.com" className="text-green-600 hover:text-green-700 ml-1">
                contato@gestorbeer.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
