// ES2022

class Pessoa {
  nome = 'João'; // Propriedade pública declarada diretamente
  idade = 30;

  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }

  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Silva');
console.log(pessoa.getNomeCompleto());