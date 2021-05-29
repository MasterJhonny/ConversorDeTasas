// const  de loso items del navegacion
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
// const de los section.
const sec1 = document.getElementById('sec1');
const sec2 = document.getElementById('sec2');
const sec3 = document.getElementById('sec3');
// const section = document.getElementsByClassName('section');
// const de  los botones and menu.
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('nav')
// const de tasa nominal a nominal
const valor1 = document.getElementById('valor1');
const cap1 = document.getElementById('cap1');
const capp1 = document.getElementById('capp1');
const calcular1 = document.getElementById('calcular1');
const salida1 = document.getElementById('salida1');
// const de tasa efectiva a nominal
const valor2 = document.getElementById('valor2');
const cap2 = document.getElementById('cap2');
const capp2 = document.getElementById('capp2');
const calcular2 = document.getElementById('calcular2');
const salida2 = document.getElementById('salida2');
// const de tasa nominal a efectiva
const valor3 = document.getElementById('valor3');
const cap3 = document.getElementById('cap3');
const capp3 = document.getElementById('capp3');
const calcular3 = document.getElementById('calcular3');
const salida3 = document.getElementById('salida3');
// numero de decimales
const DEC = 6;
// tasa de nominal a periodica..
function NomConverPer(tasa, capitalization){
    if(!Number.isInteger(tasa) && Number.isInteger(capitalization)){
        let valor = tasa / capitalization
        return console.log(valor.toFixed(DEC))
    } else {
        console.log('Los valores son erroneos...')
    }
}
// de tasa nominal a tasa efectiva.
function NomConverTea(tasa, capitalization, efectiva){
    if(!Number.isInteger(tasa) && Number.isInteger(capitalization)){
        if(efectiva === 1){
            let valor = (1 + (tasa / capitalization))**capitalization - 1
            return valor
        } else {
            let valor = ((1 + (tasa / capitalization))**capitalization)**(1/efectiva) - 1
            return valor
        }
    }
}
// de tasa efectiva a nominal...
function TeaConverNom(tasa, capitalization, efectiva){
    if(!Number.isInteger(tasa) && Number.isInteger(capitalization)){
        if(efectiva === 1){
            let valor = (((1 + tasa)**(1/capitalization)) - 1) * capitalization
            return valor
        } else {
            let valor = ((((1 + tasa)**efectiva)**(1/capitalization)) - 1) * capitalization
            return valor
        }
    }
}
// de tasa nominal a nominal
function NomConverNom(tasaUno, capitalizationUno, capitalizationDos){
    if(!Number.isInteger(tasaUno) && Number.isInteger(capitalizationUno) && Number.isInteger(capitalizationDos)){
        let valor = ((((1 + tasaUno/capitalizationUno)**capitalizationUno)**(1/capitalizationDos)) - 1) * capitalizationDos
        return valor
    }
}
function capiAValor(cap){
    switch(cap){
        case 'Anual':
            return 1
        case 'Semestral':
            return 2
        case 'Cuatrimestral':
            return 3
        case 'Trimestral':
            return 4
        case 'Bimestral':
            return 6
        case 'Mensual':
            return 12
    }
}
// funcion de remover clase nav and section
function remover(){
    nav.classList.toggle('none')
}
// evetos del menu.
abrir.addEventListener('click',() => {
    cerrar.classList.remove('none');
    abrir.classList.add('none');
    remover();
})
cerrar.addEventListener('click',() => {
    cerrar.classList.add('none');
    abrir.classList.remove('none');
    remover();
})
// evetos del navegacion y section none
item1.addEventListener('click', () => {
    sec1.classList.remove('none');
    sec2.classList.add('none');
    sec3.classList.add('none');
    item1.classList.add('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
})
item2.addEventListener('click', () => {
    sec1.classList.add('none');
    sec2.classList.remove('none');
    sec3.classList.add('none');
    item1.classList.remove('active');
    item2.classList.add('active');
    item3.classList.remove('active');
})
item3.addEventListener('click', () => {
    sec1.classList.add('none');
    sec2.classList.add('none');
    sec3.classList.remove('none');
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.add('active');
})
// evento del boton uno
calcular1.addEventListener('click',() => {
    if(valor1.value != ''){
        let tasa = valor1.value/100
        let capitalization1 = capiAValor(cap1.value)
        let capitalization2 = capiAValor(capp1.value)
        console.log(tasa, capitalization1, capitalization2)
        let rest = NomConverNom(tasa, capitalization1, capitalization2) * 100
        salida1.innerText = `R. ${rest.toFixed(DEC)}% Nominal con capitalization ${capp1.value}`
    } else {
        alert('Ingrese los valores')
    }
})
// evento del boton dos
calcular2.addEventListener('click',() => {
    if(valor2.value != ''){
        let tasa = valor2.value/100
        let efectiva = capiAValor(cap2.value)
        let capitalization2 = capiAValor(capp2.value)
        console.log(tasa, efectiva, capitalization2)
        let rest = TeaConverNom(tasa, capitalization2, efectiva) * 100
        console.log(rest)
        salida2.innerText = `R. ${rest.toFixed(DEC)}% Nominal con capitalization ${capp2.value}`
    } else {
        alert('Ingrese los valores')
    }
})
// evento del boton Tress
calcular3.addEventListener('click',() => {
    if(valor3.value != ''){
        let tasa = valor3.value/100
        let capitalization1 = capiAValor(cap3.value)
        let efectiva = capiAValor(capp3.value)
        console.log(tasa, efectiva, capitalization1)
        let rest = NomConverTea(tasa, capitalization1, efectiva) * 100       
        salida3.innerText = `R. ${rest.toFixed(DEC)}% Efectivo ${capp3.value}`
    } else {
        alert('Ingrese los valores')
    }
})