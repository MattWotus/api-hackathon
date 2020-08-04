var globalDeaths = document.getElementById("globalDeaths");

var dateContainer = document.getElementById("date");
var date = new Date();
var year = date.getFullYear();
var day = date.getDate();
var month = date.getMonth() + 1;

dateContainer.textContent = month + "/" + day + "/" + year;

$.ajax({
  url: "https://api.covid19api.com/summary",
  method: "GET",
  success: getCovidDataSuccess,
  error: getCovidDataError
});

function getCovidDataSuccess(data) {
  globalDeaths.textContent = data["Global"]["TotalDeaths"];
};

function getCovidDataError(error) {
  console.error(error);
};

function globalDeaths(data) {

}
