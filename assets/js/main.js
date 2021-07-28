const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numero1 = e.target.querySelector('#num1');
    const numero2 = e.target.querySelector('#num2');
    const numero3 = e.target.querySelector('#num3');

    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);
    const num3 = Number(numero3.value);

    if (!num1) {
        setResultado('Ops! Algo deu errado! Tente digitar números.', false);
        return;
    }

    if (!num2) {
        setResultado('Ops! Algo deu errado! Tente digitar números.', false);
        return;
    }

    if (!num3) {
        setResultado('Ops! Algo deu errado! Tente digita números.', false);
        return;
    }

    const analisar = getNumero(num1, num2, num3);

    const msg = `O maior número que você digitou foi: ${analisar}!`

    setResultado(msg, true);
})

function getNumero (num1, num2, num3) {
    
    if (num3 >= num2 && num2 >= num1 || num3 >= num1 && num1 >= num2) {
        return num3;
    }   else if (num2 >= num1 && num3 <= num2) {
        return num2;
    }   else if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('correto');
    } else {
        p.classList.add('errado')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

