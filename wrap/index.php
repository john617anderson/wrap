<?php

	if(isset($_GET['section'])){
		$section = $_GET['section']; 
	}else{
		$section = "null";
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link href="stylesheets/screen.css" rel="stylesheet" media="screen">
	</head>
	<body>
		<div id="wrapper">
			<?php
				require_once 'common/nav.php'; 

				if($section == "null"){
					require_once 'pages/home.php';
				}else{
					$add = (String)'pages/'.$section.'.php';
					require_once str_replace('"', "", $add); 
				} 

				require_once 'common/footer.php'; 
			?>
		</div>
	</body>
</html>
