// Propriedades e métodos privados de classe
class ContaBancaria {
  #saldo = 1000; // Propriedade privada

  #atualizarSaldo(valor) { // Método privado
    this.#saldo += valor;
  }

  depositar(valor) {
    this.#atualizarSaldo(valor);
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria();
conta.depositar(500);
console.log(conta.consultarSaldo());

// Não tem acesso
console.log(conta.saldo);

// Não tem acesso
try {
  conta.atualizarSaldo(1000);
} catch (error) {
  console.log(error.message);
}