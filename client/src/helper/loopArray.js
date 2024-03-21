const loopArray = (arr) => {
  let repeatedArray = [];
  for (let i = 0; i < 10; i++) {
    repeatedArray.push(...arr.map((obj) => ({ ...obj }))); // Copiar cada objeto del array original al array repetido
  }
  return repeatedArray;
};

export default loopArray;
