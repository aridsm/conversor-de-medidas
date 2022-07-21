import conversorFormulas from "./formula_conversoes.js";

const comprimento = ['Nanômetro', 'Micrômetro', 'Milímetro', 'Centímetro', 'Metro', 'Quilômetro', 'Milha', 'Pé', 'Polegada', 'Jarda'];
const temperatura = ['Kelvin', 'Fahrenheit', 'Celsius'];
const massa = ['Micrograma', 'Miligrama', 'Grama', 'Quilograma', 'Tonelada', 'Libra', 'Onça'];

const attributesToSet = {
    'tabindex': '0',
    'role': 'button',
    'aria-checked': 'false',
}

const AllBtns = document.querySelectorAll('.js-btns');
const AllLis = document.querySelectorAll('li');
const divMedidas = document.querySelector('.medidas');
const unitsUls = document.querySelectorAll('.unidade ul');
const btnConvert = document.querySelector('.trocar');
const result = document.querySelector('.resultado')
const input = document.querySelector('input')

function openList(btn) {
    closeUls()

    const ul = btn.currentTarget.nextElementSibling;
    ul.style.display = 'block';

    btn.currentTarget.setAttribute('aria-expanded', 'true')
}

function closeUls() {
    AllBtns.forEach((btn) => {
        btn.nextElementSibling.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false')
    })
}

function checkOpenUls(e) {
    if (!e.target.classList.contains('js-btns')) {
        closeUls()
    }
}

function changeMeasureContent(measure, unit1, unit2) {

    unitsUls.forEach((ul) => {
        ul.innerHTML = '';

        measure.map((unit) => {
            const newLi = document.createElement('li');
            newLi.innerText = unit;

            for (let attr of Object.entries(attributesToSet)) {
                newLi.setAttribute(attr[0], attr[1])
            }

            ul.appendChild(newLi);
            newLi.addEventListener('click', changeMeasure)
        })
    })

    unitsUls[0].previousElementSibling.innerText = unit1;
    unitsUls[1].previousElementSibling.innerText = unit2;
}

function checkMeasureContent(measureName) {

    if (measureName == 'Comprimento') {
        changeMeasureContent(comprimento, 'Centímetro', 'Metro')
    } else if (measureName == 'Massa') {
        changeMeasureContent(massa, 'Grama', 'Quilograma')
    } else if (measureName == 'Temperatura') {
        changeMeasureContent(temperatura, 'Celsius', 'Fahrenheit')
    }
}

function removeCheckedLis(list) {
    list.forEach((li) => {
        li.classList.remove('ativo');
        li.setAttribute('aria-checked', 'false')
    })
}

function addCheckedLi(li) {
    li.classList.add('ativo')
    li.setAttribute('aria-checked', 'true')
}

function changeMeasure(listItem) {

    const thisLi = listItem.currentTarget
    const theseLis = thisLi.parentElement.querySelectorAll('li')
    const btn = thisLi.parentElement.previousElementSibling;
    btn.innerHTML = thisLi.innerText
    if (btn.dataset.type === 'medidas') {
        btn.innerHTML += '<img src="./arrow-down-short.svg" alt="">';
    }

    removeCheckedLis(theseLis)
    addCheckedLi(thisLi)

    if (divMedidas.contains(thisLi)) {
        checkMeasureContent(btn.innerText);
    }

    convertMeasure()
}

async function convertMeasure() {
    const v = document.querySelector('input').value;
    const measureUsed = document.querySelector('#btn-medida').innerText;
    const fromValue = document.querySelector('#btn-from').innerText;
    const toValue = document.querySelector('#btn-to').innerText;


    if (fromValue == toValue) {
        result.innerText = v
    } else if (v == '') {
        result.innerText = 'Por favor, digite um valor'
    } else {
        const conversorConst = conversorFormulas[fromValue][toValue];
        if (measureUsed !== 'Temperatura') {
            result.innerText = conversorConst * v;
        } else {
            result.innerHTML = eval(conversorConst.replace('input', v))
        }
    }

}

function changePosition() {
    const fromUnit = document.querySelector('#btn-from');
    const toUnit = document.querySelector('#btn-to');

    [fromUnit.innerText, toUnit.innerText] = [toUnit.innerText, fromUnit.innerText]

    convertMeasure()
}

AllBtns.forEach((btn) => {
    btn.addEventListener('click', openList);
})

AllLis.forEach((li) => {
    li.addEventListener('click', changeMeasure)
})

window.addEventListener('click', checkOpenUls);

input.addEventListener('input', convertMeasure);

btnConvert.addEventListener('click', changePosition)