<!DOCTYPE html>
<html>
<head>
	<title>Sign Up Form</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
</head>
<body>

	<form action="#" method="post">
		<p>
			<label for="username">Username</label>
			<input id="username" name="username" type="text">
		</p>
		<p>
			<label for="password">Password</label>
			<input id="password" name="password" type="password">
			<span>Enter a password longer than 8 characters</span>
		</p>
		<p>
			<label for="confirm_password">Confirm Password</label>
			<input id="confirm_password" name="confirm_password" type="password">
			<span>Please confirm your password</span>
		</p>
		<p>
			<input type="submit" value="SUBMIT" id="submit">
		</p>
	</form>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>
