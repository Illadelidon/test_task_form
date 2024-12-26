<?php
$host = "localhost";
$db = "test_form";
$user = "root";
$pass = "";
$conn = new mysqli($host, $user, $pass, $db);

if($conn->connect_error){
    die('Connection error');
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);

    $conn->query("INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')");

    echo "Message sent successfully!";
    exit();
}

if($_SERVER['REQUEST_METHOD'] === 'GET'){

    $result = $conn->query("SELECT name, email, message FROM messages ORDER BY id DESC");


    while($row = $result->fetch_assoc()){
        echo "<tr>
                <td>{$row['name']}</td>
                <td>{$row['email']}</td>
                <td>{$row['message']}</td>
              </tr>";
    }
    exit();
}
?>
