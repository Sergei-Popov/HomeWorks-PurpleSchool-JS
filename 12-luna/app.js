let cardNumber = "4561-2612-1234-5464";


const luna = (cardNumber) => {
  cardNumber = cardNumber.replaceAll("-", "");

  cardNumber = cardNumber.split('');

  for (let i = 0; i < cardNumber.length; i += 2) {
    let firstStep = parseInt(cardNumber[i]) * 2;
    
    if (firstStep >= 9) {
      firstStep = firstStep - 9;
    }
    
    cardNumber[i] = firstStep.toString();
  }

  const sumNumbers = cardNumber.reduce((acc, value) => {
    return acc = Number(acc) + Number(value);
  })

  return sumNumbers % 10 == 0
}

console.log(luna(cardNumber));