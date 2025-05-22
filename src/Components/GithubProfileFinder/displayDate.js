 function displayDate(x) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = new Date(x);
    let number = date.getUTCDate();
    let day = daysOfWeek[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${number},${month} ${year} `;
  }
  
  export default displayDate;