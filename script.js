currentDayOfTheWeek();
getUTCMilliseconds();

function getInfo() {
  // window html-body element to display slack name
  document.getElementById("slackUserName").innerHTML += "<p>Eric Ngugi</p>";

  // window html-body element to display myTrack
  document.getElementById("myTrack").innerHTML += "<p>Frontend</p>";

  // window html-body element to link to github repo containing this source code
  document.getElementById(
    "githubURL"
  ).innerHTML += `<a href="https://github.com/erhic/Zuri_Slack_Worspace_Profile">Github Repo</a>`;
}

/**
 * Function to get the current day of the week
 */
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

/**
 * function to get the utc in milliseconds for the day
 */

function getUTCMilliseconds() {
  const d = new Date();
  let milliseconds = d.getUTCMilliseconds();
  document.getElementById(
    "currentUTCTime"
  ).innerHTML += `<p>${milliseconds}<p>`;
}
