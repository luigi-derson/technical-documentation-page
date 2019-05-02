const cross = document.getElementById('cross');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const navTitle = document.getElementById('nav-title');
const menuLinks = document.getElementById('menu-links');
const pythonLogo = document.getElementById('python-logo');
const main = document.getElementById('main-doc');



menu.onclick = function () {
    if (cross.style.display == '') {
        navbar.style.height = '100%';
        navbar.style.position = 'unset';
        navbar.style.overflow = 'auto';
        navbar.style.padding = '2em';
        menu.style.display = 'none';
        cross.style.display = 'unset';
        menuLinks.style.display = 'unset';
        main.style.display = 'none';
    } 
}

cross.onclick = function() {
    if (cross.style.display == 'unset') {
        navbar.style.height = '110px';
        menu.style.display = '';
        cross.style.display = '';
        menuLinks.style.display = 'none';
        main.style.display = 'unset';
        Navbar.style.overflow = 'hidden';
    }
}

menuLinks.onclick = function() {
    if (navbar.style.height == '100%') {
        navbar.style.height = '110px';
        navbar.style.position = 'fixed';
        menu.style.display = '';
        cross.style.display = '';
        menuLinks.style.display = 'none';
        navbar.style.overflow = 'hidden';
        main.style.display = 'unset';
        scroll();
    }
}


pythonLogo.onclick = function animateToTop() {
    /* e.preventDefault(); */
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - 20 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 8);
}

const ajust = () => {

}

const sections = document.getElementsByClassName('main-section');

function scroll() {
    const scrollToSection = window.setInterval(function() {
        const pos = window.pageYOffset;
        for (let i = 0; i < sections.length; i++) {
            const sectionPos = sections[i].getBoundingClientRect().top - 200;
            
            //No peobar esto, se congela
            // console.log(sectionPos)

            /* if ( pos === sectionPos ) {
                window.scrollTo( 0, sectionPos );
            } else {
                window.clearInterval( scrollToSection );
            } */
        }
    }, 8);

}




