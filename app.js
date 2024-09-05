
var typed = new Typed('#element', {
    strings: ['Coder!', 'Mathematician!', 'Fontend Developer!', 'Python Developer!', 'C/C++ Developer!'],
    typeSpeed: 50,
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}





 


// https://script.google.com/macros/s/AKfycbyVv9xqNvhxGMntTkMEdypMLfytpTjTZPN_bJiDI8pdNsc9eDqEoHfdXX7zIAZmAIX36w/exec
//for google sheet file

