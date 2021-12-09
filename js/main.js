$(document).ready(function () {

    // 어빌리티 부분 수정해볼 것
    // $(".book_HTML5").css({ "opacity": "0" });
    // $(".book_css3").css({ "opacity": "0" });
    // $(".book_jQuery").css({ "opacity": "0" });
    // $(".book_js").css({ "opacity": "0" });
    // $(".book_xd").css({ "opacity": "0" });
    // $(".side_html5").click(function () {
    //     $(".book_HTML5").css({ "opacity": "1" }, 5000);
    //     // $(".book_HTML5 .b_h_2").css({ "display": "block" }, 2000);
    // });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1700) {
            $("#book > img").each(function (j) {
                setTimeout(function () {
                    $("#book > img").eq(j).addClass(".book_HTML5");
                }, j * 500);
            });
        }
    });


    // function slideTarget(n) {

    //     // if (current == n) return     
    //     var posx = n * (-780) + "px";
    //     current = n;
    //     //console.log(current);
    //     $(".viewer ul").animate({ left: posx });
    //     $("#c_review .viewer ul li").eq(current).find("div").css({ opacity: "0", left: "600px" }).animate({ opacity: "1", left: "500px" }, 1000);

    // }

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
        if ($(document).scrollTop() > 1600) {
            $(".book_HTML5 img").each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).height();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "opacity": "1", "margin": "0px 0px 0px 0px" }, 1000);                   
                }

            });
        }
        
        // book_css3
        if ($(document).scrollTop() > 1720) {
            $(".book_css3 img").each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).height();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "opacity": "1", "margin": "0px 0px 0px 0px" }, 1000);                   
                }

            });
        }

        // book_jQuery
        if ($(document).scrollTop() > 1840) {
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
        if ($(document).scrollTop() > 1960) {
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
        if ($(document).scrollTop() > 2080) {
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
            $("#remote").css('display', 'block');
        } else {
            $("#remote").css('display', 'none');
        }


        /*포트폴리오1,3 왼쪽에서 슬라이드+패이드인*/

        $("#portfolio1,#portfolio3").each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ "opacity": "1", "margin-left": "0px" }, 1000);
            }

        });


        /*포트폴리오2,4	오른쪽에서 슬라이드+패이드인*/

        $("#portfolio2,#portfolio4").each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ "opacity": "1", "margin-left": "0px" }, 1000);
            }

        });


        /*오른쪽 메뉴 스크롤*/
        //어바웃 스크롤

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

        //포트폴리오1 스크롤

        if ($(this).scrollTop() > 2500) {
            $("#list4").css('background-color', '#e5e5e5');
        } else {
            $("#list4").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 3300) {
            $("#list4").css('background-color', 'transparent');
        }

        //포트폴리오2 스크롤

        if ($(this).scrollTop() > 3400) {
            $("#list5").css('background-color', '#e5e5e5');
        } else {
            $("#list5").css('background-color', 'transparent');
        }

        if ($(this).scrollTop() > 4300) {
            $("#list5").css('background-color', 'transparent');
        }

        //포트폴리오3 스크롤

        if ($(this).scrollTop() > 4450) {
            $("#list6").css('background-color', '#e5e5e5');
        } else {
            $("#list6").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 5300) {
            $("#list6").css('background-color', 'transparent');
        }

        //포트폴리오4 스크롤

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
            $("#list9").css('background-color', '#e5e5e5');
        } else {
            $("#list9").css('background-color', 'transparent');
        }


        if ($(this).scrollTop() > 7100) {
            $("#list9").css('background-color', 'transparent');
        }

    });

});














