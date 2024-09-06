// Error.cause
try {
  throw new Error('Erro de conexão', { cause: 'Falha no servidor' });
} catch (erro) {
  console.log(erro.message);
  console.log(erro.cause);
}