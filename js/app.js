$(function () {

    //document.getElementById('test').style.display = 'none';
    //$('#test').hide();
    $('#hideBtn').click(function () {
        $('#test').hide(3000,function () {
            alert()
        });
    })
    $('#showBtn').click(function () {
        $('#test').show();
    })
    $('#toggleBtn').click(function () {
        $('#test').toggle();
    })

    $('#hiddenBtn').mouseleave(function () {
        $('#test').hidden();
    })
    $('#inp').keydown(function () {
        alert()
    })
    $('#fadeIn').click(function () {
        $('#output').fadeIn();
    })
    $('#fadeOut').click(function () {
        $('#output').fadeOut(1000);
    })
    $('#fadeToggle').click(function () {
        $('#output').fadeToggle(1000);
    })
    $('#fadeTo').click(function () {
        $('#output').fadeTo(1000,.8);
    })
    $('#animate').click(function () {
        $('#output').animate({
            width:'300px',
            height:'400px',
            backgrounColor:'blue',
        },2000)
    })
})
