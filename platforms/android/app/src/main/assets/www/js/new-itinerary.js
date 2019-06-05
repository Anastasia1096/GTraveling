$(document).ready(function(){
    $('input[type="radio"]').click(function(){
    	var demovalue = $(this).val(); 
        $("div.city").hide();
        $("#show"+demovalue).show();
    });
});