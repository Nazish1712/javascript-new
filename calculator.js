let calculation = localStorage.getItem('calculation') || '';

showCalculation();

function updateCalculation(value){
    calculation += value;
    showCalculation();
   localStorage.setItem('calculation',calculation);}

function showCalculation (){
    document.querySelector('.js-display')
    .innerHTML = calculation;
}