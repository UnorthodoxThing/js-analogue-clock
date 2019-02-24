const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function init() {
let date = new Date();
let hour = date.getHours() % 12; //0 - 23
let minute = date.getMinutes();
let second = date.getSeconds();

// Every hour move 30 deg. Plus every minute it should move 30 / 60 deg.
let hourDeg = (hour * 30) + (0.5 * minute);
// Every minute move 6 deg. Plus every second it should move 6 / 60 deg.
let minuteDeg = (minute * 6) + (0.1 * second);
// Every second move 360 / 60 deg.
let secondDeg = second * 6;

hourHand.style.transform = `rotate(${hourDeg}deg)`;
minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
secondHand.style.transform = `rotate(${secondDeg}deg)`;

setTimeout(init, 1000);
}

init();
