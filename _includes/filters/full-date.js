/**
 * Filter date output to follow pattern MMMM D, YYYY
 *
 * @param  {object}   dateToFilter  Date object
 *
 * @return {string}   Formatted date string.
 */
module.exports = (dateToFilter) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const newDate = new Date(dateToFilter);

  return `${monthNames[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
};
