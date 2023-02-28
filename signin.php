<?php

$servername ="localhost";
$username = "root";
$password = "";
$dbname = "codeflix";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
	die("connection failed");
}

$email = $_POST["email"];
$password = $_POST["pass"];

$sql ="SELECT pass FROM `user` WHERE email ='$email'";
$result=mysqli_query($conn,$sql);

while($temp= $result->fetch_assoc())
{

	$dbpass=$temp['pass'];
}
$pass=password_verify($password, $dbpass);


if($dbpass==$pass){
	 
	header("Location:https://www.vehk.in/ ");
	
}
else{
	?>
	<script>
		alert('Login failed');
	</script>
	<?php

	header("Location:signlog.html");
}


?>