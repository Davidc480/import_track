const calculateTimeMissing = (date) => {
  const now = new Date();
  const difference = new Date(date).getTime() - now.getTime();

  if (difference <= 0 || date === undefined) {
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
};

export default calculateTimeMissing;
