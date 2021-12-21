$(document).ready(function () {


    $(window).scroll(function () {
        if ($(document).scrollTop() > 1700) {
            $("#book > img").each(function (j) {
                setTimeout(function () {
                    $("#book > img").eq(j).addClass(".book_HTML5");
                }, j * 500);
            });
        }
    });


    /*스크롤 내릴때 어바웃 스킬 막대바 애니메이션 */
    $(window).scroll(function () {
        /*if ($(document).scrollTop()>300) { 
                  $(".skill>li").addClass("line");
        }*/

        /*if ($(document).scrollTop() > 1600) {
            $(".skill>li").each(function (j) {
                setTimeout(function () {
                    $(".skill>li").eq(j).addClass("line");
                }, j * 500);
            });
        }*/

        // book_HTML5
        if ($(document).scrollTop() > 1550) {
            $(".book_HTML5 img").each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).height();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "opacity": "1", "margin": "0px 0px 0px 0px" }, 1000);
                }

            });
        }

        // book_css3
        if ($(document).scrollTop() > 1670) {
            $(".book_css3 img").each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).height();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "opacity": "1", "margin": "0px 0px 0px 0px" }, 1000);
                }

            });
        }

        // book_jQuery
        if ($(document).scrollTop() > 1770) {
            $(".book_jQuery img").each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).height();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "opacity": "1", "margin": "0px 0px 0px 0px" }, 1000);
                }

            });
        }
        //--------------------------------------------

        // book_js
        //if ($(document).scrollTop() > 1900) {
        //    $(".book_js> img").eq(0).animate({opacity: '1'}, 1000);
        //    $(".book_js> img").eq(1).animate({opacity: '1'}, 1400);
        //    $(".book_js> img").eq(2).animate({opacity: '1'}, 1800);
        //} else {
        //    $(".book_js> img").css('opacity', '0');
        //}
        //--------------------------------------------
        //if ($(document).scrollTop() > 1900) {
        //    $(".book_js> img").eq(0).css({display: 'block'}, 1000);
        //    $(".book_js> img").eq(1).css({display: 'block'}, 1400);
        //    $(".book_js> img").eq(2).css({display: 'block'}, 1800);
        //} else {
        //    $(".book_js> img").css('display', 'none');
        //}
        //--------------------------------------------
        if ($(document).scrollTop() > 1800) {
            $(".book_js img").each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).height();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "opacity": "1", "margin": "0px 0px 0px 0px" }, 1000);
                }

            });
        }
        //--------------------------------------------


        // book_xd
        if ($(document).scrollTop() > 1850) {
            $(".book_xd img").each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).height();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "opacity": "1", "margin": "0px 0px 0px 0px" }, 1000);
                }

            });
        }


        /*오른쪽 메뉴가 어바웃부터 나타남*/

        if ($(this).scrollTop() > 600) {
            $("#navbar").css('display', 'block');
        } else {
            $("#navbar").css('display', 'none');
        }


        /*리뉴얼1,3 왼쪽에서 슬라이드+패이드인*/

        $("#renewal1,#renewal3").each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ "opacity": "1", "margin-left": "0px" }, 1000);
            }

        });


        /*리뉴얼2,4	오른쪽에서 슬라이드+패이드인*/

        $("#renewal2,#renewal4").each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ "opacity": "1", "margin-left": "0px" }, 1000);
            }

        });


        /*오른쪽 메뉴 스크롤*/
        //인트로듀스 스크롤

        if ($(this).scrollTop() > 500) {
            $("#list2").css('background-color', '#e5e5e5');
        } else {
            $("#list2").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 1500) {
            $("#list2").css('background-color', 'transparent');
        }

        //어빌리티 스크롤

        if ($(this).scrollTop() > 1600) {
            $("#list3").css('background-color', '#e5e5e5');
        } else {
            $("#list3").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 2400) {
            $("#list3").css('background-color', 'transparent');
        }

        //리뉴얼1 스크롤

        if ($(this).scrollTop() > 2500) {
            $("#list4").css('background-color', '#e5e5e5');
        } else {
            $("#list4").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 3300) {
            $("#list4").css('background-color', 'transparent');
        }

        //리뉴얼2 스크롤

        if ($(this).scrollTop() > 3400) {
            $("#list5").css('background-color', '#e5e5e5');
        } else {
            $("#list5").css('background-color', 'transparent');
        }

        if ($(this).scrollTop() > 4300) {
            $("#list5").css('background-color', 'transparent');
        }

        //리뉴얼3 스크롤

        if ($(this).scrollTop() > 4450) {
            $("#list6").css('background-color', '#e5e5e5');
        } else {
            $("#list6").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 5300) {
            $("#list6").css('background-color', 'transparent');
        }

        //리뉴얼4 스크롤

        if ($(this).scrollTop() > 5400) {
            $("#list7").css('background-color', '#e5e5e5');
        } else {
            $("#list7").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 6200) {
            $("#list7").css('background-color', 'transparent');
        }

        //콘택트 스크롤

        if ($(this).scrollTop() > 6300) {
            $("#list8").css('background-color', '#e5e5e5');
        } else {
            $("#list8").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 7100) {
            $("#list8").css('background-color', 'transparent');
        }

    });

});














