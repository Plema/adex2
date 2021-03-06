
$(document).ready(function(){
    $('.slider_1').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {


                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

        ]

    });
    $(".slider_1 .slick-slide .box").click(function() {
        $(this).addClass('active');
        $('.box').not(this).removeClass('active');


    });
    $(".map_filter .tab-button a").click(function(e) {
        $("div [data-id]").removeClass("activ");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("activ");
        e.preventDefault();


    });
    $(".map_filter .tab-button").click(function(e) {
        e.preventDefault();
        $(".tab-button").removeClass('activ');
        $(this).addClass('activ');
    });

    $(".map_filter .filter-open_map").on("click",function(){
        $(this).next().toggleClass("activ")
    });
    $(".map_filter #pp_offers_list_1 li").on("click",function(){
        $("#pp_offers_list_1 li").removeClass("activ"),
            $(this).addClass("activ"),
            $(this).parent("#pp_offers_list_1").removeClass("activ"),
            $(".filter-open_map").find("span b").text($(this).find("a").text())
    });
});/**
 * Created by Nafta on 18.12.2020.
 */
