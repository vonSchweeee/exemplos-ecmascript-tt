const carregarModuloSoma = async () => {
  try {
      const { soma } = await import('../modulos/modulo-soma.mjs');
      const resultado = soma(5, 3);
      console.log(`Resultado da soma: ${resultado}`); // Resultado da soma: 8
  } catch (erro) {
      console.error('Erro ao carregar o módulo:', erro);
  }
};
  
carregarModuloSoma();