<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
    $action = mysqli_real_escape_string($mysqli, trim($request->action));
    $sql = "INSERT INTO user_log(name,action) VALUES ('$name','$action')";
    if ($mysqli->query($sql)){
      echo "complete" ;
    } else {
      echo "error" ;
    }
  }
?>
