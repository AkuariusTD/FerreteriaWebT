<?php
    $conn = new mysqli("localhost","root","","ferr");
    if ($conn->connect_error) {
        echo $error -> $conn->connect_error;
    }
    
?>
