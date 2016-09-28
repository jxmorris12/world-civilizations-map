# jack morris 09.26.16

import sys
import time

# set default encoding to avoid web utf-8 issues
reload(sys)
sys.setdefaultencoding("utf-8")

# hardcoded locations
loc_store = {
  "Mureybet, Syria": [36.043, 38.128],
  "Beidha, Jordan": [30.371, 35.448],
  "Basta, Jordan": [30.233, 35.533],
  "Luoyi, China": [34.620, 112.454],
  "Thebes, Egypt": [38.323, 23.320],
  "Akkad, Iraq": [33.100, 44.100],
  "Nippur, Iraq": [32.123, 45.225],
  "Calah, Iraq": [36.099, 43.328], # present-day: Nimrud
  "Gurganj, Turkmenistan": [42.333, 59.150]
}

# ranges for data columns
range_1 = 1  # Morris (2010)
range_2 = 4  # Modelski (2003)
range_3 = 7  # Chandler (1987)
range_4 = 10 # Chandler & Fox (1974)

# headers are preset
headers = ["Year","Population","Name","Present Location"]

# there should be 12 columns of data, plus 1 for the year
desired_col_length = 13

# choose one range of cols to read in
range_base = range_1

# open city data file - parsed from en.wikipedia.org/wiki/List_of_largest_cities_throughout_history
file_text = open('./LargestCities.csv').read()

# read raw text into table
in_word = False
data = []
row = []
current_word = ""
for char in file_text:
  if in_word:
    if char == "\"":
      in_word = False
    elif char == "\n" or char == "," or char == "\r":
      continue
    else:
      current_word += char
  else:
    if char == "\"":
      in_word = True
    elif char == "\n":
      row.append(current_word)
      data.append(row)
      current_word = ""
      row = []
    elif char == ",":
      row.append(current_word)
      current_word = ""
    elif char == "\r":
      continue
    else:
      current_word += char

# fix rows that did not start with a year
#    ( all the weird cases )
for i in range(len(data)):
  if len(data[i][0]) == 0:
    data[i].insert(0,"") # empty year
    data[i].insert(0,"")
    data[i].pop() # remove last thing (it's nothing)
    data[i].pop()
    continue
  firstchar = data[i][0][0]
  if firstchar == " ":
    data[i].insert(0,"")
    data[i].pop()
  elif not firstchar in "0123456789":
    data[i].insert(0,"")
    data[i].insert(0,"")
    data[i].pop()
    data[i].pop()

# add final row if there was no newline to end the file
if len(row) != 0: data.append(row)

# read in data for desired cols; turn this into our objects
objects = []
last_population = None
for row in data:
  year       = row[0]
  population = row[range_base]
  city       = row[range_base + 1]
  country    = row[range_base + 2]
  if len(population) == 0: population = last_population
  last_population = population
  if len(year) == 0: year = last_year
  last_year = year
  if len(city) == 0: continue
  datum = {
    "city"       : city,
    "country"    : country,
    "population" : population,
    "year"       : year
  }
  objects.append(datum)

# geocode objects
import geocoder
for obj in objects:
  this_location = obj["city"] + ", " + obj["country"]
  # hard-coded places
  if this_location in loc_store:
    obj["latLng"] = loc_store[this_location]
  # look up on Google Maps
  else:
    time.sleep(0.5) # Delay so I don't make too many requests
    reversed_loc  = geocoder.google(this_location)
    # print this_location, reversed_loc.latlng
    obj["latLng"] = reversed_loc.latlng

# clean up objects a bit
for obj in objects:
  # split lat and long
  obj["latitude"]  = obj["latLng"][0]
  obj["longitude"] = obj["latLng"][1]
  del obj["latLng"]

  # convert to ints
  if obj["year"][-2:] == "BC":
    obj["year"] = obj["year"][:len(obj["year"])-3]
    obj["year"] = int( obj["year"] ) * -1

  else:
    obj["year"] = int( obj["year"] )
    obj["population"] = int( obj["population"] )

# export objects
print "["
for obj in objects:
  obj["name"] = obj["city"] + ", " + obj["country"]
  for key in ["city","country"]: del obj[key]
  print str(obj) + ","
print "]"
