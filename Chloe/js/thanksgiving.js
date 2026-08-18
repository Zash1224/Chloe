/* =========================================================
   THANKSGIVING PAGE
========================================================= */


/* =========================================================
   SETUP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeThanksgivingPage();

    }
);


/* =========================================================
   INITIALIZE PAGE
========================================================= */

function initializeThanksgivingPage() {

    createLeafMovement();

    setupRevealAnimations();

    setupHomeButton();

}


/* =========================================================
   FLOATING LEAF MOVEMENT
========================================================= */

function createLeafMovement() {

    const leaves =
        document.querySelectorAll(".leaf");


    leaves.forEach(
        (leaf, index) => {

            const randomDelay =
                Math.random() * 3;

            const randomDuration =
                7 + Math.random() * 5;


            leaf.style.animationDelay =
                `${randomDelay}s`;


            leaf.style.animationDuration =
                `${randomDuration}s`;

        }
    );

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function setupRevealAnimations() {

    const sections =
        document.querySelectorAll(
            "section"
        );


    /*
       If the browser does not support
       IntersectionObserver, simply leave
       everything visible.
    */

    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    sections.forEach(
        section => {

            section.style.opacity = "0";

            section.style.transform =
                "translateY(25px)";


            section.style.transition =
                "opacity .8s ease, transform .8s ease";

        }
    );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.style.opacity =
                            "1";


                        entry.target.style.transform =
                            "translateY(0)";


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    sections.forEach(
        section => {

            observer.observe(section);

        }
    );

}


/* =========================================================
   HOME BUTTON
========================================================= */

function setupHomeButton() {

    const homeButton =
        document.querySelector(
            ".home-button"
        );


    if (!homeButton) {
        return;
    }


    homeButton.addEventListener(
        "click",
        event => {

            /*
               The normal link still works if
               JavaScript is unavailable.

               This simply gives the navigation
               a tiny transition when JavaScript
               is enabled.
            */

            event.preventDefault();


            document.body.style.opacity =
                "0";


            document.body.style.transition =
                "opacity .35s ease";


            setTimeout(
                () => {

                    window.location.href =
                        homeButton.href;

                },
                350
            );

        }
    );

}


/* =========================================================
   OPTIONAL DATE MESSAGE
========================================================= */

function checkThanksgivingDate() {

    const today =
        new Date();


    const thanksgiving =
        new Date(
            2026,
            10,
            26
        );


    /*
       This does NOT lock the page.

       It simply allows the page to know
       whether Thanksgiving has arrived.
    */

    if (
        today >= thanksgiving
    ) {

        document.body.classList.add(
            "thanksgiving-day"
        );

    }

}


checkThanksgivingDate();