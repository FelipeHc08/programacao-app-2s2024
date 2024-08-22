// Crie um programa que sorteie números da loteria aleatórios, de jogo (Certifique-se que os números jamais se repitam)
// quina(5), sena(6), lotofacil(15)

document.getElementById("enviarButton").addEventListener("click", function () {
  // Obtém o valor do input
  const inputElement = document.getElementById("numeroInput");
  const numero = parseInt(inputElement.value); // Converte o valor para número
  const resultadoElement = document.getElementById("resultado");

  if (!isNaN(numero)) {
    let numeros = [];
    let count;

    switch (numero) {
      case 1: // Quina
        numeros = new Array(5).fill(null);
        count = 0; // Inicialize a variável count

        while (count < 5) {
          let randomNum = Math.floor(Math.random() * 80) + 1; // Corrige o intervalo de números para [1, 80]
          if (!numeros.includes(randomNum)) {
            numeros[count] = randomNum;
            count++;
          }
        }

        resultadoElement.textContent = `Números da Quina: ${numeros.join(
          ", "
        )}`;
        break;
      case 2: // Lotofácil
        numeros = new Array(15).fill(null);
        count = 0; // Inicialize a variável count

        while (count < 15) {
          let randomNum = Math.floor(Math.random() * 25) + 1; // Corrige o intervalo de números para [1, 25]
          if (!numeros.includes(randomNum)) {
            numeros[count] = randomNum;
            count++;
          }
        }

        resultadoElement.textContent = `Números da Lotofácil: ${numeros.join(
          ", "
        )}`;
        break;
      case 3: // Mega-Sena
        numeros = new Array(6).fill(null);
        count = 0; // Inicialize a variável count

        while (count < 6) {
          let randomNum = Math.floor(Math.random() * 60) + 1; // Corrige o intervalo de números para [1, 60]
          if (!numeros.includes(randomNum)) {
            numeros[count] = randomNum;
            count++;
          }
        }

        resultadoElement.textContent = `Números da Mega-Sena: ${numeros.join(
          ", "
        )}`;
        break;
      default:
        resultadoElement.textContent = "Número não correspondente a uma ação.";
        break;
    }
  } else {
    resultadoElement.textContent = "Por favor, digite um número válido.";
  }
});


// Crie um programa que leia uma dada temperatura e converta para a temperatura dada pelo usuário (unidade de medida)



// Crie um programa para calcular a massa corórea do usuário (peso, altura )
