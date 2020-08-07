var globalDeaths = document.getElementById("globalDeaths");

var dateContainer = document.getElementById("date");
var date = new Date();
var year = date.getFullYear();
var day = date.getDate();
var month = date.getMonth() + 1;

dateContainer.textContent = month + "/" + day + "/" + year;

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};

$.ajax({
  url: "https://cors-anywhere.herokuapp.com/api.covid19api.com/summary",
  method: "GET",
  success: getCovidDataSuccess,
  error: getCovidDataError
});

function getCovidDataSuccess(data) {
    globalDeaths.textContent = thousands_separators(data["Global"]["TotalDeaths"]);
  var countryData = data["Countries"];
  var casesArray = [];
  var deathsArray = [];
  var countryArray = [];
  for (var i = 0; i < countryData.length; i++) {
    var totalCases = countryData[i]["TotalConfirmed"]
    var totalDeaths = countryData[i]["TotalDeaths"];
    var country = countryData[i]["Country"];
    casesArray.push(totalCases);
    deathsArray.push(totalDeaths);
    countryArray.push(country);
  };
  console.log(casesArray);
  console.log(deathsArray);
  var mortalityRateArray = [];
  for (var i = 0; i < countryData.length; i++) {
    var division = deathsArray[i] / casesArray[i];
    var multiplication = division * 100;
    mortalityRateArray.push(multiplication);
  }
  google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyBgy8LzcrzHLkGU97C0EgbAMfJJSv89-BI'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Mortality Rate (Percent)'],
      [countryArray[0], mortalityRateArray[0]],
      [countryArray[1], mortalityRateArray[1]],
      [countryArray[2], mortalityRateArray[2]],
      [countryArray[3], mortalityRateArray[3]],
      [countryArray[4], mortalityRateArray[4]],
      [countryArray[5], mortalityRateArray[5]],
      [countryArray[6], mortalityRateArray[6]],
      [countryArray[7], mortalityRateArray[7]],
      [countryArray[8], mortalityRateArray[8]],
      [countryArray[9], mortalityRateArray[9]],
      [countryArray[10], mortalityRateArray[10]],
      [countryArray[11], mortalityRateArray[11]],
      [countryArray[12], mortalityRateArray[12]],
      [countryArray[13], mortalityRateArray[13]],
      [countryArray[14], mortalityRateArray[14]],
      [countryArray[15], mortalityRateArray[15]],
      [countryArray[16], mortalityRateArray[16]],
      [countryArray[17], mortalityRateArray[17]],
      [countryArray[18], mortalityRateArray[18]],
      [countryArray[19], mortalityRateArray[19]],
      [countryArray[20], mortalityRateArray[20]],
      [countryArray[21], mortalityRateArray[21]],
      [countryArray[22], mortalityRateArray[22]],
      [countryArray[23], mortalityRateArray[23]],
      [countryArray[24], mortalityRateArray[24]],
      [countryArray[25], mortalityRateArray[25]],
      [countryArray[26], mortalityRateArray[26]],
      [countryArray[27], mortalityRateArray[27]],
      [countryArray[28], mortalityRateArray[28]],
      [countryArray[29], mortalityRateArray[29]],
      [countryArray[30], mortalityRateArray[30]],
      [countryArray[31], mortalityRateArray[31]],
      [countryArray[32], mortalityRateArray[32]],
      [countryArray[33], mortalityRateArray[33]],
      [countryArray[34], mortalityRateArray[34]],
      [countryArray[35], mortalityRateArray[35]],
      [countryArray[36], mortalityRateArray[36]],
      [countryArray[37], mortalityRateArray[37]],
      [countryArray[38], mortalityRateArray[38]],
      [countryArray[39], mortalityRateArray[39]],
      [countryArray[40], mortalityRateArray[40]],
      [countryArray[41], mortalityRateArray[41]],
      [countryArray[42], mortalityRateArray[42]],
      [countryArray[43], mortalityRateArray[43]],
      [countryArray[44], mortalityRateArray[44]],
      [countryArray[45], mortalityRateArray[45]],
      [countryArray[46], mortalityRateArray[46]],
      [countryArray[47], mortalityRateArray[47]],
      [countryArray[48], mortalityRateArray[48]],
      [countryArray[49], mortalityRateArray[49]],
      [countryArray[50], mortalityRateArray[50]],
      [countryArray[51], mortalityRateArray[51]],
      [countryArray[52], mortalityRateArray[52]],
      [countryArray[53], mortalityRateArray[53]],
      [countryArray[54], mortalityRateArray[54]],
      [countryArray[55], mortalityRateArray[55]],
      [countryArray[56], mortalityRateArray[56]],
      [countryArray[57], mortalityRateArray[57]],
      [countryArray[58], mortalityRateArray[58]],
      [countryArray[59], mortalityRateArray[59]],
      [countryArray[60], mortalityRateArray[60]],
      [countryArray[61], mortalityRateArray[61]],
      [countryArray[62], mortalityRateArray[62]],
      [countryArray[63], mortalityRateArray[63]],
      [countryArray[64], mortalityRateArray[64]],
      [countryArray[65], mortalityRateArray[65]],
      [countryArray[66], mortalityRateArray[66]],
      [countryArray[67], mortalityRateArray[67]],
      [countryArray[68], mortalityRateArray[68]],
      [countryArray[69], mortalityRateArray[69]],
      [countryArray[70], mortalityRateArray[70]],
      [countryArray[71], mortalityRateArray[71]],
      [countryArray[72], mortalityRateArray[72]],
      [countryArray[73], mortalityRateArray[73]],
      [countryArray[74], mortalityRateArray[74]],
      [countryArray[75], mortalityRateArray[75]],
      [countryArray[76], mortalityRateArray[76]],
      [countryArray[77], mortalityRateArray[77]],
      [countryArray[78], mortalityRateArray[78]],
      [countryArray[79], mortalityRateArray[79]],
      [countryArray[80], mortalityRateArray[80]],
      [countryArray[81], mortalityRateArray[81]],
      [countryArray[82], mortalityRateArray[82]],
      [countryArray[83], mortalityRateArray[83]],
      [countryArray[84], mortalityRateArray[84]],
      [countryArray[85], mortalityRateArray[85]],
      [countryArray[86], mortalityRateArray[86]],
      [countryArray[87], mortalityRateArray[87]],
      [countryArray[88], mortalityRateArray[88]],
      [countryArray[89], mortalityRateArray[89]],
      [countryArray[90], mortalityRateArray[90]],
      [countryArray[91], mortalityRateArray[91]],
      [countryArray[92], mortalityRateArray[92]],
      [countryArray[93], mortalityRateArray[93]],
      [countryArray[94], mortalityRateArray[94]],
      [countryArray[95], mortalityRateArray[95]],
      [countryArray[96], mortalityRateArray[96]],
      [countryArray[97], mortalityRateArray[97]],
      [countryArray[98], mortalityRateArray[98]],
      [countryArray[99], mortalityRateArray[99]],
      [countryArray[100], mortalityRateArray[100]],
      [countryArray[101], mortalityRateArray[101]],
      [countryArray[102], mortalityRateArray[102]],
      [countryArray[103], mortalityRateArray[103]],
      [countryArray[104], mortalityRateArray[104]],
      [countryArray[105], mortalityRateArray[105]],
      [countryArray[106], mortalityRateArray[106]],
      [countryArray[107], mortalityRateArray[107]],
      [countryArray[108], mortalityRateArray[108]],
      [countryArray[109], mortalityRateArray[109]],
      [countryArray[110], mortalityRateArray[110]],
      [countryArray[111], mortalityRateArray[111]],
      [countryArray[112], mortalityRateArray[112]],
      [countryArray[113], mortalityRateArray[113]],
      [countryArray[114], mortalityRateArray[114]],
      [countryArray[115], mortalityRateArray[115]],
      [countryArray[116], mortalityRateArray[116]],
      [countryArray[117], mortalityRateArray[117]],
      [countryArray[118], mortalityRateArray[118]],
      [countryArray[119], mortalityRateArray[119]],
      [countryArray[120], mortalityRateArray[120]],
      [countryArray[121], mortalityRateArray[121]],
      [countryArray[122], mortalityRateArray[122]],
      [countryArray[123], mortalityRateArray[123]],
      [countryArray[124], mortalityRateArray[124]],
      [countryArray[125], mortalityRateArray[125]],
      [countryArray[126], mortalityRateArray[126]],
      [countryArray[127], mortalityRateArray[127]],
      [countryArray[128], mortalityRateArray[128]],
      [countryArray[129], mortalityRateArray[129]],
      [countryArray[130], mortalityRateArray[130]],
      [countryArray[131], mortalityRateArray[131]],
      [countryArray[132], mortalityRateArray[132]],
      [countryArray[133], mortalityRateArray[133]],
      [countryArray[134], mortalityRateArray[134]],
      [countryArray[135], mortalityRateArray[135]],
      [countryArray[136], mortalityRateArray[136]],
      [countryArray[137], mortalityRateArray[137]],
      [countryArray[138], mortalityRateArray[138]],
      [countryArray[139], mortalityRateArray[139]],
      [countryArray[140], mortalityRateArray[140]],
      [countryArray[141], mortalityRateArray[141]],
      [countryArray[142], mortalityRateArray[142]],
      [countryArray[143], mortalityRateArray[143]],
      [countryArray[144], mortalityRateArray[144]],
      [countryArray[145], mortalityRateArray[145]],
      [countryArray[146], mortalityRateArray[146]],
      [countryArray[147], mortalityRateArray[147]],
      [countryArray[148], mortalityRateArray[148]],
      [countryArray[149], mortalityRateArray[149]],
      [countryArray[150], mortalityRateArray[150]],
      [countryArray[151], mortalityRateArray[151]],
      [countryArray[152], mortalityRateArray[152]],
      [countryArray[153], mortalityRateArray[153]],
      [countryArray[154], mortalityRateArray[154]],
      [countryArray[155], mortalityRateArray[155]],
      [countryArray[156], mortalityRateArray[156]],
      [countryArray[157], mortalityRateArray[157]],
      [countryArray[158], mortalityRateArray[158]],
      [countryArray[159], mortalityRateArray[159]],
      [countryArray[160], mortalityRateArray[160]],
      [countryArray[161], mortalityRateArray[161]],
      [countryArray[162], mortalityRateArray[162]],
      [countryArray[163], mortalityRateArray[163]],
      [countryArray[164], mortalityRateArray[164]],
      [countryArray[165], mortalityRateArray[165]],
      [countryArray[166], mortalityRateArray[166]],
      [countryArray[167], mortalityRateArray[167]],
      [countryArray[168], mortalityRateArray[168]],
      [countryArray[169], mortalityRateArray[169]],
      [countryArray[170], mortalityRateArray[170]],
      [countryArray[171], mortalityRateArray[171]],
      [countryArray[172], mortalityRateArray[172]],
      [countryArray[173], mortalityRateArray[173]],
      [countryArray[174], mortalityRateArray[174]],
      [countryArray[175], mortalityRateArray[175]],
      [countryArray[176], mortalityRateArray[176]],
      [countryArray[177], mortalityRateArray[177]],
      [countryArray[178], mortalityRateArray[178]],
      [countryArray[179], mortalityRateArray[179]],
      [countryArray[180], mortalityRateArray[180]],
      [countryArray[181], mortalityRateArray[181]],
      [countryArray[182], mortalityRateArray[182]],
      [countryArray[183], mortalityRateArray[183]],
      [countryArray[184], mortalityRateArray[184]],
      [countryArray[185], mortalityRateArray[185]],
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
        colors: ['#48ba17', 'yellow', 'orange', '#4B0082']
      },
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  };

};

function getCovidDataError(error) {
  console.error(error);
};
