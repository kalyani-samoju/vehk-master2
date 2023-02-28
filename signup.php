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
$password = $_POST["pass"];
$salt = "codeflix";
$password1=password_hash($password, PASSWORD_DEFAULT);


$sql = "INSERT INTO user (name, email, pass) 
VALUES ('$name', '$email', '$password1')";

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




















