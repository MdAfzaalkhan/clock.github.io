let hour    = document.querySelector('.hour');
let min     = document.querySelector('.minute');
let sec     = document.querySelector('.second');
let time    = document.querySelector('.time');
let date    = document.querySelector('.date');
let mode    = document.querySelector('.mode');

mode.addEventListener('click',(a)=>{
    let html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove("dark")
        a.target.innerHTML="Dark Mode"
    }else{
        html.classList.add("dark");
        a.target.innerHTML="Light Mode"
    }
})

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function timing(){
    const timeG = new Date();
    const month = timeG.getMonth()
    const dateG = timeG.getDate()
    const day = timeG.getDay()
    const hourG = timeG.getHours()
    const hourForClock = hourG % 12     // it will show time in 12 hr format ex:12%12 is 0, 13%12 is 1 
    const minG = timeG.getMinutes()
    const secG = timeG.getSeconds()
    const ampm = hourG>=12? 'PM':'AM'

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock,0,12,0,360)}deg)`;
    min.style.transform = `translate(-50%, -100%) rotate(${scale(minG,0,59,0,360)}deg)`;
    sec.style.transform = `translate(-50%, -100%) rotate(${scale(secG,0,59,0,360)}deg)`;

    time.innerHTML = `${hourForClock}:${minG < 10 ? `0${minG}`:minG} ${ampm}`
    date.innerHTML = `${days[day]}, ${months[month]} <span class="circle-date">${dateG}</span>`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



timing()
setInterval(timing, 1000)