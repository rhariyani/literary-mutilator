window.onload = function () {
	changeColor();
};

	function changeColor(id)
{
	document.getElementById(id).style.color = "#ff0000"; // forecolor
	document.getElementById(id).style.backgroundColor="purple"; // backcolor
	document.getElementById(id).style.fontFamily="Arial";
	document.getElementById(id).style.fontSize="Large";
}
function highlight(id) {
		document.getElementById(id).style.backgroundColor ="pink";

}

