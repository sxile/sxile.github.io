// change the visibility of a divID
function changeVisibility(divID){
	var element = document.getElementById(divID);

	//if element exists toggle it's class
	//between hidden and unhidden
	if(element){
		element.className = (element.className == 'hidden')? 'unhidden' : 'hidden';
	}
}//changeVisibility

//display lightbox with bigImage in it
function displayLightBox(imageFile, alt){

	var image = new Image();
	var bigImage = document.getElementById("bigImage");

	image.src = "images/" + imageFile;
	image.alt = alt;

	//look up anonymous functions for more
	//force big image to preload so u can find it's width
	image.onload = function () {
		var width = image.width;
		document.getElementById("boundaryBigImage").style.width = width + "px";
	};

	bigImage.src = image.src;
	bigImage.alt = image.alt;



	changeVisibility('lightbox');
	changeVisibility('boundaryBigImage');

}//displayLightBox