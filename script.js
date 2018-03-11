var account="public";
var flag=0
$(document).ready(function(){
	setTimeout(function(){
		$(".loading-screen").hide();
		$(".map").css("filter","blur(5px)");
		$(".map").css("pointer-events","none");
		flag=1;
		$(".login-page").css("display","flex");
	},3000);
});


/* Set the width of the side navigation to 250px */
function openNav() {
	$("#mySidenav *").show();
    document.getElementById("mySidenav").style.width = "250px";
    		$(".map").css("filter","blur(5px)");
		$(".map").css("pointer-events","none");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    $("#mySidenav *").hide();
    document.getElementById("mySidenav").style.width = "0";
    		$(".map").css("filter","blur(0px)");
		
		$(".map").css("pointer-events","all");

}
$(".selector div").on("click",function(){
	$(".selector div").css("background-color","white");
	$(".selector div").css("color","#171123");
	$(this).css("background-color","#171123");
	$(this).css("color","white");
});
function validate()
{
			$(".map").css("filter","blur(0px)");
		$(".map").css("pointer-events","all");
		$('.overlay').fadeOut();
}

