const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

setInterval(() =>{
            
const now = new Date();
const hours = now.getHours() * 30;
const minutes = now.getMinutes() * 6;
const seconds = now.getSeconds() * 6;
        
hourHand.style.transform = `rotateZ(${(hours)+(minutes/12)}deg)`;
minuteHand.style.transform = `rotateZ(${minutes}deg)`;
secondHand.style.transform = `rotateZ(${seconds}deg)`
})
