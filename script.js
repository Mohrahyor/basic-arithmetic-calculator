const num1 = parseFloat(prompt('Enter num1: '));
const operator = prompt('Enter operator: (+, -, *, /)');
const num2 = parseFloat(prompt('Enter num2: '));
let result = '';
if (isNaN(num1) || isNaN(num2)) {
  alert('wrong input!Enter num again')
}
else{
  if(operator == '+'){
    result = num1 + num2;
  }
  else if(operator == '-'){
    result = num1 - num2;
  }
  else if(operator == '/'){
    result = num1 / num2;
  }
  else if(operator == '*'){
    result = num1 * num2;
  }
  alert(num1 + operator + num2 + '=' + result)
}