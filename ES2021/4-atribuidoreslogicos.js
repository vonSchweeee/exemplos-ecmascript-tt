// Operadores de atribuição lógicos

// Operador de atribuição lógico AND, considera a atribuição se a variável da esquerda for verdadeira
let usuarioAtivo = true;
usuarioAtivo &&= false;
console.log({ usuarioAtivo });

// Operador de atribuição lógico OR, considera a atribuição se a variável da esquerda for falsa
let permissaoAdmin = null;
permissaoAdmin ||= 'Usuário padrão';
console.log({ permissaoAdmin });


// Operador de atribuição lógico nullish, considera a atribuição se a variável da esquerda for undefined ou null
let preferenciaTema = undefined;
preferenciaTema ??= 'Tema escuro';
console.log({ preferenciaTema });