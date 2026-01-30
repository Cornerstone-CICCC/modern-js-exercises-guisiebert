/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  const [year, month, day] = date.split("/")

  const formattedDay = Number(day)
  const formattedMonth = month === "01" ? "January" : month === "02" ? "February" : month === "03" ? "March" : month === "04" ? "April" : month === "05" ? "May" : month === "06" ? "June" : month === "07" ? "July" : month === "08" ? "August" : month === "09" ? "September" : month === "10" ? "October" : month === "11" ? "November" : "December"
  const daySuffix = day === "01" || day === "21" || day === "31" ? "st" : day === "02" || day === "22" ? "nd" : day === "03" || day === "23" ? "rd" : "th"

  return `${formattedMonth} ${formattedDay}${daySuffix}, ${year}`
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
