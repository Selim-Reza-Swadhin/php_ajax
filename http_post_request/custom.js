
$('#button').click(function () {

    let uname = $('#name').val();
    let umsg = $('#msg').val();

    /*$.post('page.php', {wishvar:uname, wishvar2:umsg}, function (dat) {
     // $('#feedback').text(dat);
     $('#feedback').html(dat);
 });*/

    $.ajax({
       // type : 'post',
       method : 'post',
       url:'page.php',
       data: {wishvar:uname, wishvar2:umsg},
        success : function (dat) {
            // $('#feedback').text(dat);
            $('#feedback').html(dat);
        }
    })



});