<?php
  include_once("database.php");
  $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['id']) : false;
  $sql = "DELETE FROM users WHERE id = $id ";
  if ($mysqli->query($sql)) {
  	http_response_code(204);
  } else {
    return http_response_code(422);
  }

?>
