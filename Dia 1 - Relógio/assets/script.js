let digitalElement = document.querySelector('.digital');
let secondsElement = document.querySelector('.p_s');
let minutesElement = document.querySelector('p_m');
let hoursElement = document.querySelector('p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.textContent = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);