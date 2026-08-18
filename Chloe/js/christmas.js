/* =========================================================
   CHRISTMAS PAGE
========================================================= */


/* =========================================================
   CHRISTMAS DATE
========================================================= */

const CHRISTMAS_DATE =
    new Date(
        "December 25, 2026 00:00:00"
    );


/* =========================================================
   ELEMENTS
========================================================= */

const days =
    document.getElementById("days");

const hours =
    document.getElementById("hours");

const minutes =
    document.getElementById("minutes");

const seconds =
    document.getElementById("seconds");

const countdownMessage =
    document.getElementById(
        "countdownMessage"
    );


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
        CHRISTMAS_DATE.getTime()
        -
        now.getTime();


    /* =====================================================
       CHRISTMAS HAS ARRIVED
    ===================================================== */

    if (difference <= 0) {

        days.textContent = "00";

        hours.textContent = "00";

        minutes.textContent = "00";

        seconds.textContent = "00";


        countdownMessage.textContent =
            "Merry Christmas, my love. ♡";


        return;

    }


    /* =====================================================
       CALCULATE TIME
    ===================================================== */

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const totalMinutes =
        Math.floor(
            totalSeconds / 60
        );


    const totalHours =
        Math.floor(
            totalMinutes / 60
        );


    const totalDays =
        Math.floor(
            totalHours / 24
        );


    const remainingHours =
        totalHours % 24;


    const remainingMinutes =
        totalMinutes % 60;


    const remainingSeconds =
        totalSeconds % 60;


    /* =====================================================
       DISPLAY
    ===================================================== */

    days.textContent =
        formatNumber(
            totalDays
        );


    hours.textContent =
        formatNumber(
            remainingHours
        );


    minutes.textContent =
        formatNumber(
            remainingMinutes
        );


    seconds.textContent =
        formatNumber(
            remainingSeconds
        );


    /* =====================================================
       SPECIAL MESSAGES
    ===================================================== */

    if (totalDays === 0) {

        countdownMessage.textContent =
            "Christmas is almost here. 🎄♡";

    }

    else if (totalDays === 1) {

        countdownMessage.textContent =
            "Tomorrow is Christmas. ✦";

    }

    else if (totalDays <= 7) {

        countdownMessage.textContent =
            "One week or less until Christmas. ❄";

    }

    else {

        countdownMessage.textContent =
            "Every second brings Christmas a little closer.";

    }

}


/* =========================================================
   START COUNTDOWN
========================================================= */

updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   SUBTLE SNOW MOVEMENT
========================================================= */

const snowflakes =
    document.querySelectorAll(
        ".snow"
    );


snowflakes.forEach(
    (snowflake, index) => {

        const duration =
            6 +
            Math.random() * 5;

        const delay =
            Math.random() * 4;


        snowflake.style.animationDuration =
            `${duration}s`;


        snowflake.style.animationDelay =
            `${delay}s`;

    }
);


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);