const crypto = (password) => {
  const array = password.split('');
  firstPart = array.slice(0, array.length / 2).reverse();
  secondPart = array.slice(array.length / 2).reverse();

  const newPassword = firstPart.concat(secondPart);
  return newPassword.join('')
}

console.log(crypto("password"))

const check = (cryptoPassword, password) => {
  const array = cryptoPassword.split('');
  firstPart = array.slice(0, array.length / 2).reverse();
  secondPart = array.slice(array.length / 2).reverse();

  if (firstPart.concat(secondPart).join('') === password) {
    return true
  } else {
    return false
  }
}

console.log(check("ssapdrow", "password"))