export const decodeDate = (time, mode) => {
  let result = "";
  if (mode === "fullDate") {
    let date = new Date(time * 1000);
    const year = date.getFullYear();
    const day = date.getDate();
    let month = date.getMonth();
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        month = undefined;
    }
    result = `${day} ${month} ${year}`;
  } else if (mode === "time") {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    result = `${hours}:${minutes}`;
  }

  return result;
};
