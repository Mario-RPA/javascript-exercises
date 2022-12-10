const convertToCelsius = function(temp) {
  return +(Math.round((temp - 32) * (5/9)+"e+1") + "e-1");
};

const convertToFahrenheit = function(temp) {
  return +(Math.round((temp * (9/5))+32+"e+1")+"e-1");
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
