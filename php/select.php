<?php
  include_once("database.php");
  $sql = "SELECT * FROM users";
  if($result = mysqli_query($mysqli,$sql)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
      $rows[] = $row;
    }
    echo json_encode($rows);
  } else {
    http_response_code(404);
  }
?>
