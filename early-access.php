<?php  

$servername ="localhost";
$username = "root";
$password = "";
$dbname = "codeflix";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
	die("connection failed");
}

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$location = $_POST["location"];


$sql = "INSERT INTO user (name, email, phone, location) 
VALUES ('$name', '$email', '$phone', '$location')";

if($conn->query($sql) === TRUE){

	header("Location:index.html");
	
}
else{
	?>
	<script>
		alert('Enter your details correctly ');
	</script>
	<?php
}


?>




















