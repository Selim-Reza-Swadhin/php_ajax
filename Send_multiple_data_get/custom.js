
$('#button').click(function () {
    let uname = $('#name').val();
//alert('jhg');
    $.ajax({
        // type : 'get',//default
        //method : 'get',
        url:'page.php',
        data:'user=' + uname,
        success : function (dat) {
            // $('#content').text(dat);
            $('#content').html(dat);
        }
    })

});