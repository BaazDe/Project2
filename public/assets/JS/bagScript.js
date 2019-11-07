//DISPLAY INVENTORY RESPONSIVE
const bagIcon = document.getElementById("bagIcon");
const main = document.getElementById("main");
const history = document.getElementById("history");
const responses = document.getElementById("responses");
const enigma = document.getElementById("enigma");
const displayBag = document.getElementById("bagScript");

let displayed = false;


if (history !== null) {
    bagIcon.addEventListener("click", bagScript);
    function bagScript()
    {
        if (displayed === false) {
            displayBag.classList.add("script");
            history.classList.add("script");
            responses.classList.add("script");
            main.classList.add("script");
            displayed = true;
        } else {
            displayBag.classList.remove("script");
            main.classList.remove("script");
            history.classList.remove("script");
            responses.classList.remove("script");
            displayed = false;
        }
    }
}

if (enigma !==null) {
    bagIcon.addEventListener("click", bagScriptEnigma);
    function bagScriptEnigma()
    {
        if (displayed === false) {
            displayBag.classList.add("script");
            enigma.classList.add("script");
            main.classList.add("script");
            displayed = true;
        } else {
            displayBag.classList.remove("script");
            enigma.classList.remove("script");
            main.classList.remove("script");
            displayed = false;
        }
    }
}