<?php 

$capture_field_vals = "<table class='table' bordered='1'>";
$capture_field_vals .= "<tr><th>Id</th><th>First Name</th><th>Last Name</th></tr>";	

$counting = $_POST['id'];
$count1 = count($counting);


$ids = $_POST['id'];
$first_names = $_POST['firstname'];
$last_names = $_POST['lastname'];


for($count = 1; $count <= $count1; $count++) {

	$capture_field_vals .=	"<tr>";
	$capture_field_vals .= "<td>" . $ids[$count] . "</td>";
	$capture_field_vals .= "<td>" . $first_names[$count] . "</td>";
	$capture_field_vals .= "<td>" . $last_names[$count] . "</td>";
	$capture_field_vals .=	"</tr>";
}

$capture_field_vals.= "</table>";
header("Content-Type: application/xls");
header("Content-Disposition: attachment, filename=download.xls");
echo $capture_field_vals;


?>


