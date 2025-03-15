<?php
$connection = mysqli_connect("localhost", "root", "", "demo");

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

$result = mysqli_query($connection, "SELECT * FROM students");
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);
?>
