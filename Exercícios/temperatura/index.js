function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const resultadoElement = document.getElementById("resultado");
    const containerElement = document.querySelector('.container');
    let resultado;

    if (isNaN(valor)) {
        resultadoElement.textContent = "Por favor, insira um valor válido.";
        resultadoElement.className = '';
        return;
    }

    if (de === "celsius") {
        if (para === "fahrenheit") resultado = (valor * 9/5) + 32;
        else if (para === "kelvin") resultado = valor + 273.15;
        else if (para === "rankine") resultado = (valor + 273.15) * 9/5;
        else if (para === "réaumur") resultado = valor * 4/5;
        else resultado = valor;
    } else if (de === "fahrenheit") {
        if (para === "celsius") resultado = (valor - 32) * 5/9;
        else if (para === "kelvin") resultado = (valor - 32) * 5/9 + 273.15;
        else if (para === "rankine") resultado = valor + 459.67;
        else if (para === "réaumur") resultado = (valor - 32) * 4/9;
        else resultado = valor;
    } else if (de === "kelvin") {
        if (para === "celsius") resultado = valor - 273.15;
        else if (para === "fahrenheit") resultado = (valor - 273.15) * 9/5 + 32;
        else if (para === "rankine") resultado = valor * 9/5;
        else if (para === "réaumur") resultado = (valor - 273.15) * 4/5;
        else resultado = valor;
    } else if (de === "rankine") {
        if (para === "celsius") resultado = (valor - 491.67) * 5/9;
        else if (para === "fahrenheit") resultado = valor - 459.67;
        else if (para === "kelvin") resultado = valor * 5/9;
        else if (para === "réaumur") resultado = (valor - 491.67) * 4/9;
        else resultado = valor;
    } else if (de === "réaumur") {
        if (para === "celsius") resultado = valor * 5/4;
        else if (para === "fahrenheit") resultado = (valor * 9/4) + 32;
        else if (para === "kelvin") resultado = (valor * 5/4) + 273.15;
        else if (para === "rankine") resultado = (valor * 9/4) + 491.67;
        else resultado = valor;
    }

    resultadoElement.textContent = `Resultado: ${resultado.toFixed(2)}° ${para.charAt(0).toUpperCase() + para.slice(1)}`;

    let status;
    switch (para) {
        case "celsius":
            status = resultado > 30 ? 'hot' : (resultado < 15 ? 'cold' : 'pleasant');
            break;
        case "fahrenheit":
            status = resultado > 86 ? 'hot' : (resultado < 59 ? 'cold' : 'pleasant');
            break;
        case "kelvin":
            status = resultado > 303.15 ? 'hot' : (resultado < 288.15 ? 'cold' : 'pleasant');
            break;
        case "rankine":
            status = resultado > 545.67 ? 'hot' : (resultado < 518.67 ? 'cold' : 'pleasant');
            break;
        case "réaumur":
            status = resultado > 24 ? 'hot' : (resultado < 12 ? 'cold' : 'pleasant');
            break;
    }

    resultadoElement.className = status;
    if (status === 'cold') {
        startSnowfall(containerElement);
    } else {
        stopSnowfall(containerElement);
    }
}
