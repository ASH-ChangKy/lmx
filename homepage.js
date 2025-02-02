
$(document).ready(function(){
    function skip(num) {
        if(num === '1') {
            $("#home").show();
            $("#aboutBar").hide();
            $("#drinkMenu").hide();
            $("#Link").hide();
        }if(num === '2') {
            $("#home").hide()
            $("#aboutBar").show();
            $("#drinkMenu").hide();
            $("#Link").hide();
        }if(num === '3') {
            $("#home").hide()
            $("#aboutBar").hide();
            $("#drinkMenu").show();
            $("#Link").hide();
        }else if(num === '4') {
            $("#home").hide()
            $("#aboutBar").hide();
            $("#drinkMenu").hide();
            $("#Link").show();
        }else {

        }
    }
    skip("1");
    $("#menu-footer-nav li").click(function(){
        var val = $(this).children('a').attr('class');
        if(val === 'nav-2') {
            skip('2');
        }if(val === 'nav-3') {
            skip('3');
        }if(val === 'nav-4') {
            skip('4');
        }else {

        }
    });
    $("#ab").click(function (){
        skip('2');
    })
    $("#dm").click(function (){
        skip('3');
    })
    $("#homePage").click(function(){
        skip('1');
    })
});
