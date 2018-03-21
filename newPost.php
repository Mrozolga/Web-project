<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8"/>
<link rel="alternate stylesheet" href="alt.css" title="alt" type="text/css" media="screen"/>
<link rel="stylesheet" title="main" href="main.css" type="text/css" media="screen"/>
<link rel="alternate stylesheet" title="alt2" href="alt2.css" type="text/css" media="screen"/>
<script  type="text/javascript"  src="walidacja.js"></script>
<script type="text/javascript" src="style.js"></script>
</head>
<body onload="odliczaj();">

<?php
	include 'menu.php';
?>

	<div class="newPost">
		<h1 class="header1">Dodawanie nowego wpisu do bloga</h1>
		<form  action="wpis.php" method="post" enctype="multipart/form-data">
			<ul>
				<li><label>Nazwa użytkownika<input type="text" name="userName"/></label></li>
				<li><label>Hasło uzytkownika<input type="password" name="password" /></label></li>
				<li><label>Data<input type="text" id="data" value="data1" onclick="flaga1=0" /></label></li>

		<li><label>Czas<input type="text" id="czas" value="c" onclick="flaga=0" onchange="walidacja()"/></label></li>
				<li><label>Treść wpisu<textarea name="content"></textarea></label></li>
				<li><label>Załączniki:</label></li>
				<li><label id="files"><input onchange="addFileButton();" type="file" name="attach1"/></label></li>
				<li><input type="submit" value="Dodaj wpis"></li>
				<li><input type="reset" value="Wyczyść" /></li>
				
			</ul>
		</form>
	</div>
	


</body>
</html>
