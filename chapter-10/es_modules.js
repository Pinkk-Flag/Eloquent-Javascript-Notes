const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];

export function dayName(number) {
    return names[number];
}

export function dayNumber(name) {
    return names.indexOf(name);
}

/*
Thus we can do something like this:

import {dayName} from "./dayname.js";
let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
 -> Today is Monday

*/