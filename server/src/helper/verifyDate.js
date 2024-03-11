const verifiDate = (date) => {
  const regexDate = /^\d{4}\/\d{2}\/\d{2}$/; // Este regex coincide con el formato YYYY-MM-DD

  if (regexDate.test(date)) {
    return date;
  }
  throw new Error("La fecha es invalida");
};

module.exports = verifiDate;
