<?
	function connect_db() {
		$mysqli_function = new mysqli(
			"localhost",
			"cddspor13531",
			"856b0d9b8b",
			"cddspor13531"
			);
			if ($mysqli_function->connect_error) {
                    die('Ошибка подключения (' . $mysqli_function->connect_errno . ') '
                    . $mysqli_function->connect_error);
            }   
		return $mysqli_function;
	}
	function connectClose($connect){
            return $connect->close();
        }

	if(isset($_POST['add-note'])) {
		if(!empty($_POST['user-note']) ) {
			$title= trim(strip_tags($_POST['title']));
			$note = trim(strip_tags($_POST['user-note']));
			addNote($title,$note);
		}
	}

	if(isset($_GET['delete'])) {
		$id = abs((int)$_GET['delete']);
		$mysqli = connect_db();
		$result = $mysqli->query("SELECT id FROM notelist WHERE id='$id'");

			if($result && $result->num_rows == 1) {
			$mysqli->query("DELETE FROM notelist WHERE id='$id'");	
			}
	}

	function addNote($title="",$note="") {
	$mysqli = connect_db();
	$mysqli->query("INSERT INTO notelist
						(title,note)
					VALUES 
						('$title','$note')
		           ");
	return true;
	}

	function showUsers() {
		$mysqli = connect_db();
		$result=$mysqli->query("SELECT id,title,note FROM notelist");
		$rows = $result -> fetch_assoc();

		if($rows) {
			do {
				echo "<div class='note col-lg-12 col-sm-12 col-xs-12'>";
				echo "<div class='control-btn'>";
				echo "<a href='?delete=".$rows['id']."'><span class = 'glyphicon glyphicon-remove'></a>";
				echo "</div>";
				echo "<p class = 'title'><b>".$rows['title']."</b></p>";
				echo "<p>".$rows['note']."</p>";
				echo "</div>";
			}
			while($rows = $result -> fetch_assoc());
			connectClose($mysqli);
		}
	}
	showUsers();
?>

