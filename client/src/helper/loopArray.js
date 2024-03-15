const loopArray = (arr) => {
  let repeatedArray = [];
  for (let i = 0; i < 10; i++) {
    repeatedArray.push(...arr); // Agregar cada elemento del array original al array repetido
  }
  // console.log(repeatedArray);
  return repeatedArray;
};

export default loopArray;
