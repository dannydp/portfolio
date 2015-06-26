<?
	include_once 'users.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Table with users</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<div class="container">
<h1><a href ="https://github.com/dannydp/works/tree/master/table%20with%20users">Code</a></h1>
	<table class = 'table table-bordered table-hover'>
	<th>Name</th>
	<th>Second Name</th>
	<th>e-mail</th>
	<?php $rows=$user->showUsers();?>
	<?php if(count($rows) > 0) foreach($rows as $key => $value): ?>	
	<tr>
		<td><?=$rows[$key]['name']?></td>
		<td><?=$rows[$key]['second_name']?></td>
		<td><?=$rows[$key]['e_mail']?>
			<?$id= $rows[$key]['id']?>
				<a href='?delete=<?= $id?>'><button type='button' class='btn btn-danger'><span class = 'glyphicon glyphicon-remove'></span>Delete</button></a>
				<a href="edit_user_form.phtml?edit=<?=$id?>"><button type='button' class='btn btn-info'><span class = 'glyphicon glyphicon-pencil'></span>Edit</button></a>
		</td>
	</tr>
	<?php endforeach;?>	
	</table>
	<a href="add_user_form.phtml"><button type="button" class="btn btn-default">Add new record</button></a>	
	</div>
</body>
</html>
