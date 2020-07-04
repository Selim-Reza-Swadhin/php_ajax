$('#search').keyup(function () {
let s = $('#search').val();
//alert(s);

    $.ajax({
        // type : 'GET', //DEFAULT
        url : 'livesearch.php',
        //data : 'usearch = '+s,//error type, no space keep
        data : 'usearch='+s,
        success : function (dat) {
            // $('#feedback').text(dat);
            $('#feedback').html(dat);
        }


    });

});