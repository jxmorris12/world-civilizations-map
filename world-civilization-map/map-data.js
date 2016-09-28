var MAP_DATA = [
  {'name': 'Mureybet, Syria', 'longitude': 38.128, 'year': -8000, 'latitude': 36.043, 'population': ' 500'},
  {'name': 'Beidha, Jordan', 'longitude': 35.448, 'year': -7000, 'latitude': 30.371, 'population': ' 1000'},
  {'name': 'Basta, Jordan', 'longitude': 35.533, 'year': -7000, 'latitude': 30.233, 'population': ' 1000'},
  {'name': '\xc3\x87atalh\xc3\xb6y\xc3\xbck, Turkey', 'longitude': 32.8256599, 'year': -7000, 'latitude': 37.6664372, 'population': ' 1000'},
  {'name': '\xc3\x87atalh\xc3\xb6y\xc3\xbck, Turkey', 'longitude': 32.8256599, 'year': -6000, 'latitude': 37.6664372, 'population': ' 3000'},
  {'name': 'Tell Brak, Syria', 'longitude': 41.05452409999999, 'year': -5000, 'latitude': 36.6824572, 'population': ' 4000'},
  {'name': 'Uruk, Iraq', 'longitude': 45.6388031, 'year': -4000, 'latitude': 31.3243503, 'population': '5000'},
  {'name': 'Tell Brak, Syria', 'longitude': 41.05452409999999, 'year': -4000, 'latitude': 36.6824572, 'population': '5000'},
  {'name': 'Uruk, Iraq', 'longitude': 45.6388031, 'year': -3500, 'latitude': 31.3243503, 'population': ' 8000'},
  {'name': 'Susa, Iran', 'longitude': 48.254283, 'year': -3500, 'latitude': 32.1957948, 'population': ' 8000'},
  {'name': 'Tell Brak, Syria', 'longitude': 41.05452409999999, 'year': -3500, 'latitude': 36.6824572, 'population': ' 8000'},
  {'name': 'Uruk, Iraq', 'longitude': 45.6388031, 'year': -3000, 'latitude': 31.3243503, 'population': ' 45000'},
  {'name': 'Uruk, Iraq', 'longitude': 45.6388031, 'year': -2500, 'latitude': 31.3243503, 'population': ' 50000'},
  {'name': 'Nippur, Iraq', 'longitude': 45.225, 'year': -2500, 'latitude': 32.123, 'population': ' 20000'},
  {'name': 'Umma, Iraq', 'longitude': 43.78651, 'year': -2400, 'latitude': 34.4065029, 'population': ' 40000'},
  {'name': 'Mari, Syria', 'longitude': 36.6877778, 'year': -2300, 'latitude': 34.93, 'population': ' 50000'},
  {'name': 'Akkad, Iraq', 'longitude': 44.1, 'year': -2250, 'latitude': 33.1, 'population': ' 35000'},
  {'name': 'Memphis, Egypt', 'longitude': 31.2506725, 'year': -2250, 'latitude': 29.8444642, 'population': ' 35000'},
  {'name': 'Memphis, Egypt', 'longitude': 31.2506725, 'year': -2000, 'latitude': 29.8444642, 'population': ' 60000'},
  {'name': 'Ur, Iraq', 'longitude': 46.1061111, 'year': -2000, 'latitude': 30.9608333, 'population': ' 60000'},
  {'name': 'Babylon, Iraq', 'longitude': 44.5501935, 'year': -1750, 'latitude': 32.468191, 'population': ' 65000'},
  {'name': 'Uruk, Iraq', 'longitude': 45.6388031, 'year': -1500, 'latitude': 31.3243503, 'population': '75000'},
  {'name': 'Thebes, Egypt', 'longitude': 23.32, 'year': -1500, 'latitude': 38.323, 'population': '75000'},
  {'name': 'Thebes, Egypt', 'longitude': 23.32, 'year': -1400, 'latitude': 38.323, 'population': ' 80000'},
  {'name': 'Thebes, Egypt', 'longitude': 23.32, 'year': -1300, 'latitude': 38.323, 'population': ' 80000'},
  {'name': 'Babylon, Iraq', 'longitude': 44.5501935, 'year': -1200, 'latitude': 32.468191, 'population': '80000'},
  {'name': 'Thebes, Egypt', 'longitude': 23.32, 'year': -1200, 'latitude': 38.323, 'population': '80000'},
  {'name': 'Memphis, Egypt', 'longitude': 31.2506725, 'year': -1100, 'latitude': 29.8444642, 'population': ' 50000'},
  {'name': 'Thebes, Egypt', 'longitude': 23.32, 'year': -1100, 'latitude': 38.323, 'population': ' 50000'},
  {'name': 'Tanis, Egypt', 'longitude': 31.8968886, 'year': -1100, 'latitude': 30.952808, 'population': ' 50000'},
  {'name': 'Anyang, China', 'longitude': 114.392393, 'year': -1100, 'latitude': 36.097577, 'population': ' 50000'},
  {'name': 'Thebes, Egypt', 'longitude': 23.32, 'year': -1000, 'latitude': 38.323, 'population': ' 50000'},
  {'name': "Xi'an, China", 'longitude': 108.93977, 'year': -1000, 'latitude': 34.341575, 'population': ' 35000'},
  {'name': 'Luoyang, China', 'longitude': 112.45404, 'year': -1000, 'latitude': 34.619683, 'population': ' 55000'},
  {'name': 'Babylon, Iraq', 'longitude': 44.5501935, 'year': -1000, 'latitude': 32.468191, 'population': ' 55000'},
  {'name': 'Thebes, Egypt', 'longitude': 23.32, 'year': -900, 'latitude': 38.323, 'population': ' 50000'},
  {'name': 'Calah, Iraq', 'longitude': 43.328, 'year': -800, 'latitude': 36.099, 'population': ' 75000'},
  {'name': 'Nineveh, Iraq', 'longitude': 42.2362435, 'year': -700, 'latitude': 36.229574, 'population': ' 100000'},
  {'name': 'Babylon, Iraq', 'longitude': 44.5501935, 'year': -600, 'latitude': 32.468191, 'population': ' 125000'},
  {'name': 'Luoyi, China', 'longitude': 112.454, 'year': -600, 'latitude': 34.62, 'population': ' 125000'},
  {'name': 'Babylon, Iraq', 'longitude': 44.5501935, 'year': -500, 'latitude': 32.468191, 'population': '150000'},
  {'name': 'Luoyi, China', 'longitude': 112.454, 'year': -500, 'latitude': 34.62, 'population': '150000'},
  {'name': 'Linzi, China', 'longitude': 118.309118, 'year': -500, 'latitude': 36.826981, 'population': '150000'},
  {'name': 'Babylon, Iraq', 'longitude': 44.5501935, 'year': -400, 'latitude': 32.468191, 'population': ' 150000'},
  {'name': 'Babylon, Iraq', 'longitude': 44.5501935, 'year': -300, 'latitude': 32.468191, 'population': ' 150000'},
  {'name': 'Alexandria, Egypt', 'longitude': 29.9187387, 'year': -300, 'latitude': 31.2000924, 'population': ' 150000'},
  {'name': 'Alexandria, Egypt', 'longitude': 29.9187387, 'year': -200, 'latitude': 31.2000924, 'population': '300000'},
  {'name': "Xi'an, China", 'longitude': 108.93977, 'year': -200, 'latitude': 34.341575, 'population': ' 400000'},
  {'name': 'Alexandria, Egypt', 'longitude': 29.9187387, 'year': -100, 'latitude': 31.2000924, 'population': ' 400000'},
  {'name': 'Rome, Italy', 'longitude': 12.4963655, 'year': -100, 'latitude': 41.9027835, 'population': ' 400000'},
  {'name': 'Rome, Italy', 'longitude': 12.4963655, 'year': 1, 'latitude': 41.9027835, 'population': 1000000},
  {'name': 'Rome, Italy', 'longitude': 12.4963655, 'year': 100, 'latitude': 41.9027835, 'population': 1000000},
  {'name': 'Rome, Italy', 'longitude': 12.4963655, 'year': 200, 'latitude': 41.9027835, 'population': 1000000},
  {'name': 'Rome, Italy', 'longitude': 12.4963655, 'year': 300, 'latitude': 41.9027835, 'population': 800000},
  {'name': 'Rome, Italy', 'longitude': 12.4963655, 'year': 400, 'latitude': 41.9027835, 'population': 800000},
  {'name': 'Constantinople, Turkey', 'longitude': 28.9783589, 'year': 500, 'latitude': 41.0082376, 'population': 450000},
  {'name': "Chang'an, China", 'longitude': 114.53906, 'year': 600, 'latitude': 38.036654, 'population': 600000},
  {'name': "Chang'an, China", 'longitude': 114.53906, 'year': 700, 'latitude': 38.036654, 'population': 1000000},
  {'name': "Chang'an, China", 'longitude': 114.53906, 'year': 800, 'latitude': 38.036654, 'population': 1000000},
  {'name': 'Baghdad, Iraq', 'longitude': 44.3614875, 'year': 800, 'latitude': 33.3128057, 'population': 700000},
  {'name': "Chang'an, China", 'longitude': 114.53906, 'year': 900, 'latitude': 38.036654, 'population': 750000},
  {'name': 'Kaifeng, China', 'longitude': 114.307583, 'year': 1000, 'latitude': 34.797281, 'population': 1000000},
  {'name': 'Kaifeng, China', 'longitude': 114.307583, 'year': 1100, 'latitude': 34.797281, 'population': 1000000},
  {'name': 'Hangzhou, China', 'longitude': 120.15507, 'year': 1200, 'latitude': 30.274085, 'population': 1000000},
  {'name': 'Gurganj, Turkmenistan', 'longitude': 59.15, 'year': 1210, 'latitude': 42.333, 'population': 600000},
  {'name': 'Hangzhou, China', 'longitude': 120.15507, 'year': 1300, 'latitude': 30.274085, 'population': 800000},
  {'name': 'Nanjing, China', 'longitude': 118.796877, 'year': 1400, 'latitude': 32.060255, 'population': 500000},
  {'name': 'Beijing, China', 'longitude': 116.407395, 'year': 1500, 'latitude': 39.904211, 'population': 678000},
  {'name': 'Beijing, China', 'longitude': 116.407395, 'year': 1600, 'latitude': 39.904211, 'population': 700000},
  {'name': 'Beijing, China', 'longitude': 116.407395, 'year': 1700, 'latitude': 39.904211, 'population': 650000},
  {'name': 'Beijing, China', 'longitude': 116.407395, 'year': 1700, 'latitude': 39.904211, 'population': 650000},
  {'name': 'Edo, Japan', 'longitude': 139.6917064, 'year': 1720, 'latitude': 35.6894875, 'population': 650000},
  {'name': 'Beijing, China', 'longitude': 116.407395, 'year': 1800, 'latitude': 39.904211, 'population': 1100000},
  {'name': 'London, United Kingdom', 'longitude': -0.1277583, 'year': 1825, 'latitude': 51.5073509, 'population': 1335000},
  {'name': 'London, United Kingdom', 'longitude': -0.1277583, 'year': 1900, 'latitude': 51.5073509, 'population': 6600000},
  {'name': 'Tokyo, Japan', 'longitude': 139.7319925, 'year': 2000, 'latitude': 35.7090259, 'population': 26400000},
];