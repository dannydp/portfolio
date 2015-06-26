<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Note</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<!-- Bootstrap -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]--> 
</head>
<body>
<a href = "https://github.com/dannydp/Courses-at-Maxymiser-Academy-/tree/master/note"><h1>Code on GitHub</h1></a>
<div class="container">
	<div class="notepad">
	<form method="post">
		<div class="form-group col-lg-12 col-md-12 col-sm-9 col-xs-7 box size22">
  			<input type="text" class="form-control" placeholder = "Название..." name = "title">
			<textarea class="form-control" rows="7" placeholder = "Текст..." name = "user-note"></textarea>
			<button type="submit" class="btn btn-info" name="add-note">Добавить</button>
		</div>
	</form>
		<div class="note-container col-lg-12 col-md-12 col-sm-9 col-xs-7">
			<?
				include 'controlNote.php';
			?>	
		</div>
	</div>
</div>
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
</body>
</html>


