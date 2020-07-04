
$('#button').click(function () {
//alert('jhg');
    $.ajax({
        // type : 'get',
        //method : 'get',
        url:'page.php',
        success : function (dat) {
            // $('#feedback').text(dat);
            $('#content').html(dat);
        }
    })

});