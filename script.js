currentDayOfTheWeek();
getUTCTime();

function getInfo() {
  // window html-body element to display slack name
  // document.getElementById("slackUserName").innerHTML += "<p> Eric Ngugi</p>";
  // window html-body element to display myTrack
  // document.getElementById("myTrack").innerHTML += "<p>  Frontend</p>";
  // window html-body element to link to github repo containing this source code
  // document.getElementById(
  //   "githubURL"
  // ).innerHTML += `<a href="https://github.com/erhic/Zuri_Slack_Worspace_Profile">Github Link</a>`;
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
  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).innerHTML += `<p>${day}<p>`;
}

/**
 * function to get the utc in milliseconds for the day
 */

function getUTCTime() {
  const date = new Date();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(getUTCTime, 100);
