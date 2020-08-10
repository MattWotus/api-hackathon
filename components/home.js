var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dateContainer = document.getElementById("date");
var date = new Date();
var year = date.getFullYear();
var day = date.getDate();
var month = monthNames[date.getMonth()];

dateContainer.textContent = month + " " + day + "," + " " + year;

$.ajax({
  headers: {
    "X-Access-Token": "63fc2898-dbd6-4529-ab07-4311a179dbaf"
  },
  url: "https://cors-anywhere.herokuapp.com/api.covid19api.com/summary",
  method: "GET",
  success: getCovidDataSuccess,
  error: getCovidDataError
});

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};


function getCovidDataSuccess(data) {
  var totalCases = data["Global"]["TotalConfirmed"];
  var totalDeaths = data["Global"]["TotalDeaths"];
  var casesText = document.getElementById("totalCases");
  var deathsText = document.getElementById("totalDeaths");
  var spinner = document.getElementById("spinner");
  var casesRow = document.getElementById("casesRow");
  var deathsRow = document.getElementById("deathsRow");
  var dateRow = document.getElementById("dateRow");
  var buttonRow = document.getElementById("buttonRow");
  spinner.classList.add("hidden");
  casesRow.classList.remove("hidden");
  deathsRow.classList.remove("hidden");
  dateRow.classList.remove("hidden");
  buttonRow.style.marginTop = "0px";
  deathsText.textContent = totalDeaths;
  casesText.textContent = totalCases;
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      },
      complete: function () {
        $(this).text(thousands_separators(this.Counter));
      }
    });
  });
  var totalDeathsText = document.getElementById("totalDeaths");
  var totalCasesText = document.getElementById("totalCases");
  totalDeathsText.textContent = totalDeaths;
  totalCasesText.textContent = totalCases;
};

function getCovidDataError(error) {
  console.error(error);
};
