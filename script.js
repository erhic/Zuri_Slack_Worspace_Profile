function getInfo() {
  // window html-body element to display slack name
  document.getElementById("slackUserName").innerHTML += "<p>Eric Ngugi</p>";
  currentDayOfTheWeek();
}

function currentDayOfTheWeek() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  document.getElementById("currentDayOfTheWeek").innerHTML += `<p>${day}<p>`;
}
