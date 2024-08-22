const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é igual a ${imc} (${nivelImc}).`;
    setResultado(msg, true, nivelImc);
});

function getNivelImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc < 35) {
        return 'Obesidade grau 1';
    } else if (imc < 40) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid, nivelImc) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
        
        if (nivelImc === 'Abaixo do peso') {
            p.style.backgroundColor = 'orange';
        } else if (nivelImc === 'Peso normal') {
            p.style.backgroundColor = 'green';
        } else if (nivelImc === 'Sobrepeso') {
            p.style.backgroundColor = 'yellow';
        } else if (nivelImc === 'Obesidade grau 1') {
            p.style.backgroundColor = 'tan';
        } else if (nivelImc === 'Obesidade grau 2') {
            p.style.backgroundColor = 'orange';
        } else if (nivelImc === 'Obesidade grau 3') {
            p.style.backgroundColor = 'red';
        }
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}