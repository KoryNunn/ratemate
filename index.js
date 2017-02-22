var daysInYear = 365.2425; // https://en.wikipedia.org/wiki/Leap_year

function getRatios() {
    return {
        day: 1,
        week: 1 / 7,
        fortnight: 1 / (7 * 2),
        month: 1 / (daysInYear / 12),
        quarter: 1 / (daysInYear / 4),
        year: 1 / daysInYear
    };
}

var ratios = getRatios();

module.exports = function(value, currentRate, newRate){
    return (value * ratios[currentRate]) / ratios[newRate];
};

module.exports.ratios = getRatios;