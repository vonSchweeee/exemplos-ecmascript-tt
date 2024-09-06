// Promise.withResolvers
const { promise, resolve, reject } = Promise.withResolvers();

promise.then((resultado) => {
  console.log('Resultado:', resultado); // 'Operação bem-sucedida'
}).catch((erro) => {
  console.error('Erro:', erro);
});

// Resolvendo a promessa
// resolve('Operação bem-sucedida');


// Ou rejeitando a promessa
// reject('Algo deu errado');
