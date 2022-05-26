<?php
  include_once("database.php");
  $postdata = file_get_contents("php://input");
  if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
    $path = mysqli_real_escape_string($mysqli, trim($request->path));
    $sql = "INSERT INTO music(name,path) VALUES ('$name','$path')";
    if($mysqli->query($sql)){
        http_response_code(204);
    } else {
        return http_response_code(422);
    }
  }
?>