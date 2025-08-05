const outputString = (queryParams) => {
  return Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

const queryParams = {
  search: 'Вася',
  take: 10
};

console.log(outputString(queryParams));