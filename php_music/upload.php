<?php
    if(isset($_POST['upload'])){
        $music = $_FILES['files']['name'];
        $music_loc = $_FILES['files']['tmp_name'];
        $music_folder = "C:/xampp/htdocs/my-homepage/src/assets/music/";
        if(move_uploaded_file($music_loc,$music_folder.$music)){
            $music.json_encode("complete");
            header( "location: http://localhost:4200/music/music-play" );
            exit(0);
        } else {
            $music.json_encode("fail");
            header( "location: http://localhost:4200/music/music-play" );
            exit(0);
        }
    }
?>