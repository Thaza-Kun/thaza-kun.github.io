import dateFormat from "dateformat";

// Translate date strings to Malay
dateFormat.i18n = {
    dayNames: [
      "Ahd",
      "Isn",
      "Sel",
      "Rab",
      "Kha",
      "Jum",
      "Sab",
      "Ahad",
      "Isnin",
      "Selasa",
      "Rabu",
      "Khamis",
      "Jumaat",
      "Sabtu",
    ],
    monthNames: [
      "Jan",
      "Feb",
      "Mac",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ogo",
      "Sep",
      "Okt",
      "Nov",
      "Dis",
      "Januari",
      "Februari",
      "Mac",
      "April",
      "Mei",
      "Jun",
      "Julai",
      "Ogos",
      "September",
      "Oktober",
      "November",
      "Disember",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
  };

export function DateWithDay({ date }) {
    return dateFormat(date, "dd mmmm yyyy (dddd)");
}

export function DefaultDateShort({ date }){
  return dateFormat(date, "dd mmm yyyy");
}

export function DefaultDate({ date }) {
    return dateFormat(date, "dd mmmm yyyy");
}

