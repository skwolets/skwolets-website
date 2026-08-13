const buttons =
document.querySelectorAll("button");


buttons.forEach(button => {


    button.addEventListener(
        "click",
        () => {


            button.style.transform =
                "scale(0.95)";


            setTimeout(() => {

                button.style.transform =
                    "";

            }, 150);


        }
    );


});


window.addEventListener(
    "scroll",
    () => {


        let header =
            document.querySelector("header");


        if (window.scrollY > 50) {

            header.style.background =
                "rgba(0,0,0,0.8)";

        }

        else {

            header.style.background =
                "rgba(0,0,0,0.4)";

        }


    }
);


const languageSwitcher =
    document.querySelector(".language-switcher");

const languageButton =
    document.querySelector(".language-button");


if (languageSwitcher && languageButton) {

    languageButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            languageSwitcher.classList.toggle("open");

        }
    );


    document.addEventListener(
        "click",
        (event) => {

            if (!languageSwitcher.contains(event.target)) {

                languageSwitcher.classList.remove("open");

            }

        }
    );

}
