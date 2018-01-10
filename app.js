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

//Open/close .menuStart by clicking .start button  
$(".start").on("click", function(){
  $(".menuStart").toggleClass("visible");
});  
//
//$(".screen").on("click", function(){
//  if($(".menuStart").hasClass("visible")){
//   $(".menuStart").removeClass("visible");
//  }
//});  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});