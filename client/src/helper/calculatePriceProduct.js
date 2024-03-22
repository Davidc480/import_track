const calculatePriceProduct = (inputValue, selectValue, priceDollar) => {
  if (parseInt(inputValue) > 0 && selectValue > 0) {
    const dollarExchange = priceDollar
      ? parseInt(priceDollar) * parseInt(inputValue)
      : 499.72 * parseInt(inputValue);
    const priceProduct = dollarExchange + parseInt(selectValue);
    console.log(`¢ ${priceProduct.toLocaleString()}`);
    return `¢ ${priceProduct.toLocaleString()}`;
  } else {
    return `¢  0`;
  }
};

export default calculatePriceProduct;
