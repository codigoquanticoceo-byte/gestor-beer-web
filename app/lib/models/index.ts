// Modelos do GestorBeer baseado no projeto WPF

export interface Usuario {
  id: number;
  login: string;
  senha: string;
  nomeCompleto: string;
  telefone: string;
  email: string;
  tipoPermissao: 'admin' | 'gerente' | 'operador_caixa' | 'vendedor';
  ativo: boolean;
  dataCriacao: Date;
  ultimoLogin?: Date;
  observacoes: string;
  codigoRecuperacao: string;
}

export interface Produto {
  id: number;
  codigo: string;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  categoria: string;
  fornecedorId: number;
  dataCriacao: Date;
  ativo: boolean;
}

export interface Fornecedor {
  id: number;
  nome: string;
  cnpj: string;
  contato: string;
  telefone: string;
  email: string;
  endereco: string;
  dataCriacao: Date;
  ativo: boolean;
}

export interface Funcionario {
  id: number;
  nome: string;
  cpf: string;
  cargo: string;
  salario: number;
  telefone: string;
  email: string;
  dataCriacao: Date;
  ativo: boolean;
}

export interface Venda {
  id: number;
  numeroNota: string;
  dataVenda: Date;
  clienteNome: string;
  total: number;
  desconto: number;
  operadorId: number;
  status: 'pendente' | 'concluida' | 'cancelada';
  itens: ItemVenda[];
}

export interface ItemVenda {
  id: number;
  vendaId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

export interface NotaFiscal {
  id: number;
  numeroNF: string;
  serie: string;
  dataEmissao: Date;
  fornecedorId: number;
  total: number;
  status: 'recebida' | 'pendente';
  itens: ItemNotaFiscal[];
}

export interface ItemNotaFiscal {
  id: number;
  notaFiscalId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

export interface Entregador {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  veiculo: string;
  placa: string;
  dataCriacao: Date;
  ativo: boolean;
}

export interface Orcamento {
  id: number;
  numeroOrcamento: string;
  dataOrcamento: Date;
  clienteNome: string;
  email: string;
  telefone: string;
  total: number;
  desconto: number;
  status: 'orcamento' | 'aprovado' | 'rejeitado' | 'venda';
  itens: ItemOrcamento[];
}

export interface ItemOrcamento {
  id: number;
  orcamentoId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

export interface LogAuditoria {
  id: number;
  usuarioId: number;
  acao: string;
  modulo: string;
  descricao: string;
  dataHora: Date;
}

export interface ItemCarrinho {
  produtoId: number;
  produtoNome: string;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

export interface DashboardStats {
  totalVendas: number;
  totalRecebimentos: number;
  estoque: number;
  usuariosAtivos: number;
  vendiasDia: number;
  ticketMedio: number;
  produtosMaisVendidos: {nome: string; quantidade: number}[];
}
