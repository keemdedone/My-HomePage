<?php
  include_once("database.php");
  $postLog = file_get_contents("php://input");
  if(isset($postLog) && !empty($postLog)){
    $request = json_decode($postLog);
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
    $action = mysqli_real_escape_string($mysqli, trim($request->action));
    $sql = "INSERT INTO user_log(name,action) VALUES ('$name','$action')";
    if ($mysqli->query($sql) === TRUE) {
      $authdata = [
        'name' => $name,
        'action' => $action,
        'id' => mysqli_insert_id($mysqli),
      ];
      echo json_encode($authdata);
    }
  }
?>
