<?php
session_start();
$server_name = "localhost";
$username = "root";
$password = "";
$database_name  = "database1";
$conn = mysqli_connect($server_name,$username,$password,$database_name);

if(!$conn)
{
    die("Connection Failed: " . mysqli_connect_error());
}

if(isset($_POST['save']))
{
    $email = $_POST['email'];
    $comments = $_POST['comments'];
    $sql_query = "INSERT INTO entry_details
    (email,comments)
    VALUES
    ('$email','$comments')";
    
    if(mysqli_query($conn, $sql_query))
    {
        echo "Your response is succesfully submited !";
    }
    else
    {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
