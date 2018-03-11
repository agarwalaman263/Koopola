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
	$(".status").html("");
	$(".selector div").css("background-color","white");
	$(".selector div").css("color","#171123");
	$(this).css("background-color","#171123");
	$(this).css("color","white");
	if(account=='signup')
{
	$(".signup-field").show();
	$(".login").css("height","60%");
}
else
{
$(".signup-field").hide();
	$(".login").css("height","50%");	
}
});
function validate()
{

		if(account=='signup')
		{
			$(".status").html("EMail has been send")
		}
		else
		{
			$(".map").css("filter","blur(0px)");
		$(".map").css("pointer-events","all");
		$('.overlay').fadeOut();			
		}
}

function status_displayed()
{
	setTimeout(function(){
			
			$(".camera-section").hide();
	},999);
	$(".status_displayed").show();
}
