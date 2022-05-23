<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $name = "UPDATE user_log SET name = (SELECT users.name FROM users WHERE user_log.user_id = users.id)" ;
    $action = mysqli_real_escape_string($mysqli, trim($request->action));
    $sql = "INSERT INTO user_log(user_id,action) VALUES ('$user_id','$action')";
    if ($mysqli->query($sql) && $mysqli->query($name)){
      echo "complete" ;
    } else {
      echo "error" ;
    }
  }
?>
