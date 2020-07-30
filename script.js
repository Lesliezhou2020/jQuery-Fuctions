//console.log("Hello World!")

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("fast");
      $("#panel").slideDown("slow");
      $("#panel").css("color","white");
      $("#icon").before("<p>I See You!</p>");
      $("#icon").after("<p>Great!</p>");
      $("#panel").addClass("bold-font");

    });

    $("#hide").click(function(){
        $("h3").hide();
    });
    $("#show").click(function(){
        $("h3").show();
    });

    $("h3").click(function(){
      $("#panel").slideUp("slow");
    });
    
    $("#fade").click(function(){
      if ($("#div1").css('display') == 'none') {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      } else {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
      }
     
    });
    $("h3").append("<strong>***</strong>");  
    
    $("#btn1").click(function(){
      $("#test1").text("Hello world!");
      $("h2").toggle();
    });
    $("#btn2").click(function(){
      $("#test2").html("<b>Hello!</b>");
    });
    $("img").click(function(){ 
      $("img").attr('src','cat0.png');

    });
    
  });
 

    

