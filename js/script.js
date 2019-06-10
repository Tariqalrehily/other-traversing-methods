$(document).ready(function(){   
    // When a colored panel is clicked, all panels vanish
    // $(".container").click(function(){
    //     $(this).children("div").hide()
    // });
    //hides all panels when a panel is clicked
    // $(".theButton").click(function(){
    // $("#panel .container").siblings().hide();
    // });
    
    // When a colored panel is clicked, just that panel disappears
    // $(".theButton").click(function(){
    //     $(this).hide()
    // });
    
    // When a panel is clicked, all siblings fade to 10% opacity
    $(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5);
   });
   
//   When reset is clicked, all panels revert to full opacity
    $(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);	
   });
   
//   When the mouse hovers over a panel, that panel turns black
   $(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });

 //returns to original colour on mouseout 
$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });
   
//   Change the text in the reset button to display the colour (RGB) of the selected panel.
    $(".theButton").click(function(){
    var col = $(this).css('background-color');
    $('.superButton').text( col);

   });
    
});