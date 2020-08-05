document.addEventListener('DOMContentLoaded', function() {
    var trangthai = "duoi50",
        menu_img = document.querySelector('.menu_img'),
        menu_header = document.querySelector('.menu_header'),
        menu = document.querySelector('.menu'),
        menu_toggle = document.querySelector('.menu-toggle'),
        close = document.querySelector('.menusmall-img'),
        den = document.querySelector('.den'),
        box_show = document.querySelectorAll('.box-show'),
        ul = document.querySelectorAll('.menu_header li ul'),
        menu_icon_up = document.querySelectorAll('i.fa.fa-angle-down.menu-icon-show'),
        menu_icon_down = document.querySelectorAll('i.fa.fa-angle-up.menu-icon-show'),
        h5_menu = document.querySelectorAll('.title-menu'),
        button_next = document.querySelector(' b.right'),
        button_prev = document.querySelector(' b.left'),
        slides = document.querySelectorAll('.slides ul li'),
        nuttrai = document.querySelector('button.slick-next'),
        nutphai = document.querySelector('button.slick-prev'),
        noidungslide = document.querySelector('.content-slide'),
        current_number = 0,
        status = "standing_still";
    // slide tittle
    console.log(nuttrai);

    nuttrai.addEventListener('click', function() {
        noidungslide.classList.toggle('chuyenslides');


    })
    nutphai.addEventListener('click', function() {
        noidungslide.classList.toggle('chuyenslides');


    })
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 20) {
            if (trangthai == 'duoi50') {
                menu_img.classList.add('hint_img');
                menu_header.classList.add('menu-left');
                menu.classList.add('menu_fixed');
                trangthai = 'tren50';
            }
        } else if (window.pageYOffset <= 50) {
            if (trangthai == 'tren50') {
                trangthai = 'duoi50';
                menu_img.classList.remove('hint_img');
                menu_header.classList.remove('menu-left');
                menu.classList.remove('menu_fixed');
            }
        }
    })
    menu_toggle.onclick = function() {
        menu_header.classList.add('show_header');
        den.classList.add('show_den');

    }
    close.onclick = function() {
        menu_header.classList.remove('show_header');
        den.classList.remove('show_den');

    }
    den.onclick = function() {
        den.classList.remove('show_den');
        menu_header.classList.remove('show_header');

    }
    for (let f = 0; f < menu_icon_down.length; f++) {
        menu_icon_down[f].addEventListener('click', function() {
            this.classList.toggle('show_up');
            ul[f].classList.toggle('content-show');
            menu_icon_up[f].classList.toggle('hidden_down');
        })
    }
    // slide banner
    button_next.addEventListener('click', function() {
        if (status == "motion") {
            return false;
        }
        status = "motion";
        var status_two_slide = 0;
        var element_current = slides[current_number];
        if (current_number < (slides.length - 1)) {
            current_number++;
        } else {
            current_number = 0;
        }
        var element_next = slides[current_number];
        element_current.classList.add("hidden");
        element_next.classList.add("show");
        var xulihientaiketthuc = function() {
            this.classList.remove("active");
            this.classList.remove("hidden");
            status_two_slide++;
            if (status_two_slide == 2) {
                status = "standing_still";
            }
        }

        var xulitieptheoketthuc = function() {
            this.classList.remove("show");
            this.classList.add("active");
            status_two_slide++;
            if (status_two_slide == 2) {
                status = "standing_still";
            }
        }
        element_current.addEventListener("webkitAnimationEnd", xulihientaiketthuc);
        element_next.addEventListener("webkitAnimationEnd", xulitieptheoketthuc);

    });

    // end- right
    button_prev.addEventListener('click', function() {
        if (status == "motion") {
            return false;
        }
        status = "motion";
        var element_current = slides[current_number];
        // dựa vào slide vì có 2 slide khi ấn next
        if (current_number > 0) {
            current_number--;
        } else {
            current_number = (slides.length - 1);
        }
        var element_next = slides[current_number];
        element_current.classList.add("hidden_prev");
        element_next.classList.add("show_prev");
        var status_two_slide = 0;;
        var xulihientaiketthuc = function() {
            this.classList.remove("active");
            this.classList.remove("hidden_prev");
            status_two_slide++;
            if (status_two_slide++) {
                status = "standing_still";
            }
        }

        var xulitieptheoketthuc = function() {
            this.classList.remove("show_prev");
            this.classList.add("active");
            status_two_slide++;
            if (status_two_slide == 2) {
                status = "standing_still";
            }
        }
        element_current.addEventListener("webkitAnimationEnd", xulihientaiketthuc);
        element_next.addEventListener("webkitAnimationEnd", xulitieptheoketthuc);


    });
});