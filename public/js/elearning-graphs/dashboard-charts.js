
$(function () {
//$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=world-population.json&callback=?', function (data) {
    var uservisitsdata = [
        {
            "code": "AF",
            "z": 30552
        }, {
            "code": "AL",
            "z": 2897
        }, {
            "code": "DZ",
            "z": 39208
        }, {
            "code": "AS",
            "z": 55
        }, {
            "code": "ADO",
            "z": 79
        }, {
            "code": "AO",
            "z": 21472
        }, {
            "code": "AG",
            "z": 90
        }, {
            "code": "AR",
            "z": 41446
        }, {
            "code": "AM",
            "z": 2977
        }, {
            "code": "AW",
            "z": 103
        }, {
            "code": "AU",
            "z": 23129
        }, {
            "code": "AT",
            "z": 8480
        }, {
            "code": "AZ",
            "z": 9417
        }, {
            "code": "BS",
            "z": 377
        }, {
            "code": "BH",
            "z": 1332
        }, {
            "code": "BD",
            "z": 156595
        }, {
            "code": "BB",
            "z": 285
        }, {
            "code": "BY",
            "z": 9466
        }, {
            "code": "BE",
            "z": 11183
        }, {
            "code": "BZ",
            "z": 332
        }, {
            "code": "BJ",
            "z": 10323
        }, {
            "code": "BM",
            "z": 65
        }, {
            "code": "BT",
            "z": 754
        }, {
            "code": "BO",
            "z": 10671
        }, {
            "code": "BA",
            "z": 3829
        }, {
            "code": "BW",
            "z": 2021
        }, {
            "code": "BR",
            "z": 200362
        }, {
            "code": "BN",
            "z": 418
        }, {
            "code": "BG",
            "z": 7265
        }, {
            "code": "BF",
            "z": 16935
        }, {
            "code": "BI",
            "z": 10163
        }, {
            "code": "CV",
            "z": 499
        }, {
            "code": "KH",
            "z": 15135
        }, {
            "code": "CM",
            "z": 22254
        }, {
            "code": "CA",
            "z": 35154
        }, {
            "code": "KY",
            "z": 58
        }, {
            "code": "CF",
            "z": 4616
        }, {
            "code": "TD",
            "z": 12825
        }, {
            "code": "CHI",
            "z": 162
        }, {
            "code": "CL",
            "z": 17620
        }, {
            "code": "CN",
            "z": 1357380
        }, {
            "code": "CO",
            "z": 48321
        }, {
            "code": "KM",
            "z": 735
        }, {
            "code": "ZAR",
            "z": 67514
        }, {
            "code": "CG",
            "z": 4448
        }, {
            "code": "CR",
            "z": 4872
        }, {
            "code": "CI",
            "z": 20316
        }, {
            "code": "HR",
            "z": 4256
        }, {
            "code": "CU",
            "z": 11266
        }, {
            "code": "CW",
            "z": 154
        }, {
            "code": "CY",
            "z": 1141
        }, {
            "code": "CZ",
            "z": 10514
        }, {
            "code": "DK",
            "z": 5615
        }, {
            "code": "DJ",
            "z": 873
        }, {
            "code": "DM",
            "z": 72
        }, {
            "code": "DO",
            "z": 10404
        }, {
            "code": "EC",
            "z": 15738
        }, {
            "code": "EG",
            "z": 82056
        }, {
            "code": "SV",
            "z": 6340
        }, {
            "code": "GQ",
            "z": 757
        }, {
            "code": "ER",
            "z": 6333
        }, {
            "code": "EE",
            "z": 1318
        }, {
            "code": "ET",
            "z": 94101
        }, {
            "code": "FO",
            "z": 49
        }, {
            "code": "FJ",
            "z": 881
        }, {
            "code": "FI",
            "z": 5439
        }, {
            "code": "FR",
            "z": 65940
        }, {
            "code": "PF",
            "z": 277
        }, {
            "code": "GA",
            "z": 1672
        }, {
            "code": "GM",
            "z": 1849
        }, {
            "code": "GE",
            "z": 4487
        }, {
            "code": "DE",
            "z": 80652
        }, {
            "code": "GH",
            "z": 25905
        }, {
            "code": "GR",
            "z": 11028
        }, {
            "code": "GL",
            "z": 56
        }, {
            "code": "GD",
            "z": 106
        }, {
            "code": "GU",
            "z": 165
        }, {
            "code": "GT",
            "z": 15468
        }, {
            "code": "GN",
            "z": 11745
        }, {
            "code": "GW",
            "z": 1704
        }, {
            "code": "GY",
            "z": 800
        }, {
            "code": "HT",
            "z": 10317
        }, {
            "code": "HN",
            "z": 8098
        }, {
            "code": "HK",
            "z": 7188
        }, {
            "code": "HU",
            "z": 9894
        }, {
            "code": "IS",
            "z": 324
        }, {
            "code": "IN",
            "z": 1252140
        }, {
            "code": "ID",
            "z": 249866
        }, {
            "code": "IR",
            "z": 77447
        }, {
            "code": "IQ",
            "z": 33417
        }, {
            "code": "IE",
            "z": 4598
        }, {
            "code": "IMY",
            "z": 86
        }, {
            "code": "IL",
            "z": 8060
        }, {
            "code": "IT",
            "z": 60234
        }, {
            "code": "JM",
            "z": 2715
        }, {
            "code": "JP",
            "z": 127339
        }, {
            "code": "JO",
            "z": 6460
        }, {
            "code": "KZ",
            "z": 17035
        }, {
            "code": "KE",
            "z": 44354
        }, {
            "code": "KI",
            "z": 102
        }, {
            "code": "KP",
            "z": 24895
        }, {
            "code": "KR",
            "z": 50220
        }, {
            "code": "KSV",
            "z": 1824
        }, {
            "code": "KW",
            "z": 3369
        }, {
            "code": "KG",
            "z": 5720
        }, {
            "code": "LA",
            "z": 6770
        }, {
            "code": "LV",
            "z": 2013
        }, {
            "code": "LB",
            "z": 4467
        }, {
            "code": "LS",
            "z": 2074
        }, {
            "code": "LR",
            "z": 4294
        }, {
            "code": "LY",
            "z": 6202
        }, {
            "code": "LI",
            "z": 37
        }, {
            "code": "LT",
            "z": 2958
        }, {
            "code": "LU",
            "z": 543
        }, {
            "code": "MO",
            "z": 566
        }, {
            "code": "MK",
            "z": 2107
        }, {
            "code": "MG",
            "z": 22925
        }, {
            "code": "MW",
            "z": 16363
        }, {
            "code": "MY",
            "z": 29717
        }, {
            "code": "MV",
            "z": 345
        }, {
            "code": "ML",
            "z": 15302
        }, {
            "code": "MT",
            "z": 423
        }, {
            "code": "MH",
            "z": 53
        }, {
            "code": "MR",
            "z": 3890
        }, {
            "code": "MU",
            "z": 1259
        }, {
            "code": "MX",
            "z": 122332
        }, {
            "code": "FM",
            "z": 104
        }, {
            "code": "MD",
            "z": 3559
        }, {
            "code": "MC",
            "z": 38
        }, {
            "code": "MN",
            "z": 2839
        }, {
            "code": "ME",
            "z": 621
        }, {
            "code": "MA",
            "z": 33008
        }, {
            "code": "MZ",
            "z": 25834
        }, {
            "code": "MM",
            "z": 53259
        }, {
            "code": "NA",
            "z": 2303
        }, {
            "code": "NP",
            "z": 27797
        }, {
            "code": "NL",
            "z": 16804
        }, {
            "code": "NC",
            "z": 262
        }, {
            "code": "NZ",
            "z": 4442
        }, {
            "code": "NI",
            "z": 6080
        }, {
            "code": "NE",
            "z": 17831
        }, {
            "code": "NG",
            "z": 173615
        }, {
            "code": "MP",
            "z": 54
        }, {
            "code": "NO",
            "z": 5080
        }, {
            "code": "OM",
            "z": 3632
        }, {
            "code": "PK",
            "z": 182143
        }, {
            "code": "PW",
            "z": 21
        }, {
            "code": "PA",
            "z": 3864
        }, {
            "code": "PG",
            "z": 7321
        }, {
            "code": "PY",
            "z": 6802
        }, {
            "code": "PE",
            "z": 30376
        }, {
            "code": "PH",
            "z": 98394
        }, {
            "code": "PL",
            "z": 38514
        }, {
            "code": "PT",
            "z": 10457
        }, {
            "code": "PR",
            "z": 3615
        }, {
            "code": "QA",
            "z": 2169
        }, {
            "code": "ROM",
            "z": 19981
        }, {
            "code": "RU",
            "z": 143500
        }, {
            "code": "RW",
            "z": 11777
        }, {
            "code": "WS",
            "z": 190
        }, {
            "code": "SM",
            "z": 31
        }, {
            "code": "ST",
            "z": 193
        }, {
            "code": "SA",
            "z": 28829
        }, {
            "code": "SN",
            "z": 14133
        }, {
            "code": "RS",
            "z": 7164
        }, {
            "code": "SC",
            "z": 89
        }, {
            "code": "SL",
            "z": 6092
        }, {
            "code": "SG",
            "z": 5399
        }, {
            "code": "SX",
            "z": 40
        }, {
            "code": "SK",
            "z": 5413
        }, {
            "code": "SI",
            "z": 2060
        }, {
            "code": "SB",
            "z": 561
        }, {
            "code": "SO",
            "z": 10496
        }, {
            "code": "ZA",
            "z": 53157
        }, {
            "code": "SS",
            "z": 11296
        }, {
            "code": "ES",
            "z": 46618
        }, {
            "code": "LK",
            "z": 20483
        }, {
            "code": "KN",
            "z": 54
        }, {
            "code": "LC",
            "z": 182
        }, {
            "code": "MF",
            "z": 31
        }, {
            "code": "VC",
            "z": 109
        }, {
            "code": "SD",
            "z": 37964
        }, {
            "code": "SR",
            "z": 539
        }, {
            "code": "SZ",
            "z": 1250
        }, {
            "code": "SE",
            "z": 9600
        }, {
            "code": "CH",
            "z": 8088
        }, {
            "code": "SY",
            "z": 22846
        }, {
            "code": "TJ",
            "z": 8208
        }, {
            "code": "TZ",
            "z": 49253
        }, {
            "code": "TH",
            "z": 67011
        }, {
            "code": "TMP",
            "z": 1180
        }, {
            "code": "TG",
            "z": 6817
        }, {
            "code": "TO",
            "z": 105
        }, {
            "code": "TT",
            "z": 1341
        }, {
            "code": "TN",
            "z": 10887
        }, {
            "code": "TR",
            "z": 74933
        }, {
            "code": "TM",
            "z": 5240
        }, {
            "code": "TC",
            "z": 33
        }, {
            "code": "TV",
            "z": 10
        }, {
            "code": "UG",
            "z": 37579
        }, {
            "code": "UA",
            "z": 45490
        }, {
            "code": "AE",
            "z": 9346
        }, {
            "code": "GB",
            "z": 64107
        }, {
            "code": "US",
            "z": 316129
        }, {
            "code": "UY",
            "z": 3407
        }, {
            "code": "UZ",
            "z": 30243
        }, {
            "code": "VU",
            "z": 253
        }, {
            "code": "VE",
            "z": 30405
        }, {
            "code": "VN",
            "z": 89709
        }, {
            "code": "VI",
            "z": 105
        }, {
            "code": "WBG",
            "z": 4170
        }, {
            "code": "YE",
            "z": 24407
        }, {
            "code": "ZM",
            "z": 14539
        }, {
            "code": "ZW",
            "z": 14150
        }
    ];
    // Correct UK to GB in data
    $.each(uservisitsdata, function () {
        if (this.code === 'UK') {
            this.code = 'GB';
        }
    });

    Highcharts.mapChart('userVisitsWorld', {
        chart: {
            borderWidth: 1,
            map: 'custom/world'
        },

        title: {
            text: 'Webpage Visits'
        },

        subtitle: {
            text: 'User Visits in E-Learning DPITC'
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'User Visits',
            joinBy: ['iso-a2', 'code'],
            data: uservisitsdata,
            minSize: 4,
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.code}: {point.z}'
            }
        }]
    });
    //});
});

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/uservisits',
        success: function (data) {
            //console.log('success', data);
            var allviewsdata = [];
            for(var i=0;i<data.length;i++){
                var temp = [];
                if(allviewsdata.length>0){
                    var temp2 = allviewsdata[allviewsdata.length-1][0];
                    if(temp2!=Date.parse(data[i].dateViewed)){
                        temp.push(Date.parse(data[i].dateViewed));
                        temp.push(1);
                        allviewsdata.push(temp);
                    }
                    else{
                        allviewsdata[allviewsdata.length-1][1]++;
                    }
                }
                else{
                    temp.push(Date.parse(data[i].dateViewed));
                    temp.push(1);
                    allviewsdata.push(temp);
                }
            }
            generateAreaChart(allviewsdata);
        }
    });
    
});
function generateAreaChart(allviewsdata){
    Highcharts.stockChart('allVisit', {


        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Total Number of Visits'
        },

        series: [{
            name: 'User Visits in All Years',
            data: allviewsdata,
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }]
    });
}
/*$(function () {
    Highcharts.chart('userViewByISP', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'Apples',
            color: Highcharts.getOptions().colors[0]
        }, {
            id: 'B',
            name: 'Bananas',
            color: Highcharts.getOptions().colors[1]
        }, {
            id: 'O',
            name: 'Oranges',
            color: Highcharts.getOptions().colors[2]
        }, {
            name: 'Anne',
            parent: 'A',
            value: 5
        }, {
            name: 'Rick',
            parent: 'A',
            value: 3
        }, {
            name: 'Peter',
            parent: 'A',
            value: 4
        }, {
            name: 'Anne',
            parent: 'B',
            value: 4
        }, {
            name: 'Rick',
            parent: 'B',
            value: 10
        }, {
            name: 'Peter',
            parent: 'B',
            value: 1
        }, {
            name: 'Anne',
            parent: 'O',
            value: 1
        }, {
            name: 'Rick',
            parent: 'O',
            value: 3
        }, {
            name: 'Peter',
            parent: 'O',
            value: 3
        }, {
            name: 'Susanne',
            parent: 'Kiwi',
            value: 2,
            color: Highcharts.getOptions().colors[3]
        }]
    }],
    title: {
        text: 'Trending Topics'
    }
});
});*/

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/uservisitsbyISP',
        success: function (data) {
            generateTreeMapChart(data);
        }
    });
    
});

function generateTreeMapChart(data){
    var points = [],
    ispP,
    ispVal,
    ispI = 0,
    sectorP,
    sectorI,
    infoP,
    infoI,
    isp,
    sector,
    info,
    infoName = {
        'Views': 'Views',
    };

    for (isp in data) {
        if (data.hasOwnProperty(isp)) {
            ispVal = 0;
            ispP = {
                id: 'id_' + ispI,
                name: isp,
                color: Highcharts.getOptions().colors[ispI]
            };
            sectorI = 0;
            for (sector in data[isp]) {
                if (data[isp].hasOwnProperty(sector)) {
                    sectorP = {
                        id: ispP.id + '_' + sectorI,
                        name: sector,
                        parent: ispP.id
                    };
                    points.push(sectorP);
                    infoI = 0;
                    for (info in data[isp][sector]) {
                        if (data[isp][sector].hasOwnProperty(info)) {
                            infoP = {
                                id: sectorP.id + '_' + infoI,
                                name: infoName[info],
                                parent: sectorP.id,
                                value: Math.round(+data[isp][sector][info])
                            };
                            ispVal += infoP.value;
                            points.push(infoP);
                            infoI = infoI + 1;
                        }
                    }
                    sectorI = sectorI + 1;
                }
            }
            ispP.value = Math.round(ispVal / sectorI);
            points.push(ispP);
            ispI = ispI + 1;
        }
    }
    Highcharts.chart('userViewByISP', {
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
                enabled: false
            },
            levelIsConstant: false,
            levels: [{
                level: 1,
                dataLabels: {
                    enabled: true
                },
                borderWidth: 3
            }],
            data: points
        }],
        subtitle: {
            text: 'Click the sector to see the number of views per topic'
        },
        title: {
            text: 'Popular Topic by Sector'
        }
    });
}

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/reactionsbysector',
        success: function (data) {
            generateComboReactionChart(data);
        }
    });
});

function generateComboReactionChart(data){
    var sector = [];
    var sectorlike = [];
    var sectorhappy = [];
    var sectorsad = [];
    var sectorave = [];
    var totallike = 0;
    var totalhappy = 0;
    var totalsad = 0;
    for(var i=0;i<data.length;i++){
        sector.push(data[i].sector);
        sectorlike.push(data[i].likes);
        sectorhappy.push(data[i].happy);
        sectorsad.push(data[i].sad);
        sectorave.push(data[i].average);
        totallike+=data[i].likes;
        totalhappy+=data[i].happy;
        totalsad+=data[i].sad;
    }
    Highcharts.chart('allReactions', {
    title: {
        text: 'Reactions chart by sector'
    },
    xAxis: {
        categories: sector
    },
    labels: {
        items: [{
            html: 'Total Reactions',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Like',
        data: sectorlike
    }, {
        type: 'column',
        name: 'Happy',
        data: sectorhappy
    }, {
        type: 'column',
        name: 'Sad',
        data: sectorsad
    }, {
        type: 'spline',
        name: 'Average',
        data: sectorave,
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total Reactions',
        data: [{
            name: 'Like',
            y: totallike,
            color: Highcharts.getOptions().colors[0] // Like's color
        }, {
            name: 'Happy',
            y: totalhappy,
            color: Highcharts.getOptions().colors[1] // Happy's color
        }, {
            name: 'Sad',
            y: totalsad,
            color: Highcharts.getOptions().colors[2] // Sad's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
    });
}

/*$(function () {
    Highcharts.chart('allReactionsRatio', {

        chart: {
            type: 'solidgauge',
            marginTop: 50
        },

        title: {
            text: 'Activity',
            style: {
                fontSize: '24px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '{series.name}<br><span style="font-size:1em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: 'Move',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 80
            }]
        }, {
            name: 'Exercise',
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y: 65
            }]
        }, {
            name: 'Stand',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '62%',
                innerRadius: '38%',
                y: 50
            }]
        }]
    },
    function callback() {

        // Move icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                'M', 8, -8, 'L', 16, 0, 8, 8])
            .attr({
                'stroke': '#ffffff',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });
});*/

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/uservisitsbyRegion',
        success: function (data) {
            //console.log(data);
            //generateTreeMap2Chart(data);
        }
    });
    var data = {
        'National Capital Region': {
            'Metro Manila': {
                'Corn': '22'
            },
            'Caloocan': {
                'Banana': '32'
            },
            'Makati': {
                'Coconut': '44'
            },
            'Marikina': {
                'Peanut': '55'
            },
            'Pasig': {
                'Rice': '11'
            }
        },
        'Cordillera Administrative Region (CAR)': {
            'Ifugao': {
                'Rice': '87'
            },
            'Kalinga': {
                'Coconut': '76'
            },
            'Mountain Province': {
                'Corn': '23'
            },
            'Baguio': {
                'Corn': '23'
            }
        },
        'CALABARZON': {
            'Cavite': {
                'Rice': '122'
            },
            'Laguna': {
                'Coconut': '24'
            },
            'Batangas': {
                'Corn': '68'
            },
            'Rizal': {
                'Rice': '356'
            },
            'Quezon': {
                'Coconut': '98'
            }
        },
        'SOCCSKSARGEN': {
            'Cotabato': {
                'Rice': '122'
            },
            'Sarangani': {
                'Coconut': '24'
            },
            'South Cotabato': {
                'Corn': '68'
            },
            'Sultan Kudarat': {
                'Rice': '356'
            },
            'General Santos': {
                'Coconut': '98'
            }
        },
        'Central Luzon': {
            'Aurora': {
                'Rice': '123'
            },
            'Bataan': {
                'Coconut': '12'
            }
        }

    };
    generateTreeMap2Chart(data);

});

function generateTreeMap2Chart(data){
    var points = [],
    ispP,
    ispVal,
    ispI = 0,
    sectorP,
    sectorI,
    infoP,
    infoI,
    isp,
    sector,
    info,
    infoName = {
        'Corn': 'Corn',
        'Rice': 'Rice',
        'Coconut': 'Coconut',
        'Peanut': 'Peanut',
        'Banana': 'Banana',
    };

    for (isp in data) {
        if (data.hasOwnProperty(isp)) {
            ispVal = 0;
            ispP = {
                id: 'id_' + ispI,
                name: isp,
                color: Highcharts.getOptions().colors[ispI]
            };
            sectorI = 0;
            for (sector in data[isp]) {
                if (data[isp].hasOwnProperty(sector)) {
                    sectorP = {
                        id: ispP.id + '_' + sectorI,
                        name: sector,
                        parent: ispP.id
                    };
                    points.push(sectorP);
                    infoI = 0;
                    for (info in data[isp][sector]) {
                        if (data[isp][sector].hasOwnProperty(info)) {
                            infoP = {
                                id: sectorP.id + '_' + infoI,
                                name: infoName[info],
                                parent: sectorP.id,
                                value: Math.round(+data[isp][sector][info])
                            };
                            ispVal += infoP.value;
                            points.push(infoP);
                            infoI = infoI + 1;
                        }
                    }
                    sectorI = sectorI + 1;
                }
            }
            ispP.value = Math.round(ispVal / sectorI);
            points.push(ispP);
            ispI = ispI + 1;
        }
    }
    Highcharts.chart('popularperregion', {
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'strip',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
                enabled: false
            },
            levelIsConstant: false,
            levels: [{
                level: 1,
                dataLabels: {
                    enabled: true
                },
                borderWidth: 3
            }],
            data: points
        }],
        subtitle: {
            text: 'Click the region to see the number of views per topic'
        },
        title: {
            text: 'Popular Topic by Region'
        }
    });
}