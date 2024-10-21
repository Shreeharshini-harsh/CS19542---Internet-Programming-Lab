<?php
// Database connection parameters
$servername = "localhost";  // Update if needed
$username = "root";  // Use your MySQL username
$password = "";  // Use your MySQL password
$dbname = "rental";  // Use your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname,3307);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $vehicle_type = $_POST['vehicle'];
    $transmission_type = $_POST['Type'];
    $required_in = $_POST['Required'];
    $driving_mode = $_POST['Mode'];
    $number_of_days = $_POST['days'];

    // SQL query to insert data
    $sql = "INSERT INTO vehicle_bookings (vehicle_type, transmission_type, required_in, driving_mode, number_of_days) 
            VALUES ('$vehicle_type', '$transmission_type', '$required_in', '$driving_mode', '$number_of_days')";
    

    if ($conn->query($sql) === TRUE) {
        echo "Booking successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

