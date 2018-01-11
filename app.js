$(document).ready(function () {

var day = 0;  
var month = 1;
var year = 2018;
var zero = "0";
var paused = false;
  
  
function changeDate(){
 if (!$(".pause").hasClass("gamePaused")){  
  //Increment day
  day++;
  //Remove previous day
  $(".day").empty();
  //Display acctual day
  
  //If day is digit
  if (day < 10) {
    //Concat day with "0" before
    var dayWith0 = zero.concat(day);
    //Display acctual day
    $(".day").append(dayWith0 += ".");
    //If day isn't digit
  } else {
      //Display acctual day (without "0")
      $(".day").append(day += ".");
    }
  
  if (day == 30) {
    //Reset days counter
    day = 0;
    //Increment month but don't display yet
    month++;
    console.log("pay bills");
  }
  
  
  if (day == 1){
    //Remove previous month
    $(".month").empty();
  
  //If month is digit  
  if (month < 10) {
    //Concat month with "0" before
    var monthWith0 = zero.concat(month);
    //Display acctual month
    $(".month").append(monthWith0 += ".");
    //If month isn't digit
  } else {
      //Display acctual month (without "0")
      $(".month").append(month += ".");
    }  
  }
  
  if (month == 12 && day == 3) {
    //Reset month
    month = 0;
    //Increment year but don't display yet
    year++;
  }
  
  //If today is 01.01
  if (day == 1){
    //Remove previous year
    $(".year").empty();
    //Display acctual year
    $(".year").append(year);
  }


 }  
}//end of function  

 //When player click at pause button
 $(".pause").on("click", function(){
   //Toggle class ".gamePaused" at ".pause" button
   $(".pause").toggleClass("gamePaused");
}); 
//Day interval  
setInterval(changeDate, 10000);

  
  
//OPENING/CLOSING .MENUSTART SECTION  
  
//Open/close .menuStart by clicking .start button  
$(".start").on("click", function(){
  $(".menuStart").toggleClass("visible");
});
  
//Close menuStart by clicking at window  
$(".window").on("click", function(){
  $(".menuStart").removeClass("visible");
});   

//If you click anywhere at the screen (except .start button) .menuStart will disappear  
$(".screen").on("click", function(e){
  var target = $(e.target);
  if(target.hasClass("start")){
  } else {
      $(".menuStart").removeClass("visible");
    }
});

//THE END OF OPENING/CLOSING .MENUSTART SECTION  
  

  
//SECTION "OPENING/CLOSING WINDOWS"  

//Open empty window after click at menuOption
$(".menuOption").on("click", function(){
  $(".window")
  $(".window").addClass("windowOpen");
});  
  
//After click at .close button close .window  
$(".close").on("click", function(){
  $(".window").removeClass("windowOpen");
  //and remove all content from window
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});
  
//After click at .textEditor menuOption make content of text editor visible  
$(".textEditor").on("click", function(){
  $(".textEditorContent").addClass("textEditorContentVisible");
  
  //and remove all the content except text editor
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});

//After click at .mail menuOption make content of mail visible  
$(".mail").on("click", function(){
  $(".mailContent").addClass("mailContentVisible");
  
  //and remove all the content except mail
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible"); 
});  

//After click at .bank menuOption make content of bank visible  
$(".bank").on("click", function(){
  $(".bankContent").addClass("bankContentVisible");
  
  //and remove all the content except bank
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});  

//After click at .shop menuOption make content of shop visible  
$(".shop").on("click", function(){
  $(".shopContent").addClass("shopContentVisible");
  
  //and remove all the content except shop
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});  

//After click at .stats menuOption make content of stats visible  
$(".stats").on("click", function(){
  $(".statsContent").addClass("statsContentVisible");
  
  //and remove all the content except stats
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});  
 
//After click at .settings menuOption make content of settings visible  
$(".settings").on("click", function(){
  $(".settingsContent").addClass("settingsContentVisible");
  
  //and remove all the content except settings
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});  

//After click at .help menuOption make content of help visible  
$(".help").on("click", function(){
  $(".helpContent").addClass("helpContentVisible");
  
  //and remove all the content except help
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});  

//After click at .author menuOption make content of author visible  
$(".author").on("click", function(){
  $(".authorContent").addClass("authorContentVisible");
  
  //and remove all the content except author
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
});  
  
//THE END OF THIS FUCKING "OPENING/CLOSING WINDOWS" SECTION  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});