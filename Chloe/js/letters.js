/* =========================================================
   MONTHLY LETTERS
========================================================= */

/*
   Monthly letters begin September 2026
   and continue through December 2027.

   Letters officially become available
   on the 12th of their month.
*/


/* =========================================================
   LETTER DATA
========================================================= */

const LETTERS = [

    {
        month: "September",
        shortMonth: "Sep",
        year: 2026,
        number: 9,
        title: "A Letter For September",
        text: `
September marks the beginning of something really special.

This is the first letter in our little collection, and I hope
every time you come back here you remember how much thought
went into making this little place for you.

[Your September letter goes here.]

I hope this month brings you plenty of reasons to smile.

â™¡
        `
    },


    {
        month: "October",
        shortMonth: "Oct",
        year: 2026,
        number: 10,
        title: "A Letter For October",
        text: `
October is here.

Another month, another little letter waiting just for you.

[Your October letter goes here.]

I hope this month is filled with warm moments, silly memories,
and plenty of reasons to smile.

â™¡
        `
    },


    {
        month: "November",
        shortMonth: "Nov",
        year: 2026,
        number: 11,
        title: "A Letter For November",
        text: `
November has arrived.

I wanted another little reminder sitting here waiting for you.

[Your November letter goes here.]

No matter how busy life gets, I hope you always remember that
you are incredibly important to me.

â™¡
        `
    },


    {
        month: "December",
        shortMonth: "Dec",
        year: 2026,
        number: 12,
        title: "A Letter For December",
        text: `
December.

The final month of our first year of letters.

[Your December letter goes here.]

There is something really special about looking back at
everything that happened this year.

Here's to everything still waiting ahead of us.

â™¡
        `
    },


    {
        month: "January",
        shortMonth: "Jan",
        year: 2027,
        number: 1,
        title: "A Letter For January",
        text: `
Happy January.

A brand new year means a brand new collection of memories.

[Your January letter goes here.]

Whatever this year brings, I hope we make it a good one.

â™¡
        `
    },


    {
        month: "February",
        shortMonth: "Feb",
        year: 2027,
        number: 2,
        title: "A Letter For February",
        text: `
February is here.

A month that seems especially appropriate for leaving
little reminders about how much someone means to you.

[Your February letter goes here.]

Consider this your monthly reminder that you are loved.

â™¡
        `
    },


    {
        month: "March",
        shortMonth: "Mar",
        year: 2027,
        number: 3,
        title: "A Letter For March",
        text: `
March has arrived.

Another little chapter in our story.

[Your March letter goes here.]

I hope this month gives us another handful of memories
that we'll eventually look back on and smile about.

â™¡
        `
    },


    {
        month: "April",
        shortMonth: "Apr",
        year: 2027,
        number: 4,
        title: "A Letter For April",
        text: `
Happy April.

The year is moving faster than it probably should.

[Your April letter goes here.]

Whatever happens this month, remember that there is always
someone cheering you on.

â™¡
        `
    },


    {
        month: "May",
        shortMonth: "May",
        year: 2027,
        number: 5,
        title: "A Letter For May",
        text: `
May is here.

Another month and another reason to leave something special
waiting for you.

[Your May letter goes here.]

I hope you have an amazing month.

â™¡
        `
    },


    {
        month: "June",
        shortMonth: "Jun",
        year: 2027,
        number: 6,
        title: "A Letter For June",
        text: `
Hello June.

We're getting further into the year, but there are still
so many things ahead of us.

[Your June letter goes here.]

I hope this little letter makes you smile whenever you find it.

â™¡
        `
    },


    {
        month: "July",
        shortMonth: "Jul",
        year: 2027,
        number: 7,
        title: "A Letter For July",
        text: `
July has arrived.

Summer is officially here.

[Your July letter goes here.]

I hope this month brings sunshine, laughter, and memories
that are worth keeping forever.

â™¡
        `
    },


    {
        month: "August",
        shortMonth: "Aug",
        year: 2027,
        number: 8,
        title: "A Letter For August",
        text: `
August.

Another month has passed and another letter has found its way
here for you.

[Your August letter goes here.]

Thank you for being such an important part of my life.

â™¡
        `
    },


    {
        month: "September",
        shortMonth: "Sep",
        year: 2027,
        number: 9,
        title: "A Letter For September",
        text: `
September is here again.

It's kind of crazy to think about how much can change
in a single year.

[Your September 2027 letter goes here.]

Here's to everything we've experienced and everything
still waiting for us.

â™¡
        `
    },


    {
        month: "October",
        shortMonth: "Oct",
        year: 2027,
        number: 10,
        title: "A Letter For October",
        text: `
October again.

Another autumn, another little letter.

[Your October 2027 letter goes here.]

I hope this month is full of cozy moments and happy memories.

â™¡
        `
    },


    {
        month: "November",
        shortMonth: "Nov",
        year: 2027,
        number: 11,
        title: "A Letter For November",
        text: `
November has arrived once again.

[Your November 2027 letter goes here.]

I hope you know how much you mean to me, not just this month,
but every month.

â™¡
        `
    },


    {
        month: "December",
        shortMonth: "Dec",
        year: 2027,
        number: 12,
        title: "A Letter For December",
        text: `
December 2027.

The end of our first collection of monthly letters.

[Your December 2027 letter goes here.]

If you're reading this, we've made it through an entire
year and several months of little reminders.

And hopefully there are many, many more to come.

â™¡
        `
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const letterBoxes =
    document.getElementById("letterBoxes");

const featuredMonth =
    document.getElementById("featuredMonth");

const featuredTitle =
    document.getElementById("featuredTitle");

const featuredDate =
    document.getElementById("featuredDate");

const featuredPreview =
    document.getElementById("featuredPreview");

const openLetterButton =
    document.getElementById("openLetterButton");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const selectionCounter =
    document.getElementById("selectionCounter");

const letterModal =
    document.getElementById("letterModal");

const modalBackdrop =
    document.getElementById("modalBackdrop");

const closeLetter =
    document.getElementById("closeLetter");

const modalMonth =
    document.getElementById("modalMonth");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");


/* =========================================================
   STATE
========================================================= */

let selectedLetter = 0;


/* =========================================================
   GET TODAY
========================================================= */

function getToday() {

    const now = new Date();

    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

}


/* =========================================================
   LETTER AVAILABILITY
========================================================= */

function isLetterAvailable(letter) {

    const unlockDate =
        new Date(
            letter.year,
            letter.number - 1,
            12
        );

    return getToday() >= unlockDate;

}


/* =========================================================
   FIND NEXT AVAILABLE LETTER
========================================================= */

function findLatestAvailableLetter() {

    let latestAvailable = 0;

    LETTERS.forEach(
        (letter, index) => {

            if (
                isLetterAvailable(letter)
            ) {

                latestAvailable =
                    index;

            }

        }
    );

    return latestAvailable;

}


/* =========================================================
   CREATE LETTER BOXES
========================================================= */

function createLetterBoxes() {

    letterBoxes.innerHTML = "";

    LETTERS.forEach(
        (letter, index) => {

            const box =
                document.createElement("button");

            box.className =
                "letter-box";

            box.dataset.index =
                index;


            const available =
                isLetterAvailable(letter);


            if (!available) {

                box.classList.add(
                    "locked"
                );

            }


            box.innerHTML = `

                <span class="letter-box-heart">
                    ${available ? "â™¡" : "ðŸ”’"}
                </span>

                <span class="letter-box-month">
                    ${letter.shortMonth}
                </span>

                <span class="letter-box-year">
                    ${letter.year}
                </span>

                ${
                    !available
                    ? `<span class="letter-lock">ðŸ”’</span>`
                    : ""
                }

            `;


            box.addEventListener(
                "click",
                () => {

                    selectLetter(index);

                }
            );


            letterBoxes.appendChild(box);

        }
    );

}


/* =========================================================
   SELECT LETTER
========================================================= */

function selectLetter(index) {

    if (
        index < 0 ||
        index >= LETTERS.length
    ) {

        return;

    }


    selectedLetter =
        index;


    updateFeaturedLetter();


    updateActiveBox();


    updateCounter();

}


/* =========================================================
   UPDATE FEATURED LETTER
========================================================= */

function updateFeaturedLetter() {

    const letter =
        LETTERS[selectedLetter];


    const available =
        isLetterAvailable(letter);


    /*
       Small animation reset.
    */

    const featured =
        document.getElementById(
            "featuredLetter"
        );


    featured.style.animation =
        "none";


    void featured.offsetWidth;


    featured.style.animation =
        "letterAppear .7s cubic-bezier(.16,1,.3,1)";


    featuredMonth.textContent =
        `${letter.month} ${letter.year}`;


    featuredTitle.textContent =
        letter.title;


    featuredDate.textContent =
        `${letter.month} 12, ${letter.year}`;


    if (available) {

        featuredPreview.textContent =
            "Your monthly letter is waiting for you.";

        openLetterButton.textContent =
            "Open Letter";

        openLetterButton.disabled =
            false;

        openLetterButton.style.opacity =
            "1";

        openLetterButton.style.cursor =
            "pointer";

    }

    else {

        featuredPreview.textContent =
            `This letter will open on ${letter.month} 12, ${letter.year}.`;

        openLetterButton.textContent =
            "Locked Until Then";

        openLetterButton.disabled =
            true;

        openLetterButton.style.opacity =
            ".55";

        openLetterButton.style.cursor =
            "default";

    }

}


/* =========================================================
   UPDATE ACTIVE BOX
========================================================= */

function updateActiveBox() {

    const boxes =
        document.querySelectorAll(
            ".letter-box"
        );


    boxes.forEach(
        (box, index) => {

            box.classList.toggle(
                "active",
                index === selectedLetter
            );

        }
    );


    /*
       Bring selected box into view.

       This is NOT a scroll wheel.
       It simply makes the selected month visible
       when necessary.
    */

    const activeBox =
        boxes[selectedLetter];


    if (activeBox) {

        activeBox.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

    }

}


/* =========================================================
   UPDATE COUNTER
========================================================= */

function updateCounter() {

    selectionCounter.textContent =
        `${selectedLetter + 1} / ${LETTERS.length}`;

}


/* =========================================================
   OPEN LETTER
========================================================= */

function openSelectedLetter() {

    const letter =
        LETTERS[selectedLetter];


    if (
        !isLetterAvailable(letter)
    ) {

        return;

    }


    modalMonth.textContent =
        `${letter.month} ${letter.year}`;


    modalTitle.textContent =
        letter.title;


    modalText.textContent =
        letter.text.trim();


    letterModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE LETTER
========================================================= */

function closeLetterModal() {

    letterModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "auto";

}


/* =========================================================
   NEXT LETTER
========================================================= */

function nextLetter() {

    let next =
        selectedLetter + 1;


    if (
        next >= LETTERS.length
    ) {

        next = 0;

    }


    selectLetter(next);

}


/* =========================================================
   PREVIOUS LETTER
========================================================= */

function previousLetter() {

    let previous =
        selectedLetter - 1;


    if (
        previous < 0
    ) {

        previous =
            LETTERS.length - 1;

    }


    selectLetter(previous);

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

openLetterButton.addEventListener(
    "click",
    openSelectedLetter
);


closeLetter.addEventListener(
    "click",
    closeLetterModal
);


modalBackdrop.addEventListener(
    "click",
    closeLetterModal
);


nextButton.addEventListener(
    "click",
    nextLetter
);


previousButton.addEventListener(
    "click",
    previousLetter
);


/* ==============================ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ