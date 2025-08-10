const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];


// Create number hours (1 to 12)
for (let i = 1; i <= 12; i++) {
  numberElement.push(
    `<span style="--clock:${i};"><p>${i}</p></span>`
  );
// console.log(numberElement);
}

// Insert the number elements into the clock
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
console.log(numberElement);

for (let i = 1; i <= 60; i++) {
    const isBigTick = i % 5 === 0;
    barElement.push(
      `<span style="--clock:${i};"><p style="width:${isBigTick ? 6 : 2}px; height:${isBigTick ? 18 : 12}px;"></p></span>`
    );
  }
  
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));
const handHours = document.querySelector('.hand.hours')
const handMinutes = document.querySelector('.hand.minutes')
const handSeconds = document.querySelector('.hand.seconds')
function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours()%12;
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    let hourDeg = currentHours * 30 + currentMinutes * 0.5;
    let minuteDeg = currentMinutes * 6 + currentSeconds * 0.1;
    let secondDeg = currentSeconds * 6;
    handHours.style.transform = `rotate(${hourDeg}deg)`;
    handMinutes.style.transform = `rotate(${minuteDeg}deg)`;
    handSeconds.style.transform = `rotate(${secondDeg}deg)`;
}
getCurrentTime();
setInterval(getCurrentTime, 1000);
