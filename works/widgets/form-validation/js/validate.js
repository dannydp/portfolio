'use sctrict'

(function() {
	window.usedEmails = ['ivanov@mail.ru', 'petrov@ya.ru', 'tkachuck@gmail.com'];
	var submitButton = document.body.querySelector('.btn-primary');
	var checkboxNode = document.body.querySelector('.agree');
	var checkboxHolder = document.body.querySelector('.checkbox');
	var emailNode = document.getElementById('email');
	var emailHolder = emailNode.parentNode;
	var passwordNode = document.getElementById('password');
	var passwordHolder = passwordNode.parentNode;
	var phoneNumberNode = document.getElementById('phone');
	var phoneNumberHolder = phoneNumberNode.parentNode;
	var errorMessage;
	emailNode.addEventListener('keyup', validateEmail, false);
	emailNode.addEventListener('change', validateEmail, false);
	emailNode.addEventListener('blur', validateEmail, false);
	passwordNode.addEventListener('keyup', validatePassword, false);
	passwordNode.addEventListener('change', validatePassword, false);
	passwordNode.addEventListener('blur', validatePassword, false);
	phoneNumberNode.addEventListener('keyup', validatePhoneNumber, false);
	phoneNumberNode.addEventListener('change', validatePhoneNumber, false);
	phoneNumberNode.addEventListener('blur', validatePhoneNumber, false);
	checkboxNode.addEventListener('change', validateCheckBox, false);

	function showError(groupNode, errorMessageText) {
		setTimeout(function() {
			groupNode.className += "form-group has-error";
			var vreger = groupNode.lastChild;
			errorMessage = vreger.previousSibling;
			errorMessage.innerText = errorMessageText;
			errorMessage.style.display = 'block';
		}, 300);
	}

	function hideError(groupNode) {
		groupNode.className += "form-group required";
		setTimeout(function() {
			errorMessage.style.display = 'none';
		}, 100);
	}

	function validateEmail() {
		if (!emailNode.value) {
			showError(emailHolder, 'Поле обязательное для заполнения. Введите email. Пример: ivanov@mail.ru');
			return false;
		}
		if (!/[^@]+@[^@\.]+\.[^@]/.test(emailNode.value.trim())) {
			showError(emailHolder, 'Исправте правописание. Пример: ivanov@mail.ru');
			return false;
		} else if (usedEmails.indexOf(emailNode.value) !== -1) {
			showError(emailHolder, 'Данный email занят. Попробуйте другой вариант');
			return false;
		} else if (/[^@]+@[^@\.]+\.[^@]/.test(emailNode.value.trim()) && usedEmails.indexOf(emailNode.value) === -1) {
			hideError(emailHolder);
			return true;
		}
	}

	function validatePassword() {
		if (!passwordNode.value) {
			showError(passwordHolder, 'Поле обязательное для заполнения. Введите пароль.');
			return false;
		}
		if (/^[a-z]+$/i.test(passwordNode.value.trim()) || /^\d+$/i.test(passwordNode.value.trim())) {
			showError(passwordHolder, 'Введите более сложный пароль. пароль должен состоять из чисел и букв.');
			return false;
		} else {
			hideError(passwordHolder);
			return true;
		}
	}

	function validatePhoneNumber() {
		if (!phoneNumberNode.value) {
			hideError(phoneNumberHolder);
			return true;
		}
		if (!/^[+]\d+$/.test(phoneNumberNode.value.trim())) {
			showError(phoneNumberHolder, 'Введите номер телефона в международном формате. Например: +380509993322');
			return false;
		} else {
			hideError(phoneNumberHolder);
			return true;
		}
	}

	function validateCheckBox() {
		if (checkboxNode.checked) {
			hideError(checkboxHolder);
			return true;
		} else {
			showError(checkboxHolder, 'Галочка "Согласен со всем" не поставлена');
			return false;
		}
	}

	document.querySelector('form').addEventListener('submit', function(event) {
		var formIsValid;
		formIsValid = validateEmail() && validatePassword() && validatePhoneNumber() && validateCheckBox();
		if (formIsValid === false) {
			submitButton.disabled = true;
			event.preventDefault();
		}
		setTimeout(function() {
			submitButton.disabled = false;
		}, 2000);
	}, false);
}());