$(function() {
    //xu ly viec click thay doi mau 
    $('.tdkhoi').click(function(event) {
        $(this).toggleClass('xanh');

        // khi click vao , cho noidung hien ra
        $(this).next().slideToggle(900, "easeInOutExpo");

        // su dung ham animate de chuyen noidung len 
        //     $('body').animate({ scrollTop: $(this).offset().top })
    });

    // code cho phan phong to anh 
    $('.vaicaianh a').fancybox();


    // xư lý co dan nội dung accordion
    $('.ndkhoi ').slideUp();



});