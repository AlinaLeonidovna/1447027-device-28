var feedbackLink = document.querySelector(".contacts-btn");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackLogin = feedbackPopup.querySelector(".feedback-login-user");
var feedbackEmail = feedbackPopup.querySelector(".feedback-login-email");
var feedbackСomment = feedbackPopup.querySelector(".feedback-comment");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
	} catch (err) {
	isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("modal-show");

	if (storage) {
	feedbackLogin.value = storage;
	feedbackEmail.focus();
	} else {
	feedbackLogin.focus();
	}
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");
	feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!feedbackLogin.value || !feedbackEmail.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", feedbackLogin.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			feedbackPopup.classList.remove("modal-show");
			feedbackPopup.classList.remove("modal-error");
		}
	}
});







