
// const monthsE1 = document.getElementById("months");
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");



function countdown() {
        const yashBirthday = document.getElementById("DOB").value; 

        const yashBirthdayDate = new Date(yashBirthday);
        const currentDate = new Date();


        if (yashBirthdayDate == "Invalid Date") {

                // monthsE1.innerHTML = 0;
                daysE1.innerHTML = 0;
                hoursE1.innerHTML = 0;
                minutesE1.innerHTML = 0;
                secondsE1.innerHTML = 0;
        }

        else if (yashBirthdayDate < currentDate) {
                document.getElementById("message").innerHTML = "Choose upcoming date please!";
                // monthsE1.innerHTML = 0;
                daysE1.innerHTML = 0;
                hoursE1.innerHTML = 0;
                minutesE1.innerHTML = 0;
                secondsE1.innerHTML = 0;
        }
        else {

                document.getElementById("message").innerHTML = "";

                const totalSeconds = (yashBirthdayDate - currentDate) / 1000;

                // const months = Math.floor(totalSeconds / 2629746);
                const days = Math.floor(totalSeconds /  3600 / 24);
                const hours = Math.floor(totalSeconds / 3600) % 24;
                const minutes = Math.floor(totalSeconds / 60) % 60;
                const seconds = Math.floor(totalSeconds) % 60;

              
                // monthsE1.innerHTML = months;
                daysE1.innerHTML = days;
                hoursE1.innerHTML = hours;
                minutesE1.innerHTML = minutes;
                secondsE1.innerHTML = seconds;
                return;
        }
}
countdown();
setInterval(countdown, 1000);
