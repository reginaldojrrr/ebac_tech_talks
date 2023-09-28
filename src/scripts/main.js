AOS.init();

const eventDate = new Date("Dec 12, 2023 19:00:00");
const eventTimeStamp = eventDate.getTime();

const hourCount = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const eventDistance = eventTimeStamp - currentTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysUntilEvent =  Math.floor(eventDistance / dayInMs);
    const hoursUntilEvent = Math.floor((eventDistance % dayInMs) / hourInMs);
    const minutesUntilEvent = Math.floor((eventDistance % hourInMs) / minuteInMs);
    const secondsUntilEvent = Math.floor((eventDistance % minuteInMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`

    if (eventDistance < 0) {
        clearInterval(hourCount);
        document.getElementById('counter').innerHTML = 'Evento expirado...'
    }
}, 1000);