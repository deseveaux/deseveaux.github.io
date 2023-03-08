/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
importScripts(URL="http://html2canvas.hertzen.com/dist/html2canvas.js”)
importScripts()

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
    var container = document.getElementById("qrcode");
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
  
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
  });
 }