<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax Page loading without refreshing browser</title>
</head>
<body style="background: #999">

Username : <input type="text" id="name">
<input type="button" id="button" value="Send">
<br><br>
<div id="content"></div>

<script src="../jquery-3.5.0.min.js"></script>
<script>

    $('#button').click(function () {
        let uname = $('#name').val();
//alert('jhg');
        $.ajax({
            // type : 'get',//default
            method : 'post',
            url:'page.php',
            data:'user=' + uname,
            success : function (dat) {
                // $('#content').text(dat);
                $('#content').html(dat);
            }
        })

    });
</script>
</body>
</html>