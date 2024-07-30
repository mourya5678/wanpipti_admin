$(document).ready(function () {
    $('.ct_toggle_bar').click(function () {
        $('main').toggleClass('ct_collapsed_sidebar')
    });
    $('.ct_close_menu').click(function () {
        $('main').removeClass('ct_collapsed_sidebar')
    });

    // $('.ct_quiz_question_slider')?.owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })


    $('.ct_owl_next').click(function () {
        $('.ct_rapid_slider_inner .ct_slide_item ').addClass('ct_remove_slide');
        $('.ct_rapid_dot').addClass('ct_add_slide');
        $('#slide_1').addClass('ct_slide_top_1')
    })
    $('.ct_owl_prev').click(function () {
        // $('.ct_rapid_slider_inner .ct_slide_item ').addClass('ct_add_slide');
        // $('.ct_rapid_slider_inner .ct_slide_item ').removeClass('ct_remove_slide');

        $('.ct_rapid_dot').removeClass('ct_add_slide');
        $('.ct_rapid_slider_inner .ct_slide_item ').removeClass('ct_remove_slide');

        $('#slide_1').removeClass('ct_slide_top_1')

    })


})



