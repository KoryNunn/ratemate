var test = require('tape'),
    ratemate = require('../');

test('x', function(t){
    var rate = 100;

    t.equal(Math.round(ratemate(rate, 'day', 'day')), 100);
    t.equal(Math.round(ratemate(rate, 'day', 'week')), 700);
    t.equal(Math.round(ratemate(rate, 'day', 'fortnight')), 1400);

    t.equal(Math.round(ratemate(rate, 'week', 'day')), 14);
    t.equal(ratemate(rate, 'week', 'week'), 100);
    t.equal(ratemate(rate, 'week', 'fortnight'), 200);
    t.equal(Math.round(ratemate(rate, 'week', 'month')), 435);
    t.equal(Math.round(ratemate(rate, 'week', 'quarter')), 1304);
    t.equal(Math.round(ratemate(rate, 'week', 'year')), 5218);

    t.equal(Math.round(ratemate(rate, 'month', 'day')), 3);

    t.end();
});