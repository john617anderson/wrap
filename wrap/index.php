<?php
	(isset($_GET['section'])) ? $section = $_GET['section'] : $section = "null";
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="stylesheets/screen.css" rel="stylesheet" media="screen">
		<link href="stylesheets/slick-theme.css" rel="stylesheet" media="screen">
		<link href="stylesheets/slick.css" rel="stylesheet" media="screen">
		<script src="js/jquery.js"></script>
		<script src="js/slick.min.js"></script>
		<script src="js/main.js"></script>

		<?php
			switch ($section) {
			    case "explore":
			        echo '<script src="js/explore.js"></script>';
			        break;
			    case "null":
			        echo '<script src="js/home.js"></script>';
			        break;
			}
		?>	

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

<?php
	if($section == "null" || $section == "explore")
	echo '<script src="https://wrap.co/embed/bootstrap.js" async defer></script>';
?>
