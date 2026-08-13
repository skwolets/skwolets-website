const buttons =
document.querySelectorAll("button");


buttons.forEach(button => {


button.addEventListener(
"click",
()=>{


button.style.transform =
"scale(0.95)";


setTimeout(()=>{

button.style.transform =
"";

},150);


});


});



window.addEventListener(
"scroll",
()=>{


let header =
document.querySelector("header");


if(window.scrollY>50){

header.style.background =
"rgba(0,0,0,0.8)";

}

else{

header.style.background =
"rgba(0,0,0,0.4)";

}


});

const languageMenu = document.querySelector(".language-menu");
const languageButton = document.querySelector(".language-button");

if (languageMenu && languageButton) {

    languageButton.addEventListener("click", () => {

        languageMenu.classList.toggle("open");

    });

    document.addEventListener("click", (event) => {

        if (!languageMenu.contains(event.target)) {

            languageMenu.classList.remove("open");

        }

    });

}

<script>
const languageSwitcher = document.querySelector(".language-switcher");
const languageButton = document.querySelector(".language-button");

languageButton.addEventListener("click", function (event) {

    event.stopPropagation();

    languageSwitcher.classList.toggle("open");

});


document.addEventListener("click", function () {

    languageSwitcher.classList.remove("open");

});
</script>
