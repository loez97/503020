document.addEventListener("DOMContentLoaded", () => {
  const inputValor = document.getElementById("valor");
  const valores = {
    essenciais: document.getElementById("essenciais"),
    lazer: document.getElementById("lazer"),
    poupanca: document.getElementById("poupanca"),
    investimento: document.getElementById("investimento"),
    sugestao: document.getElementById("sugestao"),
  };

  inputValor.addEventListener("input", handleInput);

  function handleInput(e) {
    const numericValue = getNumericValue(e.target.value);
    updateDisplay(numericValue);
    formatInput(e.target, numericValue);
  }

  function getNumericValue(value) {
    return parseFloat(value.replace(/\D/g, "")) / 100 || 0;
  }

  function updateDisplay(value) {
    valores.essenciais.textContent = formatCurrency(value * 0.5);
    valores.lazer.textContent = formatCurrency(value * 0.3);
    valores.poupanca.textContent = formatCurrency(value * 0.1);
    valores.investimento.textContent = formatCurrency(value * 0.1);
    valores.sugestao.textContent = formatCurrency((value * 0.3) / 4);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function formatInput(input, value) {
    input.value = formatCurrency(value);
  }
});
