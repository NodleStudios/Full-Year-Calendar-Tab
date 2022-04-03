function getMonth(month) {
  let date = new Date();
  let thisMonth = new Date(date.getFullYear(), month, 0);
  let currentMonth = thisMonth.toLocaleString("default", { month: "long" });
  return currentMonth;
}

function getDaysInMonth(month) {
  let date = new Date();
  let thisMonth = new Date(date.getFullYear(), month, 0);
  let daysInMonth = thisMonth.getDate();

  return daysInMonth;
}

function getFirstDayOfMonthDayOfWeek(month) {
  const date = new Date();
  const thisMonth = new Date(date.getFullYear(), month - 1, 1);
  const firstDate = thisMonth.getDay() + 1;
  return firstDate;
}

function decideDayClass(visibility, day, month) {
  if (!visibility || 0 === day) {
    return "invisible";
  }

  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  if (month === currentMonth && currentDay === day) {
    return "bg-gray-300 text-gray-700 font-medium";
  }
}

export {
  getFirstDayOfMonthDayOfWeek,
  getMonth,
  getDaysInMonth,
  decideDayClass,
};
