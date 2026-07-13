document.querySelectorAll(".dropdown-toggle").forEach((button) => {
	button.addEventListener("click", function () {
		this.parentElement.classList.toggle("open");
	});
});
