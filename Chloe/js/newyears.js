/* =========================================================
   NEW YEAR'S DAY CONFIGURATION
========================================================= */

/*
   New Year's Day.

   The page counts down to:
   January 1, 2027
*/

const NEW_YEAR_DATE =
    new Date("January 1, 2027 00:00:00");


/* =========================================================
   ELEMENTS
========================================================= */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const countdownMessage =
    document.getElementById("countdownMessage");


/* =========================================================
   FORMAT NUMBER
========================================================= */

function formatNumber(number) {

    return String(number)
        .padStart(2, "0");

}


/* =========================================================
   UPDATE COUNTDOWN
========================================================= */

function updateCountdown() {

    const now =
        new Date();

    const difference =
        NEW_YEAR_DATE.getTime() -
        now.getTime();


    /* =====================================================
       NEW YEAR HAS ARRIVED
    ===================================================== */

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";


        countdownMessage.textContent =
            "Happy New Year, my love. ♡";


        return;
    }


    /* =====================================================
       CALCULATE TIME
    ===================================================== */

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) /
            3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) /
            60
        );


    const seconds =
        totalSeconds % 60;


    /* =====================================================
       DISPLAY
    ===================================================== */

    daysElement.textContent =
        formatNumber(days);


    hoursElement.textContent =
        formatNumber(hours);


    minutesElement.textContent =
        formatNumber(minutes);


    secondsElement.textContent =
        formatNumber(seconds);

}


/* =========================================================
   START COUNTDOWN
========================================================= */

updateCountdown();


setInterval(
    updateCountdown,
    1000
);

