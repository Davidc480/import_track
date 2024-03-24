const checkDayFifteen = date => {
  // Get the current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  // Get the 15th day of the current month
  const fifteenthDayCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    15
  );

  console.log(date);

  // Compare the provided date with the 15th day of the current month
  if (date < fifteenthDayCurrentMonth) {
    return `The date ${date.toLocaleDateString()} is before the 15th of the current month (${currentDay}).`;
  } else if (date > fifteenthDayCurrentMonth) {
    return `The date ${date.toLocaleDateString()} is after the 15th of the current month (${currentDay}).`;
  } else {
    return `The date ${date.toLocaleDateString()} is the 15th of the current month (${currentDay}).`;
  }
};

// Example usage:
const exampleDate = new Date(2024, 3, 20);
// Example date: March 10, 2024
console.log(checkDayFifteen(exampleDate));

export default checkDayFifteen;
