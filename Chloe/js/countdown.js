/* =========================================================
   COUNTDOWN PAGE
========================================================= */


/* =========================================================
   EVENTS
========================================================= */

const EVENTS = [

    {
        id: "move-in",
        title: "Move In Day",
        month: 8,
        day: 22,
        year: 2026,
        icon: "📦"
    },

    {
        id: "birthday",
        title: "Her Birthday",
        month: 10,
        day: 28,
        year: 2026,
        icon: "🎂"
    },

    {
        id: "halloween",
        title: "Halloween",
        month: 10,
        day: 31,
        icon: "🎃"
    },

    {
        id: "thanksgiving",
        title: "Thanksgiving",
        month: 11,
        day: 26,
        icon: "🦃"
    },

    {
        id: "christmas",
        title: "Christmas",
        month: 12,
        day: 25,
        icon: "🎄"
    },

    {
        id: "new-year",
        title: "New Year's Day",
        month: 1,
        day: 1,
        icon: "✨"
    },

    {
        id: "valentines",
        title: "Valentine's Day",
        month: 2,
        day: 14,
        icon: "❤️"
    },

    {
        id: "easter",
        title: "Easter",
        month: 3,
        day: 28,
        icon: "🐣"
    },

    {
        id: "july-fourth",
        title: "4th of July",
        month: 7,
        day: 4,
        icon: "🇺🇸"
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const featuredLabel =
    document.getElementById(
        "featuredLabel"
    );


const featuredTitle =
    document.getElementById(
        "featuredTitle"
    );


const featuredDate =
    document.getElementById(
        "featuredDate"
    );


const featuredMessage =
    document.getElementById(
        "featuredMessage"
    );


const daysElement =
    document.getElementById(
        "days"
    );


const hoursElement =
    document.getElementById(
        "hours"
    );


const minutesElement =
    document.getElementById(
        "minutes"
    );


const secondsElement =
    document.getElementById(
        "seconds"
    );


const countdownGrid =
    document.getElementById(
        "countdownGrid"
    );


/* =========================================================
   STATE
========================================================= */

let selectedEvent = null;

let countdownTimer = null;


/* =========================================================
   GET NEXT DATE
========================================================= */

function getEventDate(event) {

    const now =
        new Date();


    /*
       If the event has a specific year,
       use that year.

       This is useful for Move In Day
       and Birthday in 2026.
    */

    if (event.year) {

        return new Date(
            event.year,
            event.month - 1,
            event.day,
            0,
            0,
            0
        );

    }


    /*
       Recurring yearly event.
    */

    let year =
        now.getFullYear();


    let date =
        new Date(
            year,
            event.month - 1,
            event.day,
            0,
            0,
            0
        );


    /*
       If this year's date already passed,
       use next year.
    */

    if (date < now) {

        date =
            new Date(
                year + 1,
                event.month - 1,
                event.day,
                0,
                0,
                0
            );

    }


    return date;

}


/* =========================================================
   GET TIME REMAINING
========================================================= */

function getTimeRemaining(date) {

    const now =
        new Date();


    const difference =
        date.getTime() -
        now.getTime();


    if (difference <= 0) {

        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

    }


    const seconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            seconds / 86400
        );


    const hours =
        Math.floor(
            (seconds % 86400) /
            3600
        );


    const minutes =
        Math.floor(
            (seconds % 3600) /
            60
        );


    const remainingSeconds =
        seconds % 60;


    return {

        total: difference,

        days,

        hours,

        minutes,

        seconds:
            remainingSeconds

    };

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(date) {

    return date.toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );

}


/* =========================================================
   PAD NUMBER
========================================================= */

function pad(number) {

    return String(
        number
    ).padStart(
        2,
        "0"
    );

}


/* =========================================================
   FIND NEXT EVENT
========================================================= */

function getNextEvent() {

    const now =
        new Date();


    const upcomingEvents =
        EVENTS
            .map(event => {

                return {

                    event,

                    date:
                        getEventDate(
                            event
                        )

                };

            })
            .filter(item => {

                return (
                    item.date > now
                );

            })
            .sort(
                (
                    a,
                    b
                ) => {

                    return (
                        a.date -
                        b.date
                    );

                }
            );


    return (
        upcomingEvents[0]
        || null
    );

}


/* =========================================================
   BUILD CARDS
========================================================= */

function buildCountdownCards() {

    countdownGrid.innerHTML = "";


    EVENTS.forEach(event => {

        const date =
            getEventDate(
                event
            );


        const card =
            document.createElement(
                "button"
            );


        card.type =
            "button";


        card.className =
            "countdown-card";


        card.dataset.eventId =
            event.id;


        card.innerHTML = `

            <div class="card-heart">
                ${event.icon}
            </div>

            <div class="card-label">
                Something to look forward to
            </div>

            <div class="card-title">
                ${event.title}
            </div>

            <div class="card-date">
                ${formatDate(date)}
            </div>

            <div class="card-countdown">

                <span
                    class="card-days"
                    data-days
                >
                    0
                </span>

                <span class="card-days-label">
                    days away
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                selectEvent(
                    event.id
                );

            }
        );


        countdownGrid.appendChild(
            card
        );

    });

}


/* =========================================================
   SELECT EVENT
========================================================= */

function selectEvent(
    eventId
) {

    const event =
        EVENTS.find(
            item =>
                item.id ===
                eventId
        );


    if (!event) {
        return;
    }


    selectedEvent =
        event;


    updateActiveCard();


    updateFeaturedCountdown();

}


/* =========================================================
   UPDATE ACTIVE CARD
========================================================= */

function updateActiveCard() {

    document
        .querySelectorAll(
            ".countdown-card"
        )
        .forEach(card => {

            card.classList.toggle(
                "active",
                card.dataset.eventId ===
                selectedEvent.id
            );

        });

}


/* =========================================================
   UPDATE FEATURED COUNTDOWN
========================================================= */

function updateFeaturedCountdown() {

    if (!selectedEvent) {
        return;
    }


    const date =
        getEventDate(
            selectedEvent
        );


    const remaining =
        getTimeRemaining(
            date
        );


    featuredTitle.textContent =
        `${selectedEvent.icon} ${selectedEvent.title}`;


    featuredDate.textContent =
        formatDate(date);


    daysElement.textContent =
        pad(
            remaining.days
        );


    hoursElement.textContent =
        pad(
            remaining.hours
        );


    minutesElement.textContent =
        pad(
            remaining.minutes
        );


    secondsElement.textContent =
        pad(
            remaining.seconds
        );


    /*
       Change the little message
       depending on how close the event is.
    */

    if (
        remaining.days === 0 &&
        remaining.total > 0
    ) {

        featuredMessage.textContent =
            "♡ It's happening today! ♡";

    }

    else if (
        remaining.days <= 7
    ) {

        featuredMessage.textContent =
            "♡ It's almost here! ♡";

    }

    else if (
        remaining.days <= 30
    ) {

        featuredMessage.textContent =
            "♡ Just a little while longer ♡";

    }

    else {

        featuredMessage.textContent =
            "♡ Counting down the days ♡";

    }

}


/* =========================================================
   UPDATE ALL CARD COUNTDOWNS
========================================================= */

function updateCardCountdowns() {

    document
        .querySelectorAll(
            ".countdown-card"
        )
        .forEach(card => {

            const event =
                EVENTS.find(
                    item =>
                        item.id ===
                        card.dataset.eventId
                );


            if (!event) {
                return;
            }


            const date =
                getEventDate(
                    event
                );


            const remaining =
                getTimeRemaining(
                    date
                );


            const daysElement =
                card.querySelector(
                    "[data-days]"
                );


            daysElement.textContent =
                remaining.days;

        });

}


/* =========================================================
   REFRESH ALL COUNTDOWNS
========================================================= */

function refreshCountdowns() {

    /*
       Update the selected main countdown.
    */

    updateFeaturedCountdown();


    /*
       Update all smaller cards.
    */

    updateCardCountdowns();


    /*
       If the selected event has reached zero,
       automatically move to the next event.
    */

    if (selectedEvent) {

        const date =
            getEventDate(
                selectedEvent
            );


        const remaining =
            getTimeRemaining(
                date
            );


        if (
            remaining.total <= 0
        ) {

            const next =
                getNextEvent();


            if (next) {

                selectedEvent =
                    next.event;

                updateActiveCard();

            }

        }

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeCountdown() {

    /*
       Build all the smaller cards.
    */

    buildCountdownCards();


    /*
       Automatically select the closest
       upcoming event.
    */

    const nextEvent =
        getNextEvent();


    if (nextEvent) {

        selectedEvent =
            nextEvent.event;

    }

    else {

        selectedEvent =
            EVENTS[0];

    }


    /*
       Update label.
    */

    featuredLabel.textContent =
        "Next Up";


    /*
       Highlight selected card.
    */

    updateActiveCard();


    /*
       First update.
    */

    refreshCountdowns();


    /*
       Update every second.
    */

    countdownTimer =
        setInterval(
            refreshCountdowns,
            1000
        );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeCountdown
);