// jack morris 09/28/16

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