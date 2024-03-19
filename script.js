/*menu btn*/

function adjustMenu() {
    setTimeout(function () {
        location.reload();
    }, 100);
}

window.addEventListener('resize', adjustMenu);

function menuOpenHandler() {
    const container = document.querySelector('.menu__container');
    container.style.visibility = 'visible';

    // when menu opened
    if (container.classList.contains('menu_open') === false) {
        container.classList.add('menu_open');

        document.querySelector('.main').style.opacity = '.5';
        document.querySelector('.login').style.opacity = '.5';
        document.querySelector('.logo').style.opacity = '.5';
    }
}

function menuCloseHandler(evt) {
    const menuButton = document.querySelector('.header__burger');
    const menu = document.querySelector('.menu__container');
    const elmWidth = document.querySelector('.header').offsetWidth;

    if (elmWidth < 675) {

        if (!menu.contains(evt.target) && !menuButton.contains(evt.target)) {
            menu.style.visibility = 'hidden';
            menu.classList.remove('menu_open');
            document.querySelector('.main').style.opacity = '1';
            document.querySelector('.login').style.opacity = '1';
            document.querySelector('.logo').style.opacity = '1';
        }
    } else {
        // do nothing
    }

}

document.querySelector('.header__burger').addEventListener('click', menuOpenHandler);
document.addEventListener('click', menuCloseHandler);

/*read more button*/

function openText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "pokaż";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "schowaj";
        moreText.style.display = "inline";
    }
}

/*animation on scroll*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// cookies close icon

function iconCloseHandler() {
    console.log('closed')
    document.querySelector('.cookies__note').style.display = 'none';
}

document.querySelector('.icon__close').addEventListener('click', iconCloseHandler);
