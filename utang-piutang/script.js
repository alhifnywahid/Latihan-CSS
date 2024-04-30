const getDateNow = function () {
	let today = new Date();
	let year = today.getFullYear();
	let month = (today.getMonth() + 1).toString().padStart(2, '0');
	let day = today.getDate().toString().padStart(2, '0');
	let formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
};

document.querySelectorAll('section [type="date"]').forEach((value) => {
	value.value = getDateNow();
});
