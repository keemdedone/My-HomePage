<?php
  include_once("database.php");
  $sql = "INSERT INTO user_log(name,action) VALUES ('tester','testing')";
  if($mysqli->query($sql)){
    echo "successfully" ;
  } else {
    echo "error" ;
  };
?>
