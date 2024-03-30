const checkDayFifteen = date => {
  // Get the current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  // Get the 15th day of the current month
  const fifteenthDayCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    15
  );
  const formatterDate = new Date(date);

  console.log(fifteenthDayCurrentMonth);

  console.log(formatterDate);

  // Compare the provided date with the 15th day of the current month
  if (formatterDate < fifteenthDayCurrentMonth) {
    return 0;
    // return `The date ${formatterDate.toLocaleDateString()} is before the 15th of the current month (${currentDay}).`;
  } else if (formatterDate > fifteenthDayCurrentMonth) {
    return 1;
    // return `The date ${formatterDate.toLocaleDateString()} is after the 15th of the current month (${currentDay}).`;
  }
};

export default checkDayFifteen;
