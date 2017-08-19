<?php 
function redirect_to($new_location) {
 header("Location: " . $new_location); //header request
 exit;
}
?>

<?php 
// 1. create a database connection
$dbhost = 'localhost'; // host, ip address, domain
$dbuser = 'root';
$dbpass = 'root?3';
$dbname = 'tester';
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);  // those values are used to handle the connection ...


// 1.test if the connection occured ...
if(!$connection) {  //it return null or error number
	echo "trying to establish database connection but it does fail";
	/*die("connection failed: ". mysqli_connection_error() . "(" . mysqli_connect_errno() .")");	*/
} else {
	echo "database connection successfully established ...";
}

?>


<?php


$first_names = $_POST['firstname'];
$last_names = $_POST['lastname'];
$ids = $_POST['id'];
$count1 = count($ids);




for($count = 1; $count < $count1; $count++) {
	$ids1 = mysqli_real_escape_string($connection, $ids[$count]);
	$first_names1 = mysqli_real_escape_string($connection, $first_names[$count]);
	$last_names1 = mysqli_real_escape_string($connection, $last_names[$count]);
	

	$query = "INSERT INTO sampleTable (" ;
	$query .= "id, first_name, last_name";
	$query .= ") VALUES('$ids1', '$first_names1', '$last_names1')";


$result = mysqli_query($connection, $query);
// test if there is some query error ...
if (!$result){
	die("database insertion failed");
}/*end of if !Result conditional */
else {
	echo "inserting data into datbase successfullly executed ...";
	redirect_to("item.html");
  }
 } /*end of for loop */


?>
