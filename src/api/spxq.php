<?php
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    // 引入其他文件
    require('connect.php');
    
    $result = $conn->query("select * from shanping where id='$id'");

    $row = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>