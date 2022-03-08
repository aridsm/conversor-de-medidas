const comprimento = ['Nanômetro', 'Micrômetro', 'Milímetro', 'Centímetro', 'Metro', 'Quilômetro', 'Milha', 'Pé', 'Polegada', 'Jarda'];
const temperatura = ['Kelvin', 'Fahrenheit', 'Celsius'];
const massa = ['Micrograma', 'Miligrama', 'Grama', 'Quilograma', 'Tonelada', 'Libra', 'Onça'];

const attributesToSet = {
    'tabindex': '0',
    'role': 'button',
    'aria-checked': 'false',
}
/*
const conversor = {
    'Nanômetro': {
        'Nanômetro':0,
        'Micrômetro':0.001,
        'Milímetro':1e-6,
        'Centímetro':1e-7,
        'Metro':1e-9,
        'Quilômetro':1e-12,
        'Milha':6.2137e-13,
        'Pé':3.2808e-9,
        'Polegada':3.937e-8,
        'Jarda':1.0936e-9,
    },
    'Micrômetro': {
        'Nanômetro':1000,
        'Micrômetro':0,
        'Milímetro':0.001,
        'Centímetro':1e-4,
        'Metro':1e-6,
        'Quilômetro':1e-9,
        'Milha':6.2137e-10,
        'Pé':3.2808e-6,
        'Polegada':3.937e-5,
        'Jarda':1.0936e-6,
    },
    'Milímetro': {
        'Nanômetro':1e+6,
        'Micrômetro':1000,
        'Milímetro':0,
        'Centímetro':0.1,
        'Metro':0.001,
        'Quilômetro':1e-6,
        'Milha':6.2137e-7,
        'Pé':0.00328084,
        'Polegada':0.0393701,
        'Jarda':0.00109361,
    },
    'Centímetro': {
        'Nanômetro':1e+7,
        'Micrômetro':10000,
        'Milímetro':10,
        'Centímetro':0,
        'Metro':0.01,
        'Quilômetro':1e-5,
        'Milha':6.2137e-6,
        'Pé':0.0328084,
        'Polegada':0.393701,
        'Jarda':0.0109361,
    },
    'Metro': {
        'Nanômetro':1e+9,
        'Micrômetro':1e+6,
        'Milímetro':1000,
        'Centímetro':100,
        'Metro':0,
        'Quilômetro':0.001,
        'Milha':0.000621371,
        'Pé':3.28084,
        'Polegada':39.3701,
        'Jarda':1.09361,
    },
    'Quilômetro': {
        'Nanômetro':1e+12,
        'Micrômetro':1e+9,
        'Milímetro':1000000,
        'Centímetro':100000,
        'Metro':1000,
        'Quilômetro':0,
        'Milha':0.621371,
        'Pé':3280.84,
        'Polegada':39370.1,
        'Jarda':1093.612959,
    },
    'Milha': {
        'Nanômetro':1.609e+12,
        'Micrômetro':1.609e+9,
        'Milímetro':1.609e+6,
        'Centímetro':160934,
        'Metro':1609.34,
        'Quilômetro':1.60934,
        'Milha':0,
        'Pé':5280,
        'Polegada':63360,
        'Jarda':1760,
    },
    'Pé': {
        'Nanômetro':3.048e+8,
        'Micrômetro':304800,
        'Milímetro':304.8,
        'Centímetro':30.48,
        'Metro':0.3048,
        'Quilômetro':0.0003048,
        'Milha':0.000189394,
        'Pé':0,
        'Polegada':12,
        'Jarda':0.333333,
    },
    'Polegada': {
        'Nanômetro':2.54e+7,
        'Micrômetro':25400,
        'Milímetro':25.4,
        'Centímetro':2.54,
        'Metro':0.0254,
        'Quilômetro':2.54e-5,
        'Milha':1.5783e-5,
        'Pé':0.0833333,
        'Polegada':0,
        'Jarda':0.0277778,
    },
    'Jarda': {
        'Nanômetro':9.144e+8,
        'Micrômetro':914400,
        'Milímetro':914.4,
        'Centímetro':91.44,
        'Metro':0.9144,
        'Quilômetro':0.0009144,
        'Milha':0.000568182,
        'Pé':3,
        'Polegada':36,
        'Jarda':0,
    },
    'Micrograma': {
        'Micrograma':0,
        'Miligrama':0.001,
        'Grama':1e-6,
        'Quilograma':1e-9,
        'Tonelada':1e-12,
        'Libra':2.2046e-9,
        'Onça':3.5274e-8,
    },
    'Miligrama': {
        'Micrograma':1000,
        'Miligrama':0,
        'Grama':1e-3,
        'Quilograma':1e-6,
        'Tonelada':1e-9,
        'Libra':1.5747e-7,
        'Onça':3.5274e-5,
    },
    'Grama': {
        'Micrograma':1e+6,
        'Miligrama':1000,
        'Grama':0,
        'Quilograma':0.001,
        'Tonelada':1e-6,
        'Libra':0.00220462,
        'Onça':0.035274,
    },
    'Quilograma': {
        'Micrograma':1e+9,
        'Miligrama':1e+6,
        'Grama':1000,
        'Quilograma':0,
        'Tonelada':0.001,
        'Libra':2.20462,
        'Onça':35.274,
    },
    'Tonelada': {
        'Micrograma':1e+12,
        'Miligrama':1e+9,
        'Grama':1e+6,
        'Quilograma':1000,
        'Tonelada':0,
        'Libra':2204.62,
        'Onça':35274,
    },
    'Libra': {
        'Micrograma':4.536e+8,
        'Miligrama':453592,
        'Grama':453.592,
        'Quilograma':0.453592,
        'Tonelada':0.000453592,
        'Libra':0,
        'Onça':16,
    },
    'Onça': {
        'Micrograma':2.835e+7,
        'Miligrama':28349.5,
        'Grama':28.3495,
        'Quilograma':0.0283495,
        'Tonelada':2.835e-5,
        'Libra':0.0625,
        'Onça':0,
    },
}
*/

const AllBtns = document.querySelectorAll('.js-btns');
const AllLis = document.querySelectorAll('li');
const divMedidas = document.querySelector('.medidas');
const unitsUls = document.querySelectorAll('.unidade ul');
const btnConvert = document.querySelector('.converter');
const result = document.querySelector('.resultado')


function openList(btn) {
    closeUls()

    const ul = btn.currentTarget.nextElementSibling;
    ul.style.display = 'block';

    btn.currentTarget.setAttribute('aria-expanded','true')
}

function closeUls() {
    AllBtns.forEach((btn) => {
        btn.nextElementSibling.style.display = 'none';
        btn.setAttribute('aria-expanded','false')  
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

function changeMeasure(listItem) {

    const thisLi = listItem.currentTarget
    const theseLis = thisLi.parentElement.querySelectorAll('li')
    const btn = thisLi.parentElement.previousElementSibling;
    btn.innerText = thisLi.innerText;
  
    theseLis.forEach((li) => {
        li.classList.remove('ativo');
        li.setAttribute('aria-checked','false')
    })

    thisLi.classList.add('ativo')
    thisLi.setAttribute('aria-checked','true')

    if (divMedidas.contains(thisLi)) {
        checkMeasureContent(btn.innerText);
    }
}

async function convertMeasure() {
    const v = document.querySelector('input').value;
    const measureUsed = document.querySelector('#btn-medida').innerText;
    const fromValue = document.querySelector('#btn-from').innerText;
    const toValue = document.querySelector('#btn-to').innerText;

    const conversorData = await fetch('./formula-conversor.json');
    const conversorJson = await conversorData.json();
   
    if (fromValue == toValue) {
        result.innerText = v
    } else {
        const conversorConst = conversorJson[fromValue][toValue];
        if (measureUsed !== 'Temperatura'){
            result.innerText = conversorConst * v;  
        } else {
            result.innerHTML = eval(conversorConst.replace('input', v))
        }      
    }
}

AllBtns.forEach((btn) => {
    btn.addEventListener('click', openList);
})

AllLis.forEach((li) => {
    li.addEventListener('click', changeMeasure)
})

window.addEventListener('click', checkOpenUls)

btnConvert.addEventListener('click', convertMeasure)