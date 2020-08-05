document.addEventListener('DOMContentLoaded', function() {
    var button_search = document.querySelector('.mobile-nav .form-search');
    console.log(button_search);

    var tim_kiem = document.querySelector('.dropdown-menu.box-search');
    button_search.addEventListener('click', function() {
        tim_kiem.classList.toggle('open');
    })
});