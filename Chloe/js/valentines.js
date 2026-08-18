/* =========================================================
   VALENTINE'S DAY CONFIGURATION
========================================================= */

/*
   Valentine's Day is February 14th.

   The script automatically finds the NEXT
   February 14th so the countdown continues
   working from year to year.
*/


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
   GET NEXT VALENTINE'S DAY
========================================================= */

function getNextValentinesDay() {

    const now =
        new Date();

    let year =
        now.getFullYear();


    /*
       Start with Valentine's Day
       for the current year.
    */

    let valentinesDay =
        new Date(
            year,
            1,
            14,
            0,
            0,
            0
        );


    /*
       If Valentine's Day has already
       passed this year, use next year.
    */

    if (
        now >= valentinesDay
    ) {

        year++;

        valentinesDay =
            new Date(
                year,
                1,
                14,
                0,
                0,
                0
            );

    }


    return valentinesDay;

}


/* =========================================================
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const now =
        new Date();

    const target =
        getNextValentinesDay();


    const difference =
        target.getTime() -
        now.getTime();


    /*
       If the countdown reaches zero,
       refresh it for the next Valentine's Day.
    */

    if (
        difference <= 0
    ) {

        showValentinesMessage();

        setTimeout(
            updateCountdown,
            1000
        );

        return;

    }


    /*
       Calculate time remaining.
    */

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
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    /*
       Update the page.
    */

    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");


    /*
       Update the message.
    */

    countdownMessage.textContent =
        "Every second brings Valentine's Day closer. ♡";

}


/* =========================================================
   VALENTINE'S DAY MESSAGE
========================================================= */

function showValentinesMessage() {

    daysElement.textContent = "00";

    hoursElement.textContent = "00";

    minutesElement.textContent = "00";

    secondsElement.textContent = "00";


    countdownMessage.textContent =
        "Happy Valentine's Day, my love. ♥";

}


/* =========================================================
   START COUNTDOWN
========================================================= */

updateCountdown();


/*
   Update once every second.
*/

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   SMALL HEART INTERACTION
========================================================= */

document
    .querySelectorAll(".love-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                card.animate(

                    [

                        {
                            transform:
                                "translateY(0) scale(1)"
                        },

                        {
                            transform:
                                "translateY(-5px) scale(1.015)"
                        },

                        {
                            transform:
                                "translateY(0) scale(1)"
                        }

                    ],

                    {
                        duration: 400,
                        easing:
                            "cubic-bezier(.16,1,.3,1)"
                    }

                );

            }
        );

    });


/* =========================================================
   MEMORY INTERACTION
========================================================= */

document
    .querySelectorAll(".memory-item")
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const heart =
                    item.querySelector(
                        ".memory-heart"
                    );


                if (!heart) {
                    return;
                }


                heart.animate(

                    [

                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(1.4)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }

                    ],

                    {
                        duration: 450,
                        easing:
                            "ease-out"
                    }

                );

            }
        );

    });