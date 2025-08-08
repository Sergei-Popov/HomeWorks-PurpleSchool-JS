const resultButton = () => {
  const firstValue = document.getElementById('firstValue').value;
  const secondValue = document.getElementById('secondValue').value;
  const selectValue = document.getElementById('selection').value;
  const resultValue = document.getElementById('result').innerHTML;

  console.log("firstValue: " + firstValue)
  console.log("secondValue: " + secondValue)
  console.log("selectValue: " + selectValue)
  console.log("resultValue: " + resultValue)

  result = 0;
  if (selectValue == '+') {
    result = Number(firstValue) + Number(secondValue);
  } else if (selectValue == '-') {
    result = Number(firstValue) - Number(secondValue);
  } else if (selectValue == '*') {
    result = Number(firstValue) * Number(secondValue);
  } else if (selectValue == '/') {
    result = Number(firstValue) / Number(secondValue);
  }

  console.log("result: " + result)

  if (isNaN(result)) {
    return document.getElementById('result').innerHTML = 'Ошибка!';
  }

  if ((result === Infinity) || (result === -Infinity)) {
    return document.getElementById('result').innerHTML = 'Деление на ноль недопустимо';
  }

  return document.getElementById('result').innerHTML = result
}


