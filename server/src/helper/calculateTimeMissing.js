const calculateTimeMissing = (dateBdd) => {
  const calculateTime = dateBdd.map((date) => {
    const now = new Date();
    const difference = date.date - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const dateBrand = date.dateBrand;

    return { days, hours, minutes, seconds, dateBrand };
  });
  return calculateTime;
};

module.exports = calculateTimeMissing;
