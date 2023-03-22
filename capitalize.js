const capitalize = (word) => {
  const [firstSymbol = '', ...restWord] = word;
  return `${firstSymbol.toUpperCase()}${restWord.join('')}`;
};
export default capitalize;
