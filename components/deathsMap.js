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
  url: "https://api.covid19api.com/summary",
  method: "GET",
  success: getCovidDataSuccess,
  error: getCovidDataError
});

function getCovidDataSuccess(data) {
  globalDeaths.textContent = thousands_separators(data["Global"]["TotalDeaths"]);
  var countryData = data["Countries"];
  var deathsArray = [];
  var countryArray = [];
  for (var i = 0; i < countryData.length; i++) {
    var totalDeaths = countryData[i]["TotalDeaths"];
    var country = countryData[i]["Country"];
    deathsArray.push(totalDeaths);
    countryArray.push(country);
  };
  google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyBgy8LzcrzHLkGU97C0EgbAMfJJSv89-BI'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Number of Deaths'],
      [countryArray[0], deathsArray[0]],
      [countryArray[1], deathsArray[1]],
      [countryArray[2], deathsArray[2]],
      [countryArray[3], deathsArray[3]],
      [countryArray[4], deathsArray[4]],
      [countryArray[5], deathsArray[5]],
      [countryArray[6], deathsArray[6]],
      [countryArray[7], deathsArray[7]],
      [countryArray[8], deathsArray[8]],
      [countryArray[9], deathsArray[9]],
      [countryArray[10], deathsArray[10]],
      [countryArray[11], deathsArray[11]],
      [countryArray[12], deathsArray[12]],
      [countryArray[13], deathsArray[13]],
      [countryArray[14], deathsArray[14]],
      [countryArray[15], deathsArray[15]],
      [countryArray[16], deathsArray[16]],
      [countryArray[17], deathsArray[17]],
      [countryArray[18], deathsArray[18]],
      [countryArray[19], deathsArray[19]],
      [countryArray[20], deathsArray[20]],
      [countryArray[21], deathsArray[21]],
      [countryArray[22], deathsArray[22]],
      [countryArray[23], deathsArray[23]],
      [countryArray[24], deathsArray[24]],
      [countryArray[25], deathsArray[25]],
      [countryArray[26], deathsArray[26]],
      [countryArray[27], deathsArray[27]],
      [countryArray[28], deathsArray[28]],
      [countryArray[29], deathsArray[29]],
      [countryArray[30], deathsArray[30]],
      [countryArray[31], deathsArray[31]],
      [countryArray[32], deathsArray[32]],
      [countryArray[33], deathsArray[33]],
      [countryArray[34], deathsArray[34]],
      [countryArray[35], deathsArray[35]],
      [countryArray[36], deathsArray[36]],
      [countryArray[37], deathsArray[37]],
      [countryArray[38], deathsArray[38]],
      [countryArray[39], deathsArray[39]],
      [countryArray[40], deathsArray[40]],
      [countryArray[41], deathsArray[41]],
      [countryArray[42], deathsArray[42]],
      [countryArray[43], deathsArray[43]],
      [countryArray[44], deathsArray[44]],
      [countryArray[45], deathsArray[45]],
      [countryArray[46], deathsArray[46]],
      [countryArray[47], deathsArray[47]],
      [countryArray[48], deathsArray[48]],
      [countryArray[49], deathsArray[49]],
      [countryArray[50], deathsArray[50]],
      [countryArray[51], deathsArray[51]],
      [countryArray[52], deathsArray[52]],
      [countryArray[53], deathsArray[53]],
      [countryArray[54], deathsArray[54]],
      [countryArray[55], deathsArray[55]],
      [countryArray[56], deathsArray[56]],
      [countryArray[57], deathsArray[57]],
      [countryArray[58], deathsArray[58]],
      [countryArray[59], deathsArray[59]],
      [countryArray[60], deathsArray[60]],
      [countryArray[61], deathsArray[61]],
      [countryArray[62], deathsArray[62]],
      [countryArray[63], deathsArray[63]],
      [countryArray[64], deathsArray[64]],
      [countryArray[65], deathsArray[65]],
      [countryArray[66], deathsArray[66]],
      [countryArray[67], deathsArray[67]],
      [countryArray[68], deathsArray[68]],
      [countryArray[69], deathsArray[69]],
      [countryArray[70], deathsArray[70]],
      [countryArray[71], deathsArray[71]],
      [countryArray[72], deathsArray[72]],
      [countryArray[73], deathsArray[73]],
      [countryArray[74], deathsArray[74]],
      [countryArray[75], deathsArray[75]],
      [countryArray[76], deathsArray[76]],
      [countryArray[77], deathsArray[77]],
      [countryArray[78], deathsArray[78]],
      [countryArray[79], deathsArray[79]],
      [countryArray[80], deathsArray[80]],
      [countryArray[81], deathsArray[81]],
      [countryArray[82], deathsArray[82]],
      [countryArray[83], deathsArray[83]],
      [countryArray[84], deathsArray[84]],
      [countryArray[85], deathsArray[85]],
      [countryArray[86], deathsArray[86]],
      [countryArray[87], deathsArray[87]],
      [countryArray[88], deathsArray[88]],
      [countryArray[89], deathsArray[89]],
      [countryArray[90], deathsArray[90]],
      [countryArray[91], deathsArray[91]],
      [countryArray[92], deathsArray[92]],
      [countryArray[93], deathsArray[93]],
      [countryArray[94], deathsArray[94]],
      [countryArray[95], deathsArray[95]],
      [countryArray[96], deathsArray[96]],
      [countryArray[97], deathsArray[97]],
      [countryArray[98], deathsArray[98]],
      [countryArray[99], deathsArray[99]],
      [countryArray[100], deathsArray[100]],
      [countryArray[101], deathsArray[101]],
      [countryArray[102], deathsArray[102]],
      [countryArray[103], deathsArray[103]],
      [countryArray[104], deathsArray[104]],
      [countryArray[105], deathsArray[105]],
      [countryArray[106], deathsArray[106]],
      [countryArray[107], deathsArray[107]],
      [countryArray[108], deathsArray[108]],
      [countryArray[109], deathsArray[109]],
      [countryArray[110], deathsArray[110]],
      [countryArray[111], deathsArray[111]],
      [countryArray[112], deathsArray[112]],
      [countryArray[113], deathsArray[113]],
      [countryArray[114], deathsArray[114]],
      [countryArray[115], deathsArray[115]],
      [countryArray[116], deathsArray[116]],
      [countryArray[117], deathsArray[117]],
      [countryArray[118], deathsArray[118]],
      [countryArray[119], deathsArray[119]],
      [countryArray[120], deathsArray[120]],
      [countryArray[121], deathsArray[121]],
      [countryArray[122], deathsArray[122]],
      [countryArray[123], deathsArray[123]],
      [countryArray[124], deathsArray[124]],
      [countryArray[125], deathsArray[125]],
      [countryArray[126], deathsArray[126]],
      [countryArray[127], deathsArray[127]],
      [countryArray[128], deathsArray[128]],
      [countryArray[129], deathsArray[129]],
      [countryArray[130], deathsArray[130]],
      [countryArray[131], deathsArray[131]],
      [countryArray[132], deathsArray[132]],
      [countryArray[133], deathsArray[133]],
      [countryArray[134], deathsArray[134]],
      [countryArray[135], deathsArray[135]],
      [countryArray[136], deathsArray[136]],
      [countryArray[137], deathsArray[137]],
      [countryArray[138], deathsArray[138]],
      [countryArray[139], deathsArray[139]],
      [countryArray[140], deathsArray[140]],
      [countryArray[141], deathsArray[141]],
      [countryArray[142], deathsArray[142]],
      [countryArray[143], deathsArray[143]],
      [countryArray[144], deathsArray[144]],
      [countryArray[145], deathsArray[145]],
      [countryArray[146], deathsArray[146]],
      [countryArray[147], deathsArray[147]],
      [countryArray[148], deathsArray[148]],
      [countryArray[149], deathsArray[149]],
      [countryArray[150], deathsArray[150]],
      [countryArray[151], deathsArray[151]],
      [countryArray[152], deathsArray[152]],
      [countryArray[153], deathsArray[153]],
      [countryArray[154], deathsArray[154]],
      [countryArray[155], deathsArray[155]],
      [countryArray[156], deathsArray[156]],
      [countryArray[157], deathsArray[157]],
      [countryArray[158], deathsArray[158]],
      [countryArray[159], deathsArray[159]],
      [countryArray[160], deathsArray[160]],
      [countryArray[161], deathsArray[161]],
      [countryArray[162], deathsArray[162]],
      [countryArray[163], deathsArray[163]],
      [countryArray[164], deathsArray[164]],
      [countryArray[165], deathsArray[165]],
      [countryArray[166], deathsArray[166]],
      [countryArray[167], deathsArray[167]],
      [countryArray[168], deathsArray[168]],
      [countryArray[169], deathsArray[169]],
      [countryArray[170], deathsArray[170]],
      [countryArray[171], deathsArray[171]],
      [countryArray[172], deathsArray[172]],
      [countryArray[173], deathsArray[173]],
      [countryArray[174], deathsArray[174]],
      [countryArray[175], deathsArray[175]],
      [countryArray[176], deathsArray[176]],
      [countryArray[177], deathsArray[177]],
      [countryArray[178], deathsArray[178]],
      [countryArray[179], deathsArray[179]],
      [countryArray[180], deathsArray[180]],
      [countryArray[181], deathsArray[181]],
      [countryArray[182], deathsArray[182]],
      [countryArray[183], deathsArray[183]],
      [countryArray[184], deathsArray[184]],
      [countryArray[185], deathsArray[185]],
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
        colors: ['#48ba17', 'yellow', 'orange', '#db4639']
      },
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  };

};

function getCovidDataError(error) {
  console.error(error);
};
