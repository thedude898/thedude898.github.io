<?php
// Read the name and text data from the POST request
$name = $_POST["name"];
$text = $_POST["text"];

// Save the data to a file on the server
$file = fopen("data.txt", "a");
fwrite($file, $name . ": " . $text . "\n");
fclose($file);

// Return a success message to the client
echo "Data saved successfully!";
?>
