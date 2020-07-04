<?php
if (isset($_GET['usearch'])) {
   // echo $_GET['usearch'];



    $conn = mysqli_connect('localhost', 'root', '', 'ajax_live_search');
    $search = $_GET['usearch'];

    //$sql = "select * from tbl_post where title like '%$search%' || body like '%$search%' || author like '%$search%' ";
    $sql = "select distinct title, body, author from tbl_post where title like '%$search%' || body like '%$search%' || author like '%$search%' ";
    $rs = mysqli_query($conn, $sql);

    while ($row = mysqli_fetch_array($rs)) {
        echo $row['title'] . '<br/>';
        echo $row['body'] . '<br/>';
        echo $row['author'] . '<br/>';
    }

}
