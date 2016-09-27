# ratemate

Convert between rates of different frequencies.

"Gr8 d8 r8 m8, I'd r8 it 8/8"

## Usage

ratemate(value, currentRate, requiredRate); -> newValue

```
var ratemate = require('ratemate');

var thingsPerDay = 10;

var thingsPerMonth = ratemate(thingsPerDay, 'day', 'month');

thingsPerMonth; // -> 43.481249999999996 ish

```

## Available rates:

1. day
1. week
1. fortnight
1. month
1. quarter
1. year

## Where are you pulling these numbers from?

When you average out leap years/seconds etc there are 365.2425 days in a year:
https://en.wikipedia.org/wiki/Leap_year