/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

//Qrcode 
let qrCodeInstance = null;

function generateQrCode() {
    const userData = document.getElementById("qrData").value;
    const container = document.getElementById("qrcode");

    if (qrCodeInstance) {
        qrCodeInstance.clear();
    } else {
        document.getElementById("qrCodeImage").style.display = "none"; //remove first qrcode
        qrCodeInstance = new QRCode(container, {
            colorDark: "#000000",
            colorLight: "#ffffff",
        });
    }
    qrCodeInstance.makeCode(userData);
}

function downloadQrCode() {
    if (qrCodeInstance) {
        html2canvas(document.getElementById('qrcode'))
        .then((canvas) => {
            let link = document.createElement("a");
            link.download = 'qrcode.png';
            link.href = canvas.toDataURL("assets/img/qrcode/download.png");;
            link.click();
        });
    } else {
        html2canvas(document.getElementById('qrCodeImage').getElementsByTagName('img')[0])
        .then((canvas) => {
            let link = document.createElement("a");
            link.download = 'qrcode.png';
            link.href = canvas.toDataURL("assets/img/qrcode/download.png");;
            link.click();
        });
    }
}

//About page

function overlayAboutPageOn(id) {
    document.getElementById(id).style.display = "block";
  }
  
function overlayAboutPageOff(id) {
    document.getElementById(id).style.display = "none";
}

let filteringActive = false;
let oldYear = null;
function callFilteringYearAboutPage(year) {
    if (oldYear == year && filteringActive) {
        let listLifeEvent = document.getElementsByName("life-event")
        for (let i = 0; i < listLifeEvent.length; i++) {
            var LifeEvent = listLifeEvent[i];
            LifeEvent.style.display = "block";      
        }
        filteringActive = false;
    } else {
        FilteringYearAboutPage(year)
        filteringActive = true;
    }
    oldYear = year;
}

function FilteringYearAboutPage(year) {
    let listLifeEvent = document.getElementsByName("life-event")
    for (let i = 0; i < listLifeEvent.length; i++) { 
        var LifeEvent = listLifeEvent[i];
        if (LifeEvent.getAttribute("data-year").includes(year)) {
            LifeEvent.style.display = "block";
        } else {
            if (LifeEvent.style.display = "block")
            LifeEvent.style.display = "none";
        }
    }
}
