<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8"/>
<link rel="alternate stylesheet" href="alt.css" title="alt" type="text/css" media="screen"/>
<link rel="stylesheet" title="main" href="main.css" type="text/css" media="screen"/>
<link rel="alternate stylesheet" title="alt2" href="alt2.css" type="text/css" media="screen"/>
<script  type="text/javascript"  src="walidacja.js"></script>
<script type="text/javascript" src="style.js"></script>
</head>
<body>

<?php
	include 'menu.php';
?>

	<div class="content">
		<h1>Zakładanie nowego bloga</h1>
		
		<form action="nowy.php" method="post">
			<ul>
				<li><label>Nazwa blogu <input type="text" name="blogName"/></label></li>
				<li><label>Nazwa użytkownika <input type="text" name="userName"/></label></li>
				<li><label>Hasło uzytkownika <input type="password" name="userPassword"/></label></li>
				<li><label>Opis blogu <textarea name="blogDescription"></textarea></label></li>
				<li><input type="submit" value="Utwórz blog"></li>
				<li><input type="reset" value="Wyczyść"/></li>
			</ul>
		</form>
	</div>
</body>
</html>
