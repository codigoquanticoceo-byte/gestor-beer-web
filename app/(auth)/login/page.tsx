'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    try {
      // Simulação de autenticação
      if (login && senha) {
        localStorage.setItem('usuario_logado', JSON.stringify({
          id: 1,
          login,
          nomeCompleto: login,
          tipoPermissao: 'admin'
        }));
        router.push('/dashboard');
      } else {
        setErro('Login e senha são obrigatórios');
      }
    } catch (error) {
      setErro('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          {/* Logo/Título */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-900 mb-2">🍺 GestorBeer</h1>
            <p className="text-gray-600">Sistema de Gestão para Cervejaria</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo Login */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Login
              </label>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Digite seu login"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Digite sua senha"
              />
            </div>

            {/* Mensagem de Erro */}
            {erro && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {erro}
              </div>
            )}

            {/* Botão */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Autenticando...' : 'Entrar'}
            </button>
          </form>

          {/* Link de Recuperação */}
          <div className="mt-6 text-center">
            <a href="#" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
              Esqueceu sua senha?
            </a>
          </div>

          {/* Rodapé */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© 2026 GestorBeer - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </div>
  );
}
