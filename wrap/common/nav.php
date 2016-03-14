<?php

require_once("modals.php");

?>
<div class="navContainer">
	<div class="navImages hamburger">
		<img class="burger" src="assets/global/NAV/hamburger.png" />
		<img class="x" src="assets/global/NAV/white_x.png" />
	</div>	
	<div class="navImages navLogo">
		<a href="index.php"><img src="assets/global/NAV/logo_horizontal.png" /></a>
	</div>
	<div class="leftNav">
		<ul>
			<li id="logo"><a href="index.php"><img src="assets/global/NAV/logo_horizontal.png" /></a></li>
			<li><a href="index.php?section=explore">explore</a></li>
			<li><a href="index.php?section=about">about</a></li>
			<li><a href="index.php?section=careers">careers</a></li>
			<li><a href="index.php?section=blog">blog</a></li>
			<li class="modalButton" id="login">login</li>
			<li class="orangeButton modalButton" id="freeTrial">free trial</li>
		</ul>
	</div>
</div>