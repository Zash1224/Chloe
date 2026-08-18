/* =========================================================
   CONFIGURATION
========================================================= */

const BIRTHDAY_DATE =
    "2026-10-28T00:00:00";


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


const surpriseModal =
    document.getElementById("surpriseModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalMessage =
    document.getElementById("modalMessage");

const modalLabel =
    document.getElementById("modalLabel");


const surpriseCards =
    document.querySelectorAll(
        ".surprise-card"
    );


/* =========================================================
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const birthday =
        new Date(BIRTHDAY_DATE);

    const now =
        new Date();

    const difference =
        birthday.getTime() -
        now.getTime();


    /*
       Birthday has arrived.
    */

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
            "Happy Birthday, beautiful. ♡";


        return;
    }


    /*
       Convert milliseconds
       into time units.
    */

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds /
            86400
        );


    const hours =
        Math.floor(
            (
                totalSeconds %
                86400
            ) / 3600
        );


    const minutes =
        Math.floor(
            (
                totalSeconds %
                3600
            ) / 60
        );


    const seconds =
        totalSeconds %
        60;


    /*
       Update display.
    */

    daysElement.textContent =
        String(days).padStart(
            2,
            "0"
        );


    hoursElement.textContent =
        String(hours).padStart(
            2,
            "0"
        );


    minutesElement.textContent =
        String(minutes).padStart(
            2,
            "0"
        );


    secondsElement.textContent =
        String(seconds).padStart(
            2,
            "0"
        );


    /*
       Change message depending
       on how close the birthday is.
    */

    if (days === 1) {

        countdownMessage.textContent =
            "Tomorrow is your day. ♡";

    }

    else if (days === 0) {

        countdownMessage.textContent =
            "It's almost time... ♡";

    }

    else if (days <= 7) {

        countdownMessage.textContent =
            "One week or less until your birthday. ✦";

    }

    else {

        countdownMessage.textContent =
            "Every second brings us closer. ♡";

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
   OPEN SURPRISE
========================================================= */

function openSurprise(card) {

    const title =
        card.dataset.title ||
        "A Little Surprise";


    const message =
        card.dataset.message ||
        "Your surprise goes here. ♡";


    modalTitle.textContent =
        title;


    modalMessage.textContent =
        message;


    modalLabel.textContent =
        "A LITTLE SURPRISE";


    surpriseModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE SURPRISE
========================================================= */

function closeSurprise() {

    surpriseModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "auto";

}


/* =========================================================
   SURPRISE BUTTONS
========================================================= */

surpriseCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                openSurprise(card);

            }
        );

    }
);


/* =========================================================
   CLOSE BUTTON
========================================================= */

modalClose.addEventListener(
    "click",
    closeSurprise
);


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

surpriseModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            surpriseModal
        ) {

            closeSurprise();

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            surpriseModal.classList.contains(
                "active"
            )
        ) {

            closeSurprise();

        }

    }
);