// Exemplo de Optional Chaining com valor null
const usuario = {
    nome: 'José',
    endereco: {
      cidade: 'Curitiba',
    },
    projetoAtual: null
  };
  
  const cidadeUsuario = usuario?.endereco?.cidade;
  console.log({ cidadeUsuario });
  
  const telefoneUsuario = usuario?.telefone;
  console.log({ telefoneUsuario });
  
  const nomeProjetoUsuario = usuario?.projetoAtual?.nome;
  console.log({ nomeProjetoUsuario });