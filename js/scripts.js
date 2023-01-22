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
    var body=document.body;
    setInterval(createStar,100);
    function createStar(){
      var right=Math.random()*500;
      var top=Math.random()*screen.height;
      var star=document.createElement("div");
   star.classList.add("star")
    body.appendChild(star);
    setInterval(runStar,10);
      star.style.top=top+"px";
    function runStar(){
      if(right>=screen.width){
        star.remove();
      }
      right+=3;
      star.style.right=right+"px";
    }
    } 

});

//Qrcode 

function GenerateQrCode() {

    var userData = document.getElementById("qrData").value; //Reading the textbox value
  
    var qrCode = new QRCode(document.getElementById("qrcode")); //Initializing the library
  
    qrCode.makeCode(userData); //Code to generate qr code
 }

 function DownloadQrCode() {
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

 function toggleQRCode() {
    var img = document.getElementById("qr_code");
    if (img.style.display === "block") {
      img.style.display = "none";
    }
  }
