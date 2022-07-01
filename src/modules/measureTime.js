export const getTime = () => {
  let endDate = new Date();
  let endYear = endDate.getFullYear();
  let endMonth = ("0" + (endDate.getMonth() + 1)).slice(-2);
  let endDay = ("0" + endDate.getDate()).slice(-2);
  let endHour = ("0" + endDate.getHours()).slice(-2);
  let endDateFormat = endYear + endMonth + endDay + endHour;

  let startDate = new Date(Date.parse(endDate) - 1000 * 60 * 60);
  let startYear = startDate.getFullYear();
  let startMonth = ("0" + (startDate.getMonth() + 1)).slice(-2);
  let startDay = ("0" + startDate.getDate()).slice(-2);
  let startHour = ("0" + startDate.getHours()).slice(-2);

  let startDateFormat = startYear + startMonth + startDay + startHour;

  return {
    endDate: endDateFormat,
    startDate: startDateFormat,
  };
};
