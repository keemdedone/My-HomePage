<?php
  include_once("database.php");
  $postdata = file_get_contents('php://input');
  if(isset($postdata) && !empty($postdata)){
  	$request = json_decode($postdata,true);
  	if (trim($request['name']) == '' || trim($request['email']) == '') {
  		return http_response_code(400);
  	}
  	$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['id']) : false;
  	$name = mysqli_real_escape_string($mysqli, trim($request['name']));
    $pwd = mysqli_real_escape_string($mysqli, (int)$request['pwd']);
  	$email = mysqli_real_escape_string($mysqli, trim($request['email']));
    $lv = mysqli_real_escape_string($mysqli, (int)$request['lv']);
  	$sql = " UPDATE users SET name='$name', password='$pwd' ,email='$email' ,level='$lv' WHERE id = $id ";
  	if($mysqli->query($sql)){
  		http_response_code(204);
  	} else {
  		return http_response_code(422);
  	}
  }
?>
