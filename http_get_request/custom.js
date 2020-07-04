
$('#button').click(function () {

    let uname = $('#name').val();
    let umsg = $('#msg').val();

  /*  $.get('page.php', {wishvar:uname, wishvar2:umsg}, function (dat) {
        // $('#feedback').text(dat);
        $('#feedback').html(dat);
    });*/

    $.ajax({
        // type : 'get',//default
        method : 'get',
        url:'page.php',
        data: {wishvar:uname, wishvar2:umsg},
        success : function (dat) {
            // $('#feedback').text(dat);
            $('#feedback').html(dat);
        }
    })

});