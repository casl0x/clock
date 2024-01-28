const hourDiv = document.querySelector('.hours');
const dateDiv = document.querySelector('.date');

function display () {

    let today = new Date(); 

    let year = today.getFullYear();
    
    let monthList = ["January", "February", "March", "April", "Mei", "June", "July", "August", "September", "November", "December"];
    let month = monthList[today.getMonth()];

    let dayList = ["Sunday", "Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saterday"];
    let day = dayList[today.getDay()];
    let dayNum = today.getDate()

    let twoDigit = (elem) => {
        if (elem < 10){
            return elem = '0' + elem;
        } else {
            return elem;
        }
    }
    let hour = twoDigit(today.getHours());
    let minutes = twoDigit(today.getMinutes());
    let secondes = twoDigit(today.getSeconds())

    hourDiv.textContent = `${hour} : ${minutes} : ${secondes}`;
    dateDiv.textContent = `${day}, ${dayNum} ${month} ${year}`;

    setTimeout(display, 1000);
}

display();