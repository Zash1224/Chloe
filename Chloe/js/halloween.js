/* =========================================================
   HALLOWEEN PAGE
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const HALLOWEEN_DATE =
    new Date(
        "October 31, 2026 00:00:00"
    );


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
    document.getElementById(
        "countdownMessage"
    );


/* =========================================================
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const now =
        new Date();

    const difference =
        HALLOWEEN_DATE.getTime() -
        now.getTime();


    /* =====================================================
       HALLOWEEN HAS ARRIVED
    ====================================================== */

    if (difference <= 0) {

        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";


        countdownMessage.textContent =
            "Happy Halloween, my love! 🎃♡";

        return;
    }


    /* =====================================================
       CALCULATE TIME
    ====================================================== */

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
    ====================================================== */

    daysElement.textContent =
        String(days)
            .padStart(2, "0");


    hoursElement.textContent =
        String(hours)
            .padStart(2, "0");


    minutesElement.textContent =
        String(minutes)
            .padStart(2, "0");


    secondsElement.textContent =
        String(seconds)
            .padStart(2, "0");


    /* =====================================================
       DYNAMIC MESSAGE
    ====================================================== */

    if (days <= 1) {

        countdownMessage.textContent =
            "It's almost time to get spooky... 🎃";

    }

    else if (days <= 7) {

        countdownMessage.textContent =
            "One week until our spooky little night. 👻";

    }

    else if (days <= 30) {

        countdownMessage.textContent =
            "The spooky season is getting closer... 🦇";

    }

    else {

        countdownMessage.textContent =
            "Counting down until our Halloween memories. ♡";

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
   SMALL INTERACTION
========================================================= */

document
    .querySelectorAll(".spooky-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.toggle(
                    "selected"
                );

            }
        );

    });
