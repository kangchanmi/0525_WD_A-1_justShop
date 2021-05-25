/* eslint-disable */

$(function() {

    /* GNB 메뉴 */
    $("#mainMenu>li").mouseover(function() {
        $("ul.subMenu").stop().fadeIn(300);
    });
    $("#mainMenu>li").mouseout(function() {
        $("ul.subMenu").stop().fadeOut(300);
    });
    /* GNB 메뉴 */


    /* 슬라이드 */
    setInterval (fnSlide, 3000);

    function fnSlide() {
        $("#slide").animate({"margin-top":"-300px"},
                           1000,
                           "swing",
                           function() {
            $("#slide a:first-child").insertAfter("#slide a:last-child");
            $("#slide").css({"margin-top":"0px"});
        });
    };
    /* 슬라이드 */


    /* 탭 */
    $("#content a:first-child").click(function() {
        $("#notice").css({"display":"block"});
        $("#gallery").css({"display":"none"});
    });
    $("#content a:nth-child(2)").click(function() {
        $("#notice").css({"display":"none"});
        $("#gallery").css({"display":"block"});
    });
    /* 탭 */


    /* 레이어 팝업 */
    $(".noticeTxt").click(function() {
        $("#layer").css({"display":"block"});
    });
    $("#layerTxt>button").click(function() {
        $("#layer").css({"display":"none"});
    });
    /* 레이어 팝업 */

});
