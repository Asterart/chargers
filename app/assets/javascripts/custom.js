

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body 
function openNav() {
    document.getElementById("mySidenav").style.width = "10%";
    document.getElementById("mapid").style.marginLeft = "10%";
    //document.getElementById("headerMenu").style.marginLeft = "10%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mapid").style.marginLeft = "0";
   // document.getElementById("headerMenu").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


*/

	$(document).ready(function(){
		var choose = 0;
		$("#charger").click(function(){
			$(".submenu").slideToggle("slow", function(){
			if (choose == 0){
				$("#charger").text("Hide chargers");
				choose = 1;
			} else{
				$("#charger").text("Show chargers");
				choose = 0;
			}
			});
		});
	});