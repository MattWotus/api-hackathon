// var globalDeaths = document.getElementById("globalDeaths");

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var dateContainer = document.getElementById("date");
// var date = new Date();
// var year = date.getFullYear();
// var day = date.getDate();
// var month = monthNames[date.getMonth()];

// dateContainer.textContent = month + " " + day + "," + " " + year;

// function thousands_separators(num) {
//   var num_parts = num.toString().split(".");
//   num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   return num_parts.join(".");
// };

$.ajax({
  headers: {
    "X-Access-Token": "63fc2898-dbd6-4529-ab07-4311a179dbaf"
  },
  url: "https://cors-anywhere.herokuapp.com/api.covid19api.com/summary",
  method: "GET",
  success: getCovidDataSuccess,
  error: getCovidDataError
});


function getCovidDataSuccess(data) {
  // globalDeaths.textContent = thousands_separators(data["Global"]["TotalDeaths"]);
  var countryData = data["Countries"];
  var casesArray = [];
  var countryArray = [];
  for (var i = 0; i < countryData.length; i++) {
    var totalCases = countryData[i]["TotalConfirmed"];
    var country = countryData[i]["Country"];
    casesArray.push(totalCases);
    countryArray.push(country);
  };
  casesArray.splice(136, 1);
  countryArray.splice(136, 1);
  casesArray.splice(142, 1);
  countryArray.splice(142, 1);
  google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyBgy8LzcrzHLkGU97C0EgbAMfJJSv89-BI'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Number of Confirmed Cases'],
      [countryArray[0], casesArray[0]],
      [countryArray[1], casesArray[1]],
      [countryArray[2], casesArray[2]],
      [countryArray[3], casesArray[3]],
      [countryArray[4], casesArray[4]],
      [countryArray[5], casesArray[5]],
      [countryArray[6], casesArray[6]],
      [countryArray[7], casesArray[7]],
      [countryArray[8], casesArray[8]],
      [countryArray[9], casesArray[9]],
      [countryArray[10], casesArray[10]],
      [countryArray[11], casesArray[11]],
      [countryArray[12], casesArray[12]],
      [countryArray[13], casesArray[13]],
      [countryArray[14], casesArray[14]],
      [countryArray[15], casesArray[15]],
      [countryArray[16], casesArray[16]],
      [countryArray[17], casesArray[17]],
      [countryArray[18], casesArray[18]],
      [countryArray[19], casesArray[19]],
      [countryArray[20], casesArray[20]],
      [countryArray[21], casesArray[21]],
      [countryArray[22], casesArray[22]],
      [countryArray[23], casesArray[23]],
      [countryArray[24], casesArray[24]],
      [countryArray[25], casesArray[25]],
      [countryArray[26], casesArray[26]],
      [countryArray[27], casesArray[27]],
      [countryArray[28], casesArray[28]],
      [countryArray[29], casesArray[29]],
      [countryArray[30], casesArray[30]],
      [countryArray[31], casesArray[31]],
      [countryArray[32], casesArray[32]],
      [countryArray[33], casesArray[33]],
      [countryArray[34], casesArray[34]],
      [countryArray[35], casesArray[35]],
      [countryArray[36], casesArray[36]],
      [countryArray[37], casesArray[37]],
      [countryArray[38], casesArray[38]],
      [countryArray[39], casesArray[39]],
      [countryArray[40], casesArray[40]],
      [countryArray[41], casesArray[41]],
      [countryArray[42], casesArray[42]],
      [countryArray[43], casesArray[43]],
      [countryArray[44], casesArray[44]],
      [countryArray[45], casesArray[45]],
      [countryArray[46], casesArray[46]],
      [countryArray[47], casesArray[47]],
      [countryArray[48], casesArray[48]],
      [countryArray[49], casesArray[49]],
      [countryArray[50], casesArray[50]],
      [countryArray[51], casesArray[51]],
      [countryArray[52], casesArray[52]],
      [countryArray[53], casesArray[53]],
      [countryArray[54], casesArray[54]],
      [countryArray[55], casesArray[55]],
      [countryArray[56], casesArray[56]],
      [countryArray[57], casesArray[57]],
      [countryArray[58], casesArray[58]],
      [countryArray[59], casesArray[59]],
      [countryArray[60], casesArray[60]],
      [countryArray[61], casesArray[61]],
      [countryArray[62], casesArray[62]],
      [countryArray[63], casesArray[63]],
      [countryArray[64], casesArray[64]],
      [countryArray[65], casesArray[65]],
      [countryArray[66], casesArray[66]],
      [countryArray[67], casesArray[67]],
      [countryArray[68], casesArray[68]],
      [countryArray[69], casesArray[69]],
      [countryArray[70], casesArray[70]],
      [countryArray[71], casesArray[71]],
      [countryArray[72], casesArray[72]],
      [countryArray[73], casesArray[73]],
      [countryArray[74], casesArray[74]],
      [countryArray[75], casesArray[75]],
      [countryArray[76], casesArray[76]],
      [countryArray[77], casesArray[77]],
      [countryArray[78], casesArray[78]],
      [countryArray[79], casesArray[79]],
      [countryArray[80], casesArray[80]],
      [countryArray[81], casesArray[81]],
      [countryArray[82], casesArray[82]],
      [countryArray[83], casesArray[83]],
      [countryArray[84], casesArray[84]],
      [countryArray[85], casesArray[85]],
      [countryArray[86], casesArray[86]],
      [countryArray[87], casesArray[87]],
      [countryArray[88], casesArray[88]],
      [countryArray[89], casesArray[89]],
      [countryArray[90], casesArray[90]],
      [countryArray[91], casesArray[91]],
      [countryArray[92], casesArray[92]],
      [countryArray[93], casesArray[93]],
      [countryArray[94], casesArray[94]],
      [countryArray[95], casesArray[95]],
      [countryArray[96], casesArray[96]],
      [countryArray[97], casesArray[97]],
      [countryArray[98], casesArray[98]],
      [countryArray[99], casesArray[99]],
      [countryArray[100], casesArray[100]],
      [countryArray[101], casesArray[101]],
      [countryArray[102], casesArray[102]],
      [countryArray[103], casesArray[103]],
      [countryArray[104], casesArray[104]],
      [countryArray[105], casesArray[105]],
      [countryArray[106], casesArray[106]],
      [countryArray[107], casesArray[107]],
      [countryArray[108], casesArray[108]],
      [countryArray[109], casesArray[109]],
      [countryArray[110], casesArray[110]],
      [countryArray[111], casesArray[111]],
      [countryArray[112], casesArray[112]],
      [countryArray[113], casesArray[113]],
      [countryArray[114], casesArray[114]],
      [countryArray[115], casesArray[115]],
      [countryArray[116], casesArray[116]],
      [countryArray[117], casesArray[117]],
      [countryArray[118], casesArray[118]],
      [countryArray[119], casesArray[119]],
      [countryArray[120], casesArray[120]],
      [countryArray[121], casesArray[121]],
      [countryArray[122], casesArray[122]],
      [countryArray[123], casesArray[123]],
      [countryArray[124], casesArray[124]],
      [countryArray[125], casesArray[125]],
      [countryArray[126], casesArray[126]],
      [countryArray[127], casesArray[127]],
      [countryArray[128], casesArray[128]],
      [countryArray[129], casesArray[129]],
      [countryArray[130], casesArray[130]],
      [countryArray[131], casesArray[131]],
      [countryArray[132], casesArray[132]],
      [countryArray[133], casesArray[133]],
      [countryArray[134], casesArray[134]],
      [countryArray[135], casesArray[135]],
      [countryArray[136], casesArray[136]],
      [countryArray[137], casesArray[137]],
      [countryArray[138], casesArray[138]],
      [countryArray[139], casesArray[139]],
      [countryArray[140], casesArray[140]],
      [countryArray[141], casesArray[141]],
      [countryArray[142], casesArray[142]],
      [countryArray[143], casesArray[143]],
      [countryArray[144], casesArray[144]],
      [countryArray[145], casesArray[145]],
      [countryArray[146], casesArray[146]],
      [countryArray[147], casesArray[147]],
      [countryArray[148], casesArray[148]],
      [countryArray[149], casesArray[149]],
      [countryArray[150], casesArray[150]],
      [countryArray[151], casesArray[151]],
      [countryArray[152], casesArray[152]],
      [countryArray[153], casesArray[153]],
      [countryArray[154], casesArray[154]],
      [countryArray[155], casesArray[155]],
      [countryArray[156], casesArray[156]],
      [countryArray[157], casesArray[157]],
      [countryArray[158], casesArray[158]],
      [countryArray[159], casesArray[159]],
      [countryArray[160], casesArray[160]],
      [countryArray[161], casesArray[161]],
      [countryArray[162], casesArray[162]],
      [countryArray[163], casesArray[163]],
      [countryArray[164], casesArray[164]],
      [countryArray[165], casesArray[165]],
      [countryArray[166], casesArray[166]],
      [countryArray[167], casesArray[167]],
      [countryArray[168], casesArray[168]],
      [countryArray[169], casesArray[169]],
      [countryArray[170], casesArray[170]],
      [countryArray[171], casesArray[171]],
      [countryArray[172], casesArray[172]],
      [countryArray[173], casesArray[173]],
      [countryArray[174], casesArray[174]],
      [countryArray[175], casesArray[175]],
      [countryArray[176], casesArray[176]],
      [countryArray[177], casesArray[177]],
      [countryArray[178], casesArray[178]],
      [countryArray[179], casesArray[179]],
      [countryArray[180], casesArray[180]],
      [countryArray[181], casesArray[181]],
      [countryArray[182], casesArray[182]],
      [countryArray[183], casesArray[183]],
      [
        ["Greenland"],
        [0]
      ],
      [
        ["Svalbard and Jan Mayen"],
        [0]
      ]
    ]);
    var options = {
      colorAxis: {
        colors: ['lightblue', 'dodgerblue', 'blue', 'mediumblue']
      },
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  };
};

function getCovidDataError(error) {
  console.error(error);
};
