//DATA
var MAP_DATA = [
  {'name': 'Mureybet, Syria', 'latLng': [36.043, 38.128], 'year': -8000, 'population': ' 500'},
  {'name': 'Beidha, Jordan', 'latLng': [30.371, 35.448], 'year': -7000, 'population': ' 1000'},
  {'name': 'Basta, Jordan', 'latLng': [30.233, 35.533], 'year': -7000, 'population': ' 1000'},
  {'name': '\xc3\x87atalh\xc3\xb6y\xc3\xbck, Turkey', 'latLng': [37.6664372, 32.8256599], 'year': -7000, 'population': ' 1000'},
  {'name': '\xc3\x87atalh\xc3\xb6y\xc3\xbck, Turkey', 'latLng': [37.6664372, 32.8256599], 'year': -6000, 'population': ' 3000'},
  {'name': 'Tell Brak, Syria', 'latLng': [36.6824572, 41.05452409999999], 'year': -5000, 'population': ' 4000'},
  {'name': 'Uruk, Iraq', 'latLng': [31.3243503, 45.6388031], 'year': -4000, 'population': '5000'},
  {'name': 'Tell Brak, Syria', 'latLng': [36.6824572, 41.05452409999999], 'year': -4000, 'population': '5000'},
  {'name': 'Uruk, Iraq', 'latLng': [31.3243503, 45.6388031], 'year': -3500, 'population': ' 8000'},
  {'name': 'Susa, Iran', 'latLng': [32.1957948, 48.254283], 'year': -3500, 'population': ' 8000'},
  {'name': 'Tell Brak, Syria', 'latLng': [36.6824572, 41.05452409999999], 'year': -3500, 'population': ' 8000'},
  {'name': 'Uruk, Iraq', 'latLng': [31.3243503, 45.6388031], 'year': -3000, 'population': ' 45000'},
  {'name': 'Uruk, Iraq', 'latLng': [31.3243503, 45.6388031], 'year': -2500, 'population': ' 50000'},
  {'name': 'Nippur, Iraq', 'latLng': [32.123, 45.225], 'year': -2500, 'population': ' 20000'},
  {'name': 'Umma, Iraq', 'latLng': [34.4065029, 43.78651], 'year': -2400, 'population': ' 40000'},
  {'name': 'Mari, Syria', 'latLng': [34.93, 36.6877778], 'year': -2300, 'population': ' 50000'},
  {'name': 'Akkad, Iraq', 'latLng': [33.1, 44.1], 'year': -2250, 'population': ' 35000'},
  {'name': 'Memphis, Egypt', 'latLng': [29.8444642, 31.2506725], 'year': -2250, 'population': ' 35000'},
  {'name': 'Memphis, Egypt', 'latLng': [29.8444642, 31.2506725], 'year': -2000, 'population': ' 60000'},
  {'name': 'Ur, Iraq', 'latLng': [30.9608333, 46.1061111], 'year': -2000, 'population': ' 60000'},
  {'name': 'Babylon, Iraq', 'latLng': [32.468191, 44.5501935], 'year': -1750, 'population': ' 65000'},
  {'name': 'Uruk, Iraq', 'latLng': [31.3243503, 45.6388031], 'year': -1500, 'population': '75000'},
  {'name': 'Thebes, Egypt', 'latLng': [38.323, 23.32], 'year': -1500, 'population': '75000'},
  {'name': 'Thebes, Egypt', 'latLng': [38.323, 23.32], 'year': -1400, 'population': ' 80000'},
  {'name': 'Thebes, Egypt', 'latLng': [38.323, 23.32], 'year': -1300, 'population': ' 80000'},
  {'name': 'Babylon, Iraq', 'latLng': [32.468191, 44.5501935], 'year': -1200, 'population': '80000'},
  {'name': 'Thebes, Egypt', 'latLng': [38.323, 23.32], 'year': -1200, 'population': '80000'},
  {'name': 'Memphis, Egypt', 'latLng': [29.8444642, 31.2506725], 'year': -1100, 'population': ' 50000'},
  {'name': 'Thebes, Egypt', 'latLng': [38.323, 23.32], 'year': -1100, 'population': ' 50000'},
  {'name': 'Tanis, Egypt', 'latLng': [30.952808, 31.8968886], 'year': -1100, 'population': ' 50000'},
  {'name': 'Anyang, China', 'latLng': [36.097577, 114.392393], 'year': -1100, 'population': ' 50000'},
  {'name': 'Thebes, Egypt', 'latLng': [38.323, 23.32], 'year': -1000, 'population': ' 50000'},
  {'name': "Xi'an, China", 'latLng': [34.341575, 108.93977], 'year': -1000, 'population': ' 35000'},
  {'name': 'Luoyang, China', 'latLng': [34.619683, 112.45404], 'year': -1000, 'population': ' 55000'},
  {'name': 'Babylon, Iraq', 'latLng': [32.468191, 44.5501935], 'year': -1000, 'population': ' 55000'},
  {'name': 'Thebes, Egypt', 'latLng': [38.323, 23.32], 'year': -900, 'population': ' 50000'},
  {'name': 'Calah, Iraq', 'latLng': [36.099, 43.328], 'year': -800, 'population': ' 75000'},
  {'name': 'Nineveh, Iraq', 'latLng': [36.229574, 42.2362435], 'year': -700, 'population': ' 100000'},
  {'name': 'Babylon, Iraq', 'latLng': [32.468191, 44.5501935], 'year': -600, 'population': ' 125000'},
  {'name': 'Luoyi, China', 'latLng': [34.62, 112.454], 'year': -600, 'population': ' 125000'},
  {'name': 'Babylon, Iraq', 'latLng': [32.468191, 44.5501935], 'year': -500, 'population': '150000'},
  {'name': 'Luoyi, China', 'latLng': [34.62, 112.454], 'year': -500, 'population': '150000'},
  {'name': 'Linzi, China', 'latLng': [36.826981, 118.309118], 'year': -500, 'population': '150000'},
  {'name': 'Babylon, Iraq', 'latLng': [32.468191, 44.5501935], 'year': -400, 'population': ' 150000'},
  {'name': 'Babylon, Iraq', 'latLng': [32.468191, 44.5501935], 'year': -300, 'population': ' 150000'},
  {'name': 'Alexandria, Egypt', 'latLng': [31.2000924, 29.9187387], 'year': -300, 'population': ' 150000'},
  {'name': 'Alexandria, Egypt', 'latLng': [31.2000924, 29.9187387], 'year': -200, 'population': '300000'},
  {'name': "Xi'an, China", 'latLng': [34.341575, 108.93977], 'year': -200, 'population': ' 400000'},
  {'name': 'Alexandria, Egypt', 'latLng': [31.2000924, 29.9187387], 'year': -100, 'population': ' 400000'},
  {'name': 'Rome, Italy', 'latLng': [41.9027835, 12.4963655], 'year': -100, 'population': ' 400000'},
  {'name': 'Rome, Italy', 'latLng': [41.9027835, 12.4963655], 'year': '1', 'population': 1000000},
  {'name': 'Rome, Italy', 'latLng': [41.9027835, 12.4963655], 'year': '100', 'population': 1000000},
  {'name': 'Rome, Italy', 'latLng': [41.9027835, 12.4963655], 'year': '200', 'population': 1000000},
  {'name': 'Rome, Italy', 'latLng': [41.9027835, 12.4963655], 'year': '300', 'population': 800000},
  {'name': 'Rome, Italy', 'latLng': [41.9027835, 12.4963655], 'year': '400', 'population': 800000},
  {'name': 'Constantinople, Turkey', 'latLng': [41.0082376, 28.9783589], 'year': '500', 'population': 450000},
  {'name': "Chang'an, China", 'latLng': [38.036654, 114.53906], 'year': '600', 'population': 600000},
  {'name': "Chang'an, China", 'latLng': [38.036654, 114.53906], 'year': '700', 'population': 1000000},
  {'name': "Chang'an, China", 'latLng': [38.036654, 114.53906], 'year': '800', 'population': 1000000},
  {'name': 'Baghdad, Iraq', 'latLng': [33.3128057, 44.3614875], 'year': '800', 'population': 700000},
  {'name': "Chang'an, China", 'latLng': [38.036654, 114.53906], 'year': '900', 'population': 750000},
  {'name': 'Kaifeng, China', 'latLng': [34.797281, 114.307583], 'year': '1000', 'population': 1000000},
  {'name': 'Kaifeng, China', 'latLng': [34.797281, 114.307583], 'year': '1100', 'population': 1000000},
  {'name': 'Hangzhou, China', 'latLng': [30.274085, 120.15507], 'year': '1200', 'population': 1000000},
  {'name': 'Gurganj, Turkmenistan', 'latLng': [42.333, 59.15], 'year': '1210', 'population': 600000},
  {'name': 'Hangzhou, China', 'latLng': [30.274085, 120.15507], 'year': '1300', 'population': 800000},
  {'name': 'Nanjing, China', 'latLng': [32.060255, 118.796877], 'year': '1400', 'population': 500000},
  {'name': 'Beijing, China', 'latLng': [39.904211, 116.407395], 'year': '1500', 'population': 678000},
  {'name': 'Beijing, China', 'latLng': [39.904211, 116.407395], 'year': '1600', 'population': 700000},
  {'name': 'Beijing, China', 'latLng': [39.904211, 116.407395], 'year': '1700', 'population': 650000},
  {'name': 'Beijing, China', 'latLng': [39.904211, 116.407395], 'year': '1700', 'population': 650000},
  {'name': 'Edo, Japan', 'latLng': [35.6894875, 139.6917064], 'year': '1720', 'population': 650000},
  {'name': 'Beijing, China', 'latLng': [39.904211, 116.407395], 'year': '1800', 'population': 1100000},
  {'name': 'London, United Kingdom', 'latLng': [51.5073509, -0.1277583], 'year': '1825', 'population': 1335000},
  {'name': 'London, United Kingdom', 'latLng': [51.5073509, -0.1277583], 'year': '1900', 'population': 6600000},
  {'name': 'Tokyo, Japan', 'latLng': [35.7090259, 139.7319925], 'year': '2000', 'population': 26400000}
];

var MAP;


// initialize jquery slider

var loadSlider = function() {
  var theSlider = $('#slider');
  // create slider
  theSlider.slider({
    value: -8000,
    min: -8000,
    max: 2016,
    formatter: function(value) {
      return 'Year: ' + value;
    }
  });

  var lastSliderVal = theSlider.slider("option","value");

  // detect slider chang
  
  var onSlide = function(event, ui) {
    var val = theSlider.slider("option","value");
    console.log('val',val);
    $("#year").text("Year " + val);

    // increase marker number
    if(lastSliderVal < val) {
      console.log('INC');
      var markersToAdd = [];
      for(var i = 0; i < MAP_DATA.length; i++) {
        console.log('i',i);
        var dataPoint = MAP_DATA[i];
        console.log('dataPoint', dataPoint);
        var year = parseInt(dataPoint["year"]);
        if(year <= val) {
          // add marker
          markersToAdd.push(dataPoint);
        }
        else {
          // past markers to add (since they are in year order)
          break;
        }
      }
      MAP.addMarkers(markersToAdd, []);
    }
    // decrease marker number
    else {

    }
    lastSliderVal = val;
  };

  theSlider.on("slide", onSlide);
  onSlide();
}

// mark map

var createMap = function() {
  $('#map').vectorMap({
    map: 'world_mill',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#F8E23B',
        stroke: '#383f47'
      }
    },
    regionStyle: {
      hover: {
        cursor: 'default'
      }
    },
    onRegionTipShow: function (e, tip, code) {
      // don't show tooltip names for default regions (like countries)
      e.preventDefault();
    },
    backgroundColor: '#383f47',
    markers: []
  });
  MAP = $('#map').vectorMap("get", "mapObject");
};

var load = function() {
  createMap();
  loadSlider();
};

$(load);