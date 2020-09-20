// FOR THE PAGE HEADING
var elHeading = document.getElementsByTagName('title')[0];
if (elHeading.innerHTML === 'History of LYBIBAF') {
    var home = document.getElementById('about');
    home.style.color = '#4caf50';
}

//NOTIFY NAV BAR
var elTitle = document.getElementsByTagName('title')[0].innerHTML;
if (elTitle === "History of LYBIBAF") {
    var elNav1 = document.getElementById('nav-1');
    elNav1.style.color = "rgb(60, 60, 60)";
    elNav1.style.textDecoration = "underline";
}

// RESPONSIVE

var elClose, elNav, elOpen;
elNav = document.getElementById('mySidenav-1');
elClose = document.getElementById('close');
elOpen = document.getElementById('open');

// the open nav bar
function myOpenNav() {
    if (window.innerWidth <= 1000) {
        elNav.style.width = '300px';
        elClose.style.display = 'inline';
        elOpen.style.display = 'none';

    }
}
elOpen.addEventListener('click', myOpenNav, false);
// the close nav bar 
function myClosenav() {
    if (window.innerWidth <= 1000) {
        elOpen.style.display = "inline";
        elClose.style.display = 'none';
        elNav.style.width = '0px';
    }
}
elClose.addEventListener('click', myClosenav, false);

// the validate show button
function myValidShow() {
    if (window.innerWidth > 1000) {
        elClose.style.display = 'none';
        elOpen.style.display = 'none';
    } else {
        elOpen.style.display = 'inline';
    }
}
window.addEventListener('resize', myValidShow, false);