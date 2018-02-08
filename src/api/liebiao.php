<?php
     // 引入其他文件
    require('connect.php');
    // 查询Sql语句
    // 获取查询结果集（对象）
    $result = $conn->query('select * from shanping');

    $pageNo = isset($_GET['pageNo'])? $_GET['pageNo']:1;
    $qty = isset($_GET['qty'])? $_GET['qty']:5;
    
    // var_dump($result->num_rows);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);//得到所有结果
    // $row = $result->fetch_assoc();//得到第一个结果
    // $row = $result->fetch_row();//得到第一个结果的值

    $res = array(
        'data' =>array_slice ($row,($pageNo-1)*$qty,$qty),
        'qty' =>$qty,
        'total' =>count($row)
    );
    // var_dump($row)

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>