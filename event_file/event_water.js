// check if user is scrolling
window.onscroll = function (e) {
    var header = document.getElementById("header");
    var go_top = document.getElementById("go-top");
    var water = document.getElementById("watering");
    // chk is for check if header is on top of the page
    var chk = document.getElementById("chk");
    var top = chk.offsetTop;

    // add fixed header and show go top cursor
    if (window.pageYOffset >= top) {
        header.classList.add("fixed");
        go_top.classList.add("visible");
        water.classList.add("mar");
    }
    // remove fixed header and hide go top cursor
    else {
        header.classList.remove("fixed");
        go_top.classList.remove("visible");
        water.classList.remove("mar");
    }
}