// start change dynamic child content
const content = document.getElementsByClassName('content')[0];
const describe = document.getElementById('describe');
const standar = document.getElementById('standar');
const bmi = document.getElementById('bmi');
const temperature = document.getElementById('temperature');
const calcStandar = document.getElementById('calc-standar');
const calcBMI = document.getElementById('calc-bmi');
const calcTemp = document.getElementById('calc-temp')

calcStandar.addEventListener('click', function(){
  describe.style.display = 'none';
  bmi.style.display = ' none';
  temperature.style.display = ' none';
  standar.style.display = 'block';

});

calcBMI.addEventListener('click', function() {
  describe.style.display = 'none';
  standar.style.display = 'none';
  temperature.style.display = ' none';
  bmi.style.display = 'block';
});

calcTemp.addEventListener('click', function() {
  describe.style.display = 'none';
  standar.style.display = 'none';
  bmi.style.display = 'none';
  temperature.style.display = 'block';
});
// end change dynamic child content

// start standar calculator
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const multiple = document.getElementById('multiple');
const divide = document.getElementById('divide');

add.addEventListener('click', function() {
  const actionResult = document.getElementsByClassName('action-result')[0];

  actionResult.innerHTML = '+';

});

sub.addEventListener('click', function() {
  const actionResult = document.getElementsByClassName('action-result')[0];

  actionResult.innerHTML = '-';

});

multiple.addEventListener('click', function() {
  const actionResult = document.getElementsByClassName('action-result')[0];

  actionResult.innerHTML = 'x';

});

divide.addEventListener('click', function() {
  const actionResult = document.getElementsByClassName('action-result')[0];

  actionResult.innerHTML = ':';

});

const equal = document.getElementById('equal');
equal.addEventListener('click', function() {
  const actionResult = document.getElementsByClassName('action-result')[0];
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  
  let num1 = parseFloat(input1);
  let num2 = parseFloat(input2);

  if(actionResult.innerHTML == '+') {
    const hasil = document.getElementsByClassName('hasil')[0];
    return hasil.innerHTML = num1 + num2;

  }else if(actionResult.innerHTML == '-') {
    const hasil = document.getElementsByClassName('hasil')[0];
    return hasil.innerHTML = num1 - num2;

  }else if(actionResult.innerHTML == 'x') {
    const hasil = document.getElementsByClassName('hasil')[0];
    return hasil.innerHTML = num1 * num2;

  } else if(actionResult.innerHTML == ':') {
    const hasil = document.getElementsByClassName('hasil')[0];
    return hasil.innerHTML = num1 / num2;

  }
});
// end standar calculator

// start BMI calculator
const btnSubmitBMI = document.getElementsByClassName('btn-submit-bmi')[0];
btnSubmitBMI.addEventListener('click', function() {
  const inputHeightBMI = document.getElementById('inputHeight').value;
  const inputWeightBMI = document.getElementById('inputWeight').value;
  const resultBMI = document.getElementsByClassName('result-bmi')[0];
  
  if(inputHeightBMI < 1) {
    return alert('Input error');
  }else if(inputWeightBMI < 1){
    return alert('Input error');
  }else{
    const heightMeter = inputHeightBMI /100;
    const result = inputWeightBMI / Math.pow(heightMeter, 2);
    resultBMI.innerHTML = result.toFixed(1);
  
    const standarBMI = document.getElementsByClassName('standar-bmi')[0];
    const resultBMICategory = document.getElementsByClassName('result-bmi-category')[0];

    standarBMI.style.display = 'block';

    if (result < 18.5) {
      resultBMICategory.innerHTML = 'Kurus';
      resultBMICategory.style.display = 'block';
    }
    if (result >= 18.5 && result <= 22.9) {
      resultBMICategory.innerHTML = 'Normal';
      resultBMICategory.style.display = 'block';
    }
    if (result >= 23 && result <= 29.9) {
      resultBMICategory.innerHTML = 'Gemuk';
      resultBMICategory.style.display = 'block';
    }
    if (result >= 30) {
      resultBMICategory.innerHTML = 'Obesitas';
      resultBMICategory.style.display = 'block';
    }
  }
});
// end bmi calculator

// start suhu  calculator