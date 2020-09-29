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
  var countryData = data["Countries"];
  var deathsArray = [];
  var countryArray = [];
  var populationArray = [];
  for (var i = 0; i < countryData.length; i++) {
    var totalDeaths = countryData[i]["TotalDeaths"];
    var country = countryData[i]["Country"];
    var population = countryData[i]["Premium"]["CountryStats"]["Population"];
    deathsArray.push(totalDeaths);
    countryArray.push(country);
    populationArray.push(population);
  };
  deathsArray.splice(136, 1);
  countryArray.splice(136, 1);
  populationArray.splice(136, 1);
  deathsArray.splice(142, 1);
  countryArray.splice(142, 1);
  populationArray.splice(142, 1);
  deathsArray.splice(100, 1);
  countryArray.splice(100, 1);
  populationArray.splice(100, 1);
  deathsArray.splice(139, 1);
  countryArray.splice(139, 1);
  populationArray.splice(139, 1);
  var perCapitaArray = [];
  for (var i = 0; i < populationArray.length; i++) {
    var division = deathsArray[i] / populationArray[i];
    var multiplication = division * 1000000;
    perCapitaArray.push(multiplication);
  };
  console.log("deaths:", deathsArray);
  console.log("population:", populationArray);
  console.log("per capita:", perCapitaArray);
  google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyBgy8LzcrzHLkGU97C0EgbAMfJJSv89-BI'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Deaths Per Capita'],
      [countryArray[0], perCapitaArray[0]],
      [countryArray[1], perCapitaArray[1]],
      [countryArray[2], perCapitaArray[2]],
      [countryArray[3], perCapitaArray[3]],
      [countryArray[4], perCapitaArray[4]],
      [countryArray[5], perCapitaArray[5]],
      [countryArray[6], perCapitaArray[6]],
      [countryArray[7], perCapitaArray[7]],
      [countryArray[8], perCapitaArray[8]],
      [countryArray[9], perCapitaArray[9]],
      [countryArray[10], perCapitaArray[10]],
      [countryArray[11], perCapitaArray[11]],
      [countryArray[12], perCapitaArray[12]],
      [countryArray[13], perCapitaArray[13]],
      [countryArray[14], perCapitaArray[14]],
      [countryArray[15], perCapitaArray[15]],
      [countryArray[16], perCapitaArray[16]],
      [countryArray[17], perCapitaArray[17]],
      [countryArray[18], perCapitaArray[18]],
      [countryArray[19], perCapitaArray[19]],
      [countryArray[20], perCapitaArray[20]],
      [countryArray[21], perCapitaArray[21]],
      [countryArray[22], perCapitaArray[22]],
      [countryArray[23], perCapitaArray[23]],
      [countryArray[24], perCapitaArray[24]],
      [countryArray[25], perCapitaArray[25]],
      [countryArray[26], perCapitaArray[26]],
      [countryArray[27], perCapitaArray[27]],
      [countryArray[28], perCapitaArray[28]],
      [countryArray[29], perCapitaArray[29]],
      [countryArray[30], perCapitaArray[30]],
      [countryArray[31], perCapitaArray[31]],
      [countryArray[32], perCapitaArray[32]],
      [countryArray[33], perCapitaArray[33]],
      [countryArray[34], perCapitaArray[34]],
      [countryArray[35], perCapitaArray[35]],
      [countryArray[36], perCapitaArray[36]],
      [countryArray[37], perCapitaArray[37]],
      [countryArray[38], perCapitaArray[38]],
      [countryArray[39], perCapitaArray[39]],
      [countryArray[40], perCapitaArray[40]],
      [countryArray[41], perCapitaArray[41]],
      [countryArray[42], perCapitaArray[42]],
      [countryArray[43], perCapitaArray[43]],
      [countryArray[44], perCapitaArray[44]],
      [countryArray[45], perCapitaArray[45]],
      [countryArray[46], perCapitaArray[46]],
      [countryArray[47], perCapitaArray[47]],
      [countryArray[48], perCapitaArray[48]],
      [countryArray[49], perCapitaArray[49]],
      [countryArray[50], perCapitaArray[50]],
      [countryArray[51], perCapitaArray[51]],
      [countryArray[52], perCapitaArray[52]],
      [countryArray[53], perCapitaArray[53]],
      [countryArray[54], perCapitaArray[54]],
      [countryArray[55], perCapitaArray[55]],
      [countryArray[56], perCapitaArray[56]],
      [countryArray[57], perCapitaArray[57]],
      [countryArray[58], perCapitaArray[58]],
      [countryArray[59], perCapitaArray[59]],
      [countryArray[60], perCapitaArray[60]],
      [countryArray[61], perCapitaArray[61]],
      [countryArray[62], perCapitaArray[62]],
      [countryArray[63], perCapitaArray[63]],
      [countryArray[64], perCapitaArray[64]],
      [countryArray[65], perCapitaArray[65]],
      [countryArray[66], perCapitaArray[66]],
      [countryArray[67], perCapitaArray[67]],
      [countryArray[68], perCapitaArray[68]],
      [countryArray[69], perCapitaArray[69]],
      [countryArray[70], perCapitaArray[70]],
      [countryArray[71], perCapitaArray[71]],
      [countryArray[72], perCapitaArray[72]],
      [countryArray[73], perCapitaArray[73]],
      [countryArray[74], perCapitaArray[74]],
      [countryArray[75], perCapitaArray[75]],
      [countryArray[76], perCapitaArray[76]],
      [countryArray[77], perCapitaArray[77]],
      [countryArray[78], perCapitaArray[78]],
      [countryArray[79], perCapitaArray[79]],
      [countryArray[80], perCapitaArray[80]],
      [countryArray[81], perCapitaArray[81]],
      [countryArray[82], perCapitaArray[82]],
      [countryArray[83], perCapitaArray[83]],
      [countryArray[84], perCapitaArray[84]],
      [countryArray[85], perCapitaArray[85]],
      [countryArray[86], perCapitaArray[86]],
      [countryArray[87], perCapitaArray[87]],
      [countryArray[88], perCapitaArray[88]],
      [countryArray[89], perCapitaArray[89]],
      [countryArray[90], perCapitaArray[90]],
      [countryArray[91], perCapitaArray[91]],
      [countryArray[92], perCapitaArray[92]],
      [countryArray[93], perCapitaArray[93]],
      [countryArray[94], perCapitaArray[94]],
      [countryArray[95], perCapitaArray[95]],
      [countryArray[96], perCapitaArray[96]],
      [countryArray[97], perCapitaArray[97]],
      [countryArray[98], perCapitaArray[98]],
      [countryArray[99], perCapitaArray[99]],
      [countryArray[100], perCapitaArray[100]],
      [countryArray[101], perCapitaArray[101]],
      [countryArray[102], perCapitaArray[102]],
      [countryArray[103], perCapitaArray[103]],
      [countryArray[104], perCapitaArray[104]],
      [countryArray[105], perCapitaArray[105]],
      [countryArray[106], perCapitaArray[106]],
      [countryArray[107], perCapitaArray[107]],
      [countryArray[108], perCapitaArray[108]],
      [countryArray[109], perCapitaArray[109]],
      [countryArray[110], perCapitaArray[110]],
      [countryArray[111], perCapitaArray[111]],
      [countryArray[112], perCapitaArray[112]],
      [countryArray[113], perCapitaArray[113]],
      [countryArray[114], perCapitaArray[114]],
      [countryArray[115], perCapitaArray[115]],
      [countryArray[116], perCapitaArray[116]],
      [countryArray[117], perCapitaArray[117]],
      [countryArray[118], perCapitaArray[118]],
      [countryArray[119], perCapitaArray[119]],
      [countryArray[120], perCapitaArray[120]],
      [countryArray[121], perCapitaArray[121]],
      [countryArray[122], perCapitaArray[122]],
      [countryArray[123], perCapitaArray[123]],
      [countryArray[124], perCapitaArray[124]],
      [countryArray[125], perCapitaArray[125]],
      [countryArray[126], perCapitaArray[126]],
      [countryArray[127], perCapitaArray[127]],
      [countryArray[128], perCapitaArray[128]],
      [countryArray[129], perCapitaArray[129]],
      [countryArray[130], perCapitaArray[130]],
      [countryArray[131], perCapitaArray[131]],
      [countryArray[132], perCapitaArray[132]],
      [countryArray[133], perCapitaArray[133]],
      [countryArray[134], perCapitaArray[134]],
      [countryArray[135], perCapitaArray[135]],
      [countryArray[136], perCapitaArray[136]],
      [countryArray[137], perCapitaArray[137]],
      [countryArray[138], perCapitaArray[138]],
      [countryArray[139], perCapitaArray[139]],
      [countryArray[140], perCapitaArray[140]],
      [countryArray[141], perCapitaArray[141]],
      [countryArray[142], perCapitaArray[142]],
      [countryArray[143], perCapitaArray[143]],
      [countryArray[144], perCapitaArray[144]],
      [countryArray[145], perCapitaArray[145]],
      [countryArray[146], perCapitaArray[146]],
      [countryArray[147], perCapitaArray[147]],
      [countryArray[148], perCapitaArray[148]],
      [countryArray[149], perCapitaArray[149]],
      [countryArray[150], perCapitaArray[150]],
      [countryArray[151], perCapitaArray[151]],
      [countryArray[152], perCapitaArray[152]],
      [countryArray[153], perCapitaArray[153]],
      [countryArray[154], perCapitaArray[154]],
      [countryArray[155], perCapitaArray[155]],
      [countryArray[156], perCapitaArray[156]],
      [countryArray[157], perCapitaArray[157]],
      [countryArray[158], perCapitaArray[158]],
      [countryArray[159], perCapitaArray[159]],
      [countryArray[160], perCapitaArray[160]],
      [countryArray[161], perCapitaArray[161]],
      [countryArray[162], perCapitaArray[162]],
      [countryArray[163], perCapitaArray[163]],
      [countryArray[164], perCapitaArray[164]],
      [countryArray[165], perCapitaArray[165]],
      [countryArray[166], perCapitaArray[166]],
      [countryArray[167], perCapitaArray[167]],
      [countryArray[168], perCapitaArray[168]],
      [countryArray[169], perCapitaArray[169]],
      [countryArray[170], perCapitaArray[170]],
      [countryArray[171], perCapitaArray[171]],
      [countryArray[172], perCapitaArray[172]],
      [countryArray[173], perCapitaArray[173]],
      [countryArray[174], perCapitaArray[174]],
      [countryArray[175], perCapitaArray[175]],
      [countryArray[176], perCapitaArray[176]],
      [countryArray[177], perCapitaArray[177]],
      [countryArray[178], perCapitaArray[178]],
      [countryArray[179], perCapitaArray[179]],
      [countryArray[180], perCapitaArray[180]],
      [countryArray[181], perCapitaArray[181]],
      [countryArray[182], perCapitaArray[182]],
      [countryArray[183], perCapitaArray[183]],
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
