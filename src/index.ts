/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
function timeConversion(s: string) : string {
  
  let lastTwo = s.substring(8);
  //para ignorar el AM y PM 
  let fullTime = s.substring(0, 8);
  let times = fullTime.split(':');
  let time = 0;
  if(lastTwo === "PM") {
    if (times[0] !== "12"){
      time = parseInt(times[0], 10) + 12 ;
      times[0] = time.toString(); 
    }
  } else {
    times[0] 
    //para el caso AM
    if (times[0] === "12") {
          times[0] = "00"; 
    }
  }

  return times.join(':');
}
console.log('---------- Cool Programing ----------\n');
function main() {
  const testString = '07:05:45PM' ;
  const result = timeConversion(testString);
  console.log('Result: ', result);
}
main();