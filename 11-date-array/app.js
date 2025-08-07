const parceResult = ['10.02.2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023']

const parceResultFiltered = parceResult.map((el) => {
  const dotFormat = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
  const slashFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  
  if (!dotFormat.test(el) && !slashFormat.test(el)) {
    return null;
  }
  
  let day, month, year;
  
  if (el.includes('.')) {
    [day, month, year] = el.split('.').map(Number);
  } else {
    [month, day, year] = el.split('/').map(Number);
  }
  
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }
  
  return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}).filter(date => date !== null);

console.log(parceResultFiltered)