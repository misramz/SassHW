
function clockAnswer() {

var hours = new Date().getHours();
var mins = new Date().getMinutes();
var sec = new Date().getSeconds();


// getting display to show up side by side
var newNum = (hours > 12 || hours < 21) ? '0' + (hours - 12) : hours;
// getting rid of the military time
var clock = newNum + ':' + mins + ':' + sec;
var hexa = '#' + newNum + mins + sec;
// getting JS work to show up in browser
var watch = document.querySelector('.hours');

var bg = document.querySelector('body');
//
watch.innerHTML = clock;
bg.style.background = hexa;

console.log(hours,mins,sec);
 }

var timer = setInterval(clockAnswer, 1000);














// function clock () {
//   setTimeout ('clock')
// }
