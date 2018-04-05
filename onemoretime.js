var day = 0, 
  month = 1,
  year = 2018,
  zero = "0",
  paused = false,
  
  points = 0,
  genre,
  title,
   
  accountBalance = 55000,
  monthlyCosts = 2000,  

  fans = 100,
  isMore = false,  

  popular,
  previousGenre,  
    
  levelOfFame = 1,
  levelOfFameProgress = 0,  
    
  levelOfAdventure = 1,
  levelOfAdventureProgress = 0,  
  levelOfBasedOnTheGame = 1,
  levelOfBasedOnTheGameProgress = 0,  
  levelOfBiography = 1,
  levelOfBiographyProgress = 0,
  levelOfComedy = 1,
  levelOfComedyProgress = 0,
  levelOfComicBook = 1,
  levelOfComicBookProgress = 0,  
  levelOfCriminal = 1,
  levelOfCriminalProgress = 0,
  levelOfFable = 1,
  levelOfFableProgress = 0,
  levelOfFantasy = 1,
  levelOfFantasyProgress = 0,
  levelOfHistorical = 1,
  levelOfHistoricalProgress = 0,  
  levelOfHorror = 1,
  levelOfHorrorProgress = 0,
  levelOfRomance = 1,
  levelOfRomanceProgress = 0,
  levelOfScienceFiction = 1,
  levelOfScienceFictionProgress = 0,  
    
  playerName,
    
  beautifulDescriptions = false,
  plotTwist = false,
  addictiveStoryline = false,
  excellentDialogs = false,
  reliableCharacters = false,
    
  fastWriting = false,
  favoriteOfThePublishers = false,
  selfPublishingSpecialist = false,
  personalBrandCourse = false,
  moneySavingCourse = false,
   
  bsIndex = 0,
  //dodać kod do zwiększania royaltiesPercent przez lvlOfFame 
  royaltiesPercent = 0.03, 
    
    
  monthlyRoyalties = [],
  dates = [],
  wholeAmount,
  dateOfPublish,
  allMonthlyRoyalties = 0,
    
  totalCostToPay,
  totalIncome,
    
  ratingRecord = 0,
  soldPiecesRecord = 0,
  monthlyRoyaltiesRecord = 0;







function changeDate() {
  //if game isn't paused
  if (!$(".pause").hasClass("gamePaused")) {
    //Increment day
    day++;
    //Remove previous day
    $(".day").empty();
    //Display acctual day

    //If day is digit
    if (day < 10) {
      //Concat day with "0" before
      $(".firstZero").css("display", "flex");
      //Display acctual day
      $(".day").append(day);
      //If day isn't digit
    } else {
      $(".firstZero").css("display", "none");
      $(".day").append(day);
    }

    if(day === 15){
      allMonthlyRoyalties = 0;
      
      //check the date
      var isItDateOfPublish = "" + month + (year - 1);
      
      for(var d = 0; d < dates.length; d++){
        if(dates[d] === isItDateOfPublish){
          var indexToDelete = d;
          
          dates.splice(indexToDelete, 1);
          monthlyRoyalties.splice(indexToDelete, 1);
        }
      }
      
      for(var x = 0; x < monthlyRoyalties.length; x++){
        allMonthlyRoyalties = allMonthlyRoyalties + monthlyRoyalties[x];
      }
      
      if(allMonthlyRoyalties > 0) {
        //I think it's not necessary
      $(".plusOrMinus").empty();
      $(".operations").empty();
  
      //Add plus and monthlyRoyalties (in number)
      $(".plusOrMinus").append("+$");
      $(".operations").append(allMonthlyRoyalties);
  
      //This is income, so display it green
      $(".plusOrMinus, .operations").css("color", "green");
  
      //Wait two seconds
      setTimeout(function(){
        //And remove green number
        $(".plusOrMinus").empty();
        $(".operations").empty();
    
      //Add monthlyRoyalties to accountBalance
      accountBalance = accountBalance + allMonthlyRoyalties;
      //And display new account balance
      $(".accountBalance").empty();
      $(".accountBalance").append(accountBalance);
      }, 2000) 
      }
      
    }
    
    if(day === 5){
      
      if(levelOfFameProgress >= 100){
        levelOfFame = levelOfFame + 1;
        levelOfFameProgress = 0;
      }
      
      if(levelOfAdventureProgress >= 100){
        levelOfAdventure = levelOfAdventure + 1;
        levelOfAdventureProgress = 0;
      }
      
      if(levelOfBasedOnTheGameProgress >= 100){
        levelOfBasedOnTheGame = levelOfBasedOnTheGame + 1;
        levelOfBasedOnTheGameProgress = 0;
      }
      
      if(levelOfBiographyProgress >= 100){
        levelOfBiography = levelOfBiography + 1;
        levelOfBiographyProgress = 0;
      }
      
      if(levelOfComedyProgress >= 100){
        levelOfComedy = levelOfComedy + 1;
        levelOfComedyProgress = 0;
      }
      
      if(levelOfComicBookProgress >= 100){
        levelOfComicBook = levelOfComicBook + 1;
        levelOfComicBookProgress = 0;
      }
      
      if(levelOfCriminalProgress >= 100){
        levelOfCriminal = levelOfCriminal + 1;
        levelOfCriminalProgress = 0;
      }
      
      if(levelOfFableProgress >= 100){
        levelOfFable = levelOfFable + 1;
        levelOfFableProgress = 0;
      }
      
      if(levelOfFantasyProgress >= 100){
        levelOfFantasy = levelOfFantasy + 1;
        levelOfFantasyProgress = 0;
      }
      
      if(levelOfHistoricalProgress >= 100){
        levelOfHistorical = levelOfHistorical + 1;
        levelOfHistoricalProgress = 0;
      }
      
      if(levelOfHorrorProgress >= 100){
        levelOfHorror = levelOfHorror + 1;
        levelOfHorrorProgress = 0;
      }
      
      if(levelOfRomanceProgress >= 100){
        levelOfRomance = levelOfRomance + 1;
        levelOfRomanceProgress = 0;
      }
      
      if(levelOfScienceFictionProgress >= 100){
        levelOfScienceFiction = levelOfScienceFiction + 1;
        levelOfScienceFictionProgress = 0;
      }
    }
    
    
    
    
    
    if (day === 30) {
      //Reset days counter
      day = 0;
      //Increment month but don't display yet
      month++;
      
      payBills()
    }


    if (day === 1) {
      //Remove previous month
      $(".month").empty();

      //If month is digit  
      if (month < 10) {
        $(".secondZero").css("display", "flex");
        //Display acctual month
        $(".month").append(month);
        //If month isn't digit
      } else {
        $(".secondZero").css("display", "none");
        $(".month").append(month);
      }
    }

    if (month === 12 && day === 3) {
      //Reset month
      month = 0;
      //Increment year but don't display yet
      year++;
    }

    //If today is 01.01
    if (day === 1) {
      //Remove previous year
      $(".year").empty();
      //Display acctual year
      $(".year").append(year);
    }


  }
} //end of function

//When player click at pause button
$(".pause").on("click", function () {
  //Toggle class ".gamePaused" at ".pause" button
  $(".pause").toggleClass("gamePaused");
  //Pause/unpause progress bar animation
  if($(".pause").hasClass("gamePaused")){
    $(".animationClass").css("animation-play-state", "paused");
  } else {
    $(".animationClass").css("animation-play-state", "running");
  }
  
  if($(".pause").hasClass("gamePaused")){
    $(".fourthNextButton").attr("disabled", true);
  } else {
    $(".fourthNextButton").attr("disabled", false);
  }
});


//Day interval  
setInterval(changeDate, 1000);







//OPENING/CLOSING .MENUSTART SECTION  

//Open/close .menuStart by clicking .start button  
$(".start").on("click", function () {
  $(".menuStart").toggleClass("visible");
});

//Close menuStart by clicking at window  
$(".window").on("click", function () {
  $(".menuStart").removeClass("visible");
});

//If you click anywhere at the screen (except .start button) .menuStart will disappear  
$(".screen").on("click", function (e) {
  var target = $(e.target);
  if (!target.hasClass("start")) {
    $(".menuStart").removeClass("visible");
  }
});

//THE END OF OPENING/CLOSING .MENUSTART SECTION 






//SECTION "OPENING/CLOSING WINDOWS"  

//Open empty window after click at menuOption
$(".menuOption").on("click", function () {
  $(".window").addClass("windowOpen");
});

//After click at .close button close .window  
$(".close").on("click", function closing() {
  $(".window").removeClass("windowOpen");
  //and remove all content from window
  points = 0;

  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".textEditorContent2").removeClass("textEditorContentVisible");
  $(".textEditorContent3").removeClass("textEditorContentVisible");
  $(".textEditorContent4").removeClass("textEditorContentVisible");
  $(".textEditorContent5").removeClass("textEditorContentVisible");
  $(".textEditorContent6").removeClass("textEditorContentVisible");
  $(".bar").css("background-color", "gray");
  $(".sendBook").attr("disabled", "true");
  $(".publishByYourself").attr("disabled", "true");
  $(".premiereContent").removeClass("premiereContentVisible");
  
  
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
});

//After click at .textEditor menuOption make content of text editor visible  
$(".textEditor").on("click", function () {
  $(".textEditorContent").addClass("textEditorContentVisible");
  //reset variables corelated with books
  points = 0;
  
  //remove old messages from inbox
  $(".receivedMessage, .decisionMessage").remove();

  //and remove all the content except fisrt stage of text editor
  $(".textEditorContent2").removeClass("textEditorContentVisible");
  $(".textEditorContent3").removeClass("textEditorContentVisible");
  $(".textEditorContent4").removeClass("textEditorContentVisible");
  $(".textEditorContent5").removeClass("textEditorContentVisible");
  $(".textEditorContent6").removeClass("textEditorContentVisible");
  $(".bar").css("background-color", "gray");
  $(".sendBook").attr("disabled", "true");
  $(".publishByYourself").attr("disabled", "true");
  
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

//After click at .mail menuOption make content of mail visible  
$(".mail").on("click", function () {
  $(".mailContent").addClass("mailContentVisible");
  
  
  
  //and remove all the content except mail
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

//After click at .bank menuOption make content of bank visible  
$(".bank").on("click", function () {
  $(".bankContent").addClass("bankContentVisible");

  //and remove all the content except bank
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

//After click at .shop menuOption make content of shop visible  
$(".shop").on("click", function () {
  $(".shopContent").addClass("shopContentVisible");

  //and remove all the content except shop
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

//After click at .stats menuOption make content of stats visible  
$(".stats").on("click", function () {
  $(".statsContent").addClass("statsContentVisible");

  //and remove all the content except stats
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

$(".writerStats").on("click", function(){
  $(".statsContent2").addClass("statsContentVisible");
  
  $(".statsContent").removeClass("statsContentVisible");
});

$(".publishingHouseStats").on("click", function(){
  $(".statsContent3").addClass("statsContentVisible");
  
  $(".statsContent").removeClass("statsContentVisible");
});

//After click at .settings menuOption make content of settings visible  
$(".settings").on("click", function () {
  $(".settingsContent").addClass("settingsContentVisible");

  //and remove all the content except settings
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

//After click at .help menuOption make content of help visible  
$(".help").on("click", function () {
  $(".helpContent").addClass("helpContentVisible");

  //and remove all the content except help
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".authorContent").removeClass("authorContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

//After click at .author menuOption make content of author visible  
$(".author").on("click", function () {
  $(".authorContent").addClass("authorContentVisible");

  //and remove all the content except author
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".mailContent").removeClass("mailContentVisible");
  $(".bankContent").removeClass("bankContentVisible");
  $(".shopContent").removeClass("shopContentVisible");
  $(".statsContent").removeClass("statsContentVisible");
  $(".statsContent2").removeClass("statsContentVisible");
  $(".statsContent3").removeClass("statsContentVisible");
  $(".settingsContent").removeClass("settingsContentVisible");
  $(".helpContent").removeClass("helpContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
});

//THE END OF THIS FUCKING "OPENING/CLOSING WINDOWS" SECTION 





//FUNCTION FOR FIRST STAGE OF BOOK WRITING
$(".firstNextButton").on("click", function () {

  
  //Save book title in var
  title = $(".bookTitle").val();



  //If choosed book genre is adventure
  if ($(".genre").val() == "adventure") {
    genre = "adventure";
    //and if the target is the best 
    if ($(".target").val() == "youth") {
      //add two points
      points = points + 2;
      //else if target is semi
    } else if ($(".target").val() == "everyone") {
      //add one point
      points = points + 1;
    }

  } else if ($(".genre").val() == "basedOnTheGame") {
    genre = "basedOnTheGame";
    if ($(".target").val() == "youth") {
      points = points + 2;
    } else if ($(".target").val() == "everyone") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "biography") {
    genre = "biography";
    if ($(".target").val() == "adults") {
      points = points + 2;
    } else if ($(".target").val() == "everyone") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "comedy") {
    genre = "comedy";
    if ($(".target").val() == "everyone") {
      points = points + 2;
    } else if ($(".target").val() == "youth" || $(".target").val() == "adults") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "comicBook") {
    genre = "comicBook";
    if ($(".target").val() == "youth") {
      points = points + 2;
    } else if ($(".target").val() == "everyone") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "criminal") {
    genre = "criminal";
    if ($(".target").val() == "everyone") {
      points = points + 2;
    } else if ($(".target").val() == "youth" || $(".target").val() == "adults") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "fable") {
    genre = "fable";
    if ($(".target").val() == "youth") {
      points = points + 2;
    } else if ($(".target").val() == "everyone") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "fantasy") {
    genre = "fantasy";
    if ($(".target").val() == "everyone") {
      points = points + 2;
    } else if ($(".target").val() == "youth" || $(".target").val() == "adults") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "historical") {
    genre = "historical";
    if ($(".target").val() == "adults") {
      points = points + 2;
    } else if ($(".target").val() == "everyone") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "horror") {
    genre = "horror";
    if ($(".target").val() == "adults") {
      points = points + 2;
    } else if ($(".target").val() == "everyone") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "romance") {
    genre = "romance";
    if ($(".target").val() == "adults") {
      points = points + 2;
    } else if ($(".target").val() == "everyone") {
      points = points + 1;
    }

  } else if ($(".genre").val() == "scienceFiction") {
    genre = "scienceFiction";
    if ($(".target").val() == "everyone") {
      points = points + 2;
    } else if ($(".target").val() == "youth" || $(".target").val() == "adults") {
      points = points + 1;
    }

  }

  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".textEditorContent2").addClass("textEditorContentVisible");

}); //The end of the firstNextButton function



//FUNCTION FOR SECOND STAGE OF BOOK WRITING
$(".secondNextButton").on("click", function () {
  var characterWorldVal = $(".characterWorld").val();
  var dialoguesStoryVal = $(".dialoguesStory").val();
  var humorTensionVal = $(".humorTension").val();

  if (genre == "adventure") {
    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 0;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 1;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 3;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 2;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 0;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 3;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 2;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 0;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 1;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 2;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 3;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 1;
    }

  } else if (genre == "basedOnTheGame") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 0;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 1;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 3;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 2;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 3;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 1;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 3;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 2;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 3;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 2;
    }

  } else if (genre == "biography") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 3;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 2;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 0;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 0;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 0;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 3;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 0;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 3;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 1;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 2;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "comedy") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 3;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 2;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 1;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 0;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 3;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 1;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 3;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 2;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 0;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 1;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "comicBook") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 2;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 2;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 3;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 2;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 1;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 3;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 3;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 3;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 0;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 1;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 2;
    }

  } else if (genre == "criminal") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 3;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 2;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 0;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 0;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 3;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 2;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 0;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 1;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 1;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 2;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 3;
    }

  } else if (genre == "fable") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 2;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 3;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 2;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 0;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 3;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 3;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 2;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 0;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 2;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 1;
    }

  } else if (genre == "fantasy") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 1;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 2;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 3;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 2;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 3;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 0;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 1;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 1;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 3;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 2;
    }

  } else if (genre == "historical") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 1;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 2;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 3;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 1;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 3;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 2;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 0;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 1;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 1;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 3;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 2;
    }

  } else if (genre == "horror") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 0;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 1;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 2;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 3;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 3;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 0;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 0;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 1;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 2;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 3;
    }

  } else if (genre == "romance") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 3;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 2;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 1;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 0;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 0;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 3;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 1;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 2;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 3;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 1;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 2;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 1;
    }

  } else if (genre == "scienceFiction") {

    if (characterWorldVal >= 0 && characterWorldVal < 20) {
      points = points + 0;
    } else if (characterWorldVal >= 20 && characterWorldVal < 40) {
      points = points + 1;
    } else if (characterWorldVal >= 40 && characterWorldVal < 60) {
      points = points + 2;
    } else if (characterWorldVal >= 60 && characterWorldVal < 80) {
      points = points + 3;
    } else if (characterWorldVal >= 80 && characterWorldVal <= 100) {
      points = points + 2;
    }

    if (dialoguesStoryVal >= 0 && dialoguesStoryVal < 20) {
      points = points + 0;
    } else if (dialoguesStoryVal >= 20 && dialoguesStoryVal < 40) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 40 && dialoguesStoryVal < 60) {
      points = points + 1;
    } else if (dialoguesStoryVal >= 60 && dialoguesStoryVal < 80) {
      points = points + 2;
    } else if (dialoguesStoryVal >= 80 && dialoguesStoryVal <= 100) {
      points = points + 3;
    }

    if (humorTensionVal >= 0 && humorTensionVal < 20) {
      points = points + 0;
    } else if (humorTensionVal >= 20 && humorTensionVal < 40) {
      points = points + 1;
    } else if (humorTensionVal >= 40 && humorTensionVal < 60) {
      points = points + 1;
    } else if (humorTensionVal >= 60 && humorTensionVal < 80) {
      points = points + 3;
    } else if (humorTensionVal >= 80 && humorTensionVal <= 100) {
      points = points + 2;
    }
  }


  //After counting points remove acctual window and show the next one
  $(".textEditorContent2").removeClass("textEditorContentVisible");
  $(".textEditorContent3").addClass("textEditorContentVisible");
}); //The end of secondNextButton function



//FUNCTION FOR THIRD STAGE OF BOOK WRITING
$(".thirdNextButton").on("click", function () {

  var singleMultiVal = $(".singleMulti").val();
  var fastFloweryVal = $(".fastFlowery").val();
  var affordableDemandingVal = $(".affordableDemanding").val();

  if (genre == "adventure") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 3;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 2;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 1;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 3;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 2;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 1;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 1;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 0;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 2;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 3;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 1;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 1;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "basedOnTheGame") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 2;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 3;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 2;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 2;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 3;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 1;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 1;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 0;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 1;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 3;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 2;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 2;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "biography") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 2;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 3;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 1;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 0;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 1;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 3;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 2;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 1;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 1;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 2;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 2;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 3;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 1;
    }

  } else if (genre == "comedy") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 3;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 2;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 2;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 3;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 2;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 1;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 1;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 0;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 2;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 3;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 1;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 2;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 2;
    }

  } else if (genre == "comicBook") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 3;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 2;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 1;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 3;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 2;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 1;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 0;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 0;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 2;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 3;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 2;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 0;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 1;
    }

  } else if (genre == "criminal") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 2;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 3;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 1;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 3;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 2;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 1;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 0;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 0;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 0;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 2;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 3;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 2;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "fable") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 3;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 2;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 0;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 2;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 3;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 2;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 1;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 0;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 3;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 2;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 1;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 0;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "fantasy") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 0;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 1;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 2;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 3;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 1;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 0;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 1;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 2;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 3;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 1;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 0;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 2;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 3;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 2;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "historical") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 0;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 1;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 2;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 3;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 2;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 0;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 1;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 2;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 3;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 1;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 0;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 1;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 1;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 3;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 1;
    }

  } else if (genre == "horror") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 3;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 2;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 0;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 2;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 3;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 2;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 1;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 0;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 0;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 3;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 2;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 1;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 0;
    }

  } else if (genre == "romance") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 3;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 2;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 1;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 1;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 0;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 0;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 1;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 2;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 2;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 3;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 1;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 2;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 1;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 3;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 1;
    }

  } else if (genre == "scienceFiction") {

    if (singleMultiVal >= 0 && singleMultiVal < 20) {
      points = points + 0;
    } else if (singleMultiVal >= 20 && singleMultiVal < 40) {
      points = points + 1;
    } else if (singleMultiVal >= 40 && singleMultiVal < 60) {
      points = points + 2;
    } else if (singleMultiVal >= 60 && singleMultiVal < 80) {
      points = points + 3;
    } else if (singleMultiVal >= 80 && singleMultiVal <= 100) {
      points = points + 2;
    }

    if (fastFloweryVal >= 0 && fastFloweryVal < 20) {
      points = points + 0;
    } else if (fastFloweryVal >= 20 && fastFloweryVal < 40) {
      points = points + 1;
    } else if (fastFloweryVal >= 40 && fastFloweryVal < 60) {
      points = points + 2;
    } else if (fastFloweryVal >= 60 && fastFloweryVal < 80) {
      points = points + 3;
    } else if (fastFloweryVal >= 80 && fastFloweryVal <= 100) {
      points = points + 1;
    }

    if (affordableDemandingVal >= 0 && affordableDemandingVal < 20) {
      points = points + 0;
    } else if (affordableDemandingVal >= 20 && affordableDemandingVal < 40) {
      points = points + 2;
    } else if (affordableDemandingVal >= 40 && affordableDemandingVal < 60) {
      points = points + 3;
    } else if (affordableDemandingVal >= 60 && affordableDemandingVal < 80) {
      points = points + 2;
    } else if (affordableDemandingVal >= 80 && affordableDemandingVal <= 100) {
      points = points + 0;
    }
  }

  //After counting points remove acctual window and show the next one
  $(".textEditorContent3").removeClass("textEditorContentVisible");
  $(".textEditorContent4").addClass("textEditorContentVisible");
  
  //dodać kod, który zrobi następny button (fourth) nieaktywnym, jeśli pauza jest włączona
  
}); //The end of thirdNextButton function



//FUNCTION FOR FOURTH STAGE OF BOOK WRITING (START WRITING)
$(".fourthNextButton").on("click", function(){
  
  //kod zliczający dodatkowe profity za special features
  
  //Hide previous window and show the next one
  $(".textEditorContent4").removeClass("textEditorContentVisible");
  $(".textEditorContent5").addClass("textEditorContentVisible");
  
  if(!fastWriting){
    //Add animation to progress bar
  $(".progress").addClass("animationClass"); 
  //When the animation is over 
  $(".progress").one("animationend", function(){
    //Change color of .bar 
    $(".bar").css("background-color", "lightgreen");
    //Unlock the .sendBook button
    $(".sendBook").removeAttr("disabled");
    if(fans >= 1000) {
      $(".publishByYourself").removeAttr("disabled");
    }
  });
  } else {
      //Add animation to progress bar
  $(".progress").addClass("animationFastWriting"); 
  //When the animation is over 
  $(".progress").one("animationend", function(){
    //Change color of .bar 
    $(".bar").css("background-color", "lightgreen");
    //Unlock the .sendBook button
    $(".sendBook").removeAttr("disabled");
    if(fans >= 1000) {
      $(".publishByYourself").removeAttr("disabled");
    }
  });
  }
  
  
}); //The end of fourthNextButton function


//Function to unlock the publishByYourself button
//$(".progress").one("animationend", function(){
//  
//});



//FUNCTION FOR FIVE STAGE OF BOOK WRITING (PUBLISHED YOURSELF) 
$(".publishByYourself").on("click", function(){
  //Hide previous window and show the next one
  $(".textEditorContent5").removeClass("textEditorContentVisible");
  $(".textEditorContent6").addClass("textEditorContentVisible");
});

//#backButton #changeMyMind
$(".changeMyMind").on("click", function(){
  //Show the previous window
  $(".textEditorContent6").removeClass("textEditorContentVisible");
  $(".textEditorContent5").addClass("textEditorContentVisible");
});

//#refreshButton
$(".refresh").on("click", function(){
  var materialsQuality = $(".materialsQuality").val();
  materialsQuality = materialsQuality * 1000;
  var coverDesign = $(".coverDesign").val();
  coverDesign = coverDesign * 150;
  var languageVersions = $(".languageVersions").val();
  languageVersions = languageVersions * 9000;
  var marketing = $(".marketing").val();
  marketing = marketing * 10000;
  
  var totalCost = materialsQuality + coverDesign + languageVersions + marketing;
  $(".totalCostVal").empty();
  $(".totalCostVal").append(totalCost);
  
  if(accountBalance > totalCost){
    $(".totalCostVal").css("color", "green");
  } else {
    $(".totalCostVal").css("color", "red");
  }
});


//FUNCTION TO NEGATIVE DECISION OF PUBLISHING HOUSE
function negativeDecision(){
  
  $(".textEditor").removeAttr("disabled");
  
  console.log("Przykro nam, nie wydamy Twojej książki.");
  //Add new messageBar in mail inbox
  $(".mailContent").prepend("<div class='messageBar decisionMessage'></div>");
  //Add content to added messageBar
  $(".decisionMessage:first-of-type").html("<span class='sender'>Publishing House</span><span class='topic'>Our decision</span><span class='dayOfReceived'><span class='zeroBeforeDayNDecision'>0</span>"+day+".</span><span class='monthOfReceived'><span class='zeroBeforeMonthNDecision'>0</span>"+month+".</span><span class='yearOfReceived'>"+year+"</span>")
  
  if(day > 10){
    $(".zeroBeforeDayNDecision").css("display", "none");
  }
  
  if(month > 10){
    $(".zeroBeforeMonthNDecision").css("display", "none");
  }
  
  //Show message from publisher and hide all of messageBar after click on messageBar from publisher 
  $(".decisionMessage").on("click", function(){
    $(".messageBar").addClass("invisible");
    $(".negativeDecision").addClass("show");
  });
  
  //If player read some mail in mean-time don't show the new message bar
  if( $(".letter").hasClass("show") ){
  $(".messageBar").addClass("invisible");
  }
}


//FUNCTION TO POSITIVE DECISION OF PUBLISHING HOUSE
function positiveDecision(){
  
  
  
  console.log("Uprzejmie informujemy, że z przyjemnością wydamy Twoją książkę!");
  
  //Add new messageBar in mail inbox
  $(".mailContent").prepend("<div class='messageBar decisionMessage'></div>");
  //Add content to added messageBar
  $(".decisionMessage:first-of-type").html("<span class='sender'>Publishing House</span><span class='topic'>Our decision</span><span class='dayOfReceived'><span class='zeroBeforeDayPDecision'>0</span>"+day+".</span><span class='monthOfReceived'><span class='zeroBeforeMonthPDecision'>0</span>"+month+".</span><span class='yearOfReceived'>"+year+"</span>")
  
  if(day > 10){
    $(".zeroBeforeDayPDecision").css("display", "none");
  }
  
  if(month > 10){
    $(".zeroBeforeMonthPDecision").css("display", "none");
  }
  
  //Show message from publisher and hide all of messageBar after click on messageBar from publisher 
  $(".decisionMessage").on("click", function(){
    $(".messageBar").addClass("invisible");
    $(".positiveDecision").addClass("show");
  });
  
  //If player read some mail in mean-time don't show the new message bar
  if( $(".letter").hasClass("show") ){
  $(".messageBar").addClass("invisible");
  }
}



//FUNCTION FOR ENDING OF WRITING AND SENDING MAIL FROM PUBLISHER
$(".sendBook").on("click", function(){
  
  //Disabled textEditor menuOption
  $(".textEditor").attr("disabled", "true");
  
  //Reset final window  
  $(".bar").css("background-color", "gray");
  $(".sendBook").attr("disabled", "true");
  
  //Close everything
  $(".textEditorContent").removeClass("textEditorContentVisible");
  $(".textEditorContent2").removeClass("textEditorContentVisible");
  $(".textEditorContent3").removeClass("textEditorContentVisible");
  $(".textEditorContent4").removeClass("textEditorContentVisible");
  $(".textEditorContent5").removeClass("textEditorContentVisible");
  $(".window").removeClass("windowOpen");
  
  //Add new messageBar in mail inbox
  $(".mailContent").prepend("<div class='messageBar receivedMessage'></div>");
  //Add content to added messageBar
  $(".receivedMessage:first-of-type").html("<span class='sender'>Publishing House</span><span class='topic'>a manuscript was received</span><span class='dayOfReceived'><span class='zeroBeforeDayReceived'>0</span>"+day+".</span><span class='monthOfReceived'><span class='zeroBeforeMonthReceived'>0</span>"+month+".</span><span class='yearOfReceived'>"+year+"</span>")
    
  if(day > 10){
    $(".zeroBeforeDayReceived").css("display", "none");
  }
  
  if(month > 10){
    $(".zeroBeforeMonthReceived").css("display", "none");
  }
  
  //Show message from publisher and hide all of messageBar after click on messageBar from publisher 
  $(".receivedMessage").on("click", function(){
    $(".messageBar").addClass("invisible");
    $(".receivedBook").addClass("show");
  });
  
  //If player read some mail in mean-time don't show the new message bar
  if( $(".letter").hasClass("show") ){
  $(".messageBar").addClass("invisible");
  }
  
  //Function do send mail with decision of Publishing House
  function decision(){
    //get random number 0-100
    var randomNumber = Math.random() * 100;
    randomNumber = Math.round(randomNumber);
    
    //if book is gniot
    if(points <= 4){
      if(randomNumber <= 15){
        //wydaj
        positiveDecision();
      } else {
          //nie wydawaj
          negativeDecision();
      }
    } else if(points > 4 && points <= 8) {
        if(randomNumber <= 35) {
          //wydaj
          positiveDecision();
        } else {
            //nie wydawaj
            negativeDecision();
        }
    } else if(points > 8 && points <= 12) {
        if(randomNumber <= 50) {
          //wydaj
          positiveDecision();
      } else {
          //nie wydawaj
          negativeDecision();
      }
    } else if(points > 12 && points <= 16) {
        if(randomNumber <= 75) {
          //wydaj
          positiveDecision();
        } else {
            //nie wydawaj
            negativeDecision();
        }
    } else if(points > 16 && points <= 18) {
        if(randomNumber <= 85){
          //wydaj
          positiveDecision();
        } else {
            //nie wydawaj
            negativeDecision();
        }
    } else if(points > 18 && points <= 20) {
        if(randomNumber <= 90){
          //wydaj
          positiveDecision();
        } else {
            //nie wydawaj
            negativeDecision();
        }
    }
  } //the end of decision function
  
  setTimeout(decision, 10000);
});  
  

//Back button
$(".backToInbox").on("click", function(){
  $(".letter").removeClass("show");
  $(".messageBar").removeClass("invisible");
  //Show all of the message bars.
  $(".messageBar").removeClass("invisible");
});





//FUNCTION TO MAKE RANDOM GENRE POPULAR
function popularGenre(){
  var genresList = ["adventure", "basedOnTheGame", "biography", "comedy", "comicBook", "criminal", "fable", "fantasy", "historical", "horror", "romance", "scienceFiction"]
  
  var randomIndexOfGenresList = Math.random() * 11;
  randomIndexOfGenresList = Math.round(randomIndexOfGenresList);
  
  popular = genresList[randomIndexOfGenresList];
  
  $(".whatIsPopular").empty();
  $(".whatIsPopular").append(popular);
}

//TUTAJ ustawić po przecinku dayInterval x 30
//setInterval(popularGenre, )
$(".socket").on("click", popularGenre);



//FUNCTION TO PAY MONTHLY COSTS
function payBills() {
  //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and monthly cost (in number)
  $(".plusOrMinus").append("-$");
  $(".operations").append(monthlyCosts);
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract monthly costs from account
    accountBalance = accountBalance - monthlyCosts;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
}


//FUNCTION TO RATE BOOK-SELLING-INDEX (PUBLISHING WITH PUBLISHER) 
function bookSellingIndex(){
  
  
  
  //jak dobra jest książka?
  //czy gatunek jest aktualnie popularny?
  //liczba fanów
  //poziom umiejętności w danym gatunku literackim
  //czy użyto special skills?
  
  //odejmij 50% jeśli to ten sam gatunek drugi raz z rzędu
  
  //adventure
  if(genre == "adventure"){
    bsIndex = 0;
    bsIndex = bsIndex + (points * 1000 * levelOfFame);
    //If adventure is popular now
    if(popular == "adventure"){
      bsIndex = bsIndex + bsIndex * 0.1;
    }
    //Add fans
    bsIndex = bsIndex + fans;
    
    //Tutaj kod, który dodaje pkt za special skills
    if(beautifulDescriptions){
      bsIndex = bsIndex + bsIndex * 0.1;
    }
    
    if(plotTwist){
      bsIndex = bsIndex + bsIndex * 0.1;
    }
    
    if(addictiveStoryline){
      bsIndex = bsIndex + bsIndex * 0.1;
    }
    
    if(excellentDialogs){
      bsIndex = bsIndex + bsIndex * 0.1;
    }
    
    if(reliableCharacters){
      bsIndex = bsIndex + bsIndex * 0.1;
    }
    //Add profits for level of specialization in genre
    if(levelOfAdventure == 2){
      bsIndex = bsIndex + bsIndex * 0.05;
    } else if (levelOfAdventure == 3){
        bsIndex = bsIndex + bsIndex * 0.1;
    } else if (levelOfAdventure == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
    } else if (levelOfAdventure == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
    } else if (levelOfAdventure == 6){
        bsIndex = bsIndex + bsIndex * 0.25
    } else if (levelOfAdventure == 7){
        bsIndex = bsIndex + bsIndex * 0.3
    } else if (levelOfAdventure == 8){
        bsIndex = bsIndex + bsIndex * 0.35
    } else if (levelOfAdventure == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
    } else if (levelOfAdventure == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
    }
    
    if(genre == previousGenre){
      bsIndex = bsIndex * 0.5;
    }
    
    previousGenre = "adventure";
    console.log(bsIndex);
    //end of adventure
    
    //basedOnTheGame
  } else if (genre == "basedOnTheGame"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If adventure is popular now
      if(popular == "basedOnTheGame"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfBasedOnTheGame == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfBasedOnTheGame == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfBasedOnTheGame == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfBasedOnTheGame == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfBasedOnTheGame == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfBasedOnTheGame == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfBasedOnTheGame == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfBasedOnTheGame == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfBasedOnTheGame == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "basedOnTheGame";
      console.log(bsIndex);           
  } //end of basedOnTheGame
  
  
  else if (genre == "biography"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If adventure is popular now
      if(popular == "biography"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfBiography == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfBiography == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfBiography == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfBiography == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfBiography == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfBiography == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfBiography == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfBiography == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfBiography == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "biography";
      console.log(bsIndex);           
  } //end of biography
  
  
  else if (genre == "comedy"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If comedy is popular now
      if(popular == "comedy"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfComedy == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfComedy == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfComedy == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfComedy == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfComedy == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfComedy == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfComedy == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfComedy == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfComedy == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "comedy";
      console.log(bsIndex);           
  } //end of comedy
  
  else if (genre == "comicBook"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If comedy is popular now
      if(popular == "comicBook"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfComicBook == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfComicBook == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfComicBook == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfComicBook == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfComicBook == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfComicBook == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfComicBook == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfComicBook == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfComicBook == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "comicBook";
      console.log(bsIndex);           
  } //end of comicBook
  
  else if (genre == "criminal"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If criminal is popular now
      if(popular == "criminal"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfCriminal == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfCriminal == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfCriminal == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfCriminal == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfCriminal == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfCriminal == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfCriminal == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfCriminal == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfCriminal == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "criminal";
      console.log(bsIndex);           
  } //end of criminal
  
  else if (genre == "fable"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If fable is popular now
      if(popular == "fable"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfFable == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfFable == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfFable == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfFable == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfFable == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfFable == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfFable == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfFable == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfFable == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "fable";
      console.log(bsIndex);           
  } //end of fable
  
  else if (genre == "fantasy"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If fantasy is popular now
      if(popular == "fantasy"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfFantasy == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfFantasy == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfFantasy == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfFantasy == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfFantasy == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfFantasy == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfFantasy == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfFantasy == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfFantasy == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "fantasy";
      console.log(bsIndex);           
  } //end of fantasy
  
  else if (genre == "historical"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If historical is popular now
      if(popular == "historical"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfHistorical == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfHistorical == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfHistorical == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfHistorical == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfHistorical == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfHistorical == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfHistorical == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfHistorical == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfHistorical == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "historical";
      console.log(bsIndex);           
  } //end of historical
  
  else if (genre == "horror"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If horror is popular now
      if(popular == "horror"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfHorror == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfHorror == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfHorror == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfHorror == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfHorror == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfHorror == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfHorror == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfHorror == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfHorror == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "horror";
      console.log(bsIndex);           
  } //end of horror
  
   else if (genre == "romance"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If romance is popular now
      if(popular == "romance"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfRomance == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfRomance == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfRomance == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfRomance == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfRomance == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfRomance == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfRomance == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfRomance == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfRomance == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre == previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "romance";
      console.log(bsIndex);           
  } //end of romance
  
   else if (genre == "scienceFiction"){
      bsIndex = 0;
      bsIndex = bsIndex + (points * 1000 * levelOfFame);
      //If scienceFiction is popular now
      if(popular == "scienceFiction"){
          bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add fans
      bsIndex = bsIndex + fans;
    
      //Tutaj kod, który dodaje pkt za special skills
      if(beautifulDescriptions){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(plotTwist){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(addictiveStoryline){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(excellentDialogs){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
    
      if(reliableCharacters){
        bsIndex = bsIndex + bsIndex * 0.1;
      }
      //Add profits for level of specialization in genre
      if(levelOfScienceFiction == 2){
        bsIndex = bsIndex + bsIndex * 0.05;
      } else if (levelOfScienceFiction == 3){
          bsIndex = bsIndex + bsIndex * 0.1;
      } else if (levelOfScienceFiction == 4){
        bsIndex = bsIndex + bsIndex * 0.15;
      } else if (levelOfScienceFiction == 5){
        bsIndex = bsIndex + bsIndex * 0.2;
      } else if (levelOfScienceFiction == 6){
        bsIndex = bsIndex + bsIndex * 0.25
      } else if (levelOfScienceFiction == 7){
        bsIndex = bsIndex + bsIndex * 0.3
      } else if (levelOfScienceFiction == 8){
        bsIndex = bsIndex + bsIndex * 0.35
      } else if (levelOfScienceFiction == 9) {
        bsIndex = bsIndex + bsIndex * 0.4
      } else if (levelOfScienceFiction == 10) {
        bsIndex = bsIndex + bsIndex * 0.5
      }
    
      if(genre === previousGenre){
        bsIndex = bsIndex - bsIndex * 0.5;
      }
    
      previousGenre = "scienceFiction";
      console.log(bsIndex);           
  } //end of scienceFiction
  bsIndex = Math.round(bsIndex);
}//the end of bookSellingIndex function

//FUNCTION TO START SELLING BOOK WITH PUBLISHER
$(".sign").on("click", function(){
  $(".textEditor").removeAttr("disabled");
  
  $(".ratingHeader, .rating").removeClass("showingContent");
  $(".salesHeader, .soldPieces").removeClass("showingContent");
  $(".royaltiesHeader, .monthlyRoyalties").removeClass("showingContent");
  
  $(".monthlyRoyaltiesRecord").removeClass("showingContent");
  $(".soldPiecesRecord").removeClass("showingContent");
  $(".ratingRecord").removeClass("showingContent");
  
  bookSellingIndex();
  
  wholeAmount = 0;
  wholeAmount = bsIndex * 20;
  wholeAmount = wholeAmount * royaltiesPercent;
  wholeAmount = wholeAmount / 12;
  wholeAmount = Math.round(wholeAmount);
  console.log(wholeAmount);
  
  monthlyRoyalties.push(wholeAmount);
  
  dateOfPublish = "" + month + year;
  
  dates.push(dateOfPublish);
  console.log(dateOfPublish);
  
  if(!personalBrandCourse){
    levelOfFameProgress = levelOfFameProgress + points; 
  } else{
    levelOfFameProgress = levelOfFameProgress + (points + points * 0.25);
  }
  
  
  fans = fans + (bsIndex * 0.05);
  
  if(genre === "adventure"){
    levelOfAdventureProgress = levelOfAdventureProgress + points;
  }
  
  if(genre === "basedOnTheGame"){
    levelOfBasedOnTheGameProgress = levelOfBasedOnTheGameProgress + points;
  }
  
  if(genre === "biography"){
    levelOfBiographyProgress = levelOfBiographyProgress + points;
  }
  
  if(genre === "comedy"){
    levelOfComedyProgress = levelOfComedyProgress + points;
  }
  
  if(genre === "comicBook"){
    levelOfComicBookProgress = levelOfComicBookProgress + points;
  }
  
  if(genre === "criminal"){
    levelOfCriminalProgress = levelOfCriminalProgress + points;
  }
  
  if(genre === "fable"){
    levelOfFableProgress = levelOfFableProgress + points;
  }
  
  if(genre === "fantasy"){
    levelOfFantasyProgress = levelOfFantasyProgress + points;
  }
  
  if(genre === "historical"){
    levelOfHistoricalProgress = levelOfHistoricalProgress + points;
  }
  
  if(genre === "horror"){
    levelOfHorrorProgress = levelOfHorrorProgress + points;
  }
  
  if(genre === "romance"){
    levelOfRomanceProgress = levelOfRomanceProgress + points;
  }
  
  if(genre === "scienceFiction"){
    levelOfScienceFictionProgress = levelOfScienceFictionProgress + points;
  }
  
  
  //#PREMIERE WINDOW
  
  $(".receivedMessage, .decisionMessage").remove();
  //$(".window").removeClass("windowOpen");
  $(".mailContent").removeClass("mailContentVisible");
  $(".letter").removeClass("show");
  
  $(".premiereContent").addClass("premiereContentVisible");
  
  
  
  function showRating(){
    $(".ratingHeader, .rating").addClass("showingContent");
    $(".rating").empty();
    $(".rating").append(points / 2);
    
    if((points / 2) > ratingRecord){
      ratingRecord = points / 2;
      $(".ratingRecord").addClass("showingContent");
    }
      
  }
  
  function showSales(){
    $(".salesHeader, .soldPieces").addClass("showingContent");
    $(".soldPieces").empty();
    $(".soldPieces").append(bsIndex);
    
    if(bsIndex > soldPiecesRecord){
      soldPiecesRecord = bsIndex;
      $(".soldPiecesRecord").addClass("showingContent");
    }
    
  }
  
  function showRoyalties(){
    $(".royaltiesHeader, .monthlyRoyalties").addClass("showingContent");
    $(".cashHere").empty();
    $(".cashHere").append(wholeAmount);
    
    if(wholeAmount > monthlyRoyaltiesRecord){
      monthlyRoyaltiesRecord = wholeAmount;
      $(".monthlyRoyaltiesRecord").addClass("showingContent");
    }
    
  }
  
  setTimeout(showRating, 1500);
  setTimeout(showSales, 4500);
  setTimeout(showRoyalties, 7500);
  
  
  
});


//FUNCTION TO PUBLISH BOOK #SELF-PUBLISHING
$(".payPublish").on("click", function(){
  
  totalCostToPay = 0;
  
  var materialsQuality1 = $(".materialsQuality").val();
  materialsQuality1 = materialsQuality1 * 1000;
  var coverDesign1 = $(".coverDesign").val();
  coverDesign1 = coverDesign1 * 150;
  var languageVersions1 = $(".languageVersions").val();
  languageVersions1 = languageVersions1 * 9000;
  var marketing1 = $(".marketing").val();
  marketing1 = marketing1 * 10000;
  
  totalCostToPay = materialsQuality1 + coverDesign1 + languageVersions1 + marketing1;
  
   //I think it's not necessary
   $(".plusOrMinus").empty();
   $(".operations").empty();
  
   //Add minus and monthlyRoyalties (in number)
   $(".plusOrMinus").append("-$");
   $(".operations").append(totalCostToPay);
  
   //This is cost, so display it red
   $(".plusOrMinus, .operations").css("color", "red");
  
   //Wait two seconds
   setTimeout(function(){
     //And remove green number
     $(".plusOrMinus").empty();
     $(".operations").empty();
    
     //Add monthlyRoyalties to accountBalance
     if(!selfPublishingSpecialist){
       accountBalance = accountBalance - totalCostToPay;
     } else {
       accountBalance = accountBalance - (totalCostToPay - 0.10 * totalCostToPay);
     }
     
     //And display new account balance
     $(".accountBalance").empty();
     $(".accountBalance").append(accountBalance);
   }, 2000) 
  
  if(points === 0){
    totalIncome = totalCostToPay * 0.25;
  }
  
  if(points === 1){
    totalIncome = totalCostToPay * 0.30;
  }
  
  if(points === 2){
    totalIncome = totalCostToPay * 0.35;
  }
  
  if(points === 3){
    totalIncome = totalCostToPay * 0.40;
  }
  
  if(points === 4){
    totalIncome = totalCostToPay * 0.45;
  }
  
  if(points === 5){
    totalIncome = totalCostToPay * 0.50;
  }
  
  if(points === 6){
    totalIncome = totalCostToPay * 0.60;
  }
  
  if(points === 7){
    totalIncome = totalCostToPay * 0.70;
  }
  
  if(points === 8){
    totalIncome = totalCostToPay * 0.80;
  }
  
  if(points === 9){
    totalIncome = totalCostToPay * 0.90;
  }
  
  if(points === 10){
    totalIncome = totalCostToPay * 1;
  }
  
  if(points === 11){
    totalIncome = totalCostToPay * 1.10;
  }
  
  if(points === 12){
    totalIncome = totalCostToPay * 1.20;
  }
  
  if(points === 13){
    totalIncome = totalCostToPay * 1.30;
  }
  
  if(points === 14){
    totalIncome = totalCostToPay * 1.40;
  }
  
  if(points === 15){
    totalIncome = totalCostToPay * 1.50;
  }
  
  if(points === 16){
    totalIncome = totalCostToPay * 2;
  }
  
  if(points === 17){
    totalIncome = totalCostToPay * 2.25;
  }
  
  if(points === 18){
    totalIncome = totalCostToPay * 3;
  }
  
  if(points === 19){
    totalIncome = totalCostToPay * 3.5;
  }
  
  if(points === 20){
    totalIncome = totalCostToPay * 4;
  }
  
  
  wholeAmount = 0;
  wholeAmount = totalIncome / 12;
  wholeAmount = Math.round(wholeAmount);
  console.log(wholeAmount);
  
  monthlyRoyalties.push(wholeAmount);
  
  dateOfPublish = "" + month + year;
  
  dates.push(dateOfPublish);
  console.log(dateOfPublish);
  
  levelOfFameProgress = levelOfFameProgress + points;
  
  if(genre === "adventure"){
    levelOfAdventureProgress = levelOfAdventureProgress + points;
  }
  
  if(genre === "basedOnTheGame"){
    levelOfBasedOnTheGameProgress = levelOfBasedOnTheGameProgress + points;
  }
  
  if(genre === "biography"){
    levelOfBiographyProgress = levelOfBiographyProgress + points;
  }
  
  if(genre === "comedy"){
    levelOfComedyProgress = levelOfComedyProgress + points;
  }
  
  if(genre === "comicBook"){
    levelOfComicBookProgress = levelOfComicBookProgress + points;
  }
  
  if(genre === "criminal"){
    levelOfCriminalProgress = levelOfCriminalProgress + points;
  }
  
  if(genre === "fable"){
    levelOfFableProgress = levelOfFableProgress + points;
  }
  
  if(genre === "fantasy"){
    levelOfFantasyProgress = levelOfFantasyProgress + points;
  }
  
  if(genre === "historical"){
    levelOfHistoricalProgress = levelOfHistoricalProgress + points;
  }
  
  if(genre === "horror"){
    levelOfHorrorProgress = levelOfHorrorProgress + points;
  }
  
  if(genre === "romance"){
    levelOfRomanceProgress = levelOfRomanceProgress + points;
  }
  
  if(genre === "scienceFiction"){
    levelOfScienceFictionProgress = levelOfScienceFictionProgress + points;
  }
  
});







//FUNCTIONS TO SHOWING/CLOSING SHOP CONTENT
$(".courses").on("click", function(){
  $(".shopContent").removeClass("shopContentVisible");
  $(".coursesContent").addClass("shopContentVisible");
});

$(".wallpapers").on("click", function(){
  $(".shopContent").removeClass("shopContentVisible");
  $(".wallpapersContent").addClass("shopContentVisible");
});

$(".backToCategories").on("click", function(){
  $(".wallpapersContent").removeClass("shopContentVisible");
  $(".coursesContent").removeClass("shopContentVisible");
  
  $(".shopContent").addClass("shopContentVisible");
});



$(".buyCourse1").on("click", function(){
  if(accountBalance > 50000){
     //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("50'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 50000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse1").css("border", "0.5px solid lightgreen");
  $(".buyCourse1").css("background-color", "#000");
  $(".buyCourse1").empty();
  $(".buyCourse1").append("<p>SOLD<p>")
  $(".buyCourse1 p").css("color", "lightgreen");
  $(".buyCourse1").attr("disabled", "true");
  $(".buyCourse1").css("cursor", "default");
  
  beautifulDescriptions = true;
  
  //Show bought skill in writing process
  $(".skill2").removeClass("no-visible");  
  }
 
});

$(".buyCourse2").on("click", function(){
  if(accountBalance > 75000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("75'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 75000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse2").css("border", "0.5px solid lightgreen");
  $(".buyCourse2").css("background-color", "#000");
  $(".buyCourse2").empty();
  $(".buyCourse2").append("<p>SOLD<p>")
  $(".buyCourse2 p").css("color", "lightgreen");
  $(".buyCourse2").attr("disabled", "true");
  $(".buyCourse2").css("cursor", "default");
  
  plotTwist = true;
    
  //Show bought skill in writing process
  $(".skill3").removeClass("no-visible");
  }
  
});

$(".buyCourse3").on("click", function(){
  if(accountBalance > 100000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("100'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 100000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse3").css("border", "0.5px solid lightgreen");
  $(".buyCourse3").css("background-color", "#000");
  $(".buyCourse3").empty();
  $(".buyCourse3").append("<p>SOLD<p>")
  $(".buyCourse3 p").css("color", "lightgreen");
  $(".buyCourse3").attr("disabled", "true");
  $(".buyCourse3").css("cursor", "default");
  
  addictiveStoryline = true;
  
  //Show bought skill in writing process
  $(".skill4").removeClass("no-visible");  
  }
  
});

$(".buyCourse4").on("click", function(){
  if(accountBalance > 125000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("125'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 125000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse4").css("border", "0.5px solid lightgreen");
  $(".buyCourse4").css("background-color", "#000");
  $(".buyCourse4").empty();
  $(".buyCourse4").append("<p>SOLD<p>")
  $(".buyCourse4 p").css("color", "lightgreen");
  $(".buyCourse4").attr("disabled", "true");
  $(".buyCourse4").css("cursor", "default");
  
  excellentDialogs = true;
    
  //Show bought skill in writing process
  $(".skill5").removeClass("no-visible");  
  }
  
});

$(".buyCourse5").on("click", function(){
  if(accountBalance > 150000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("150'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 150000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse5").css("border", "0.5px solid lightgreen");
  $(".buyCourse5").css("background-color", "#000");
  $(".buyCourse5").empty();
  $(".buyCourse5").append("<p>SOLD<p>")
  $(".buyCourse5 p").css("color", "lightgreen");
  $(".buyCourse5").attr("disabled", "true");
  $(".buyCourse5").css("cursor", "default");
  
  reliableCharacters = true;
    
  //Show bought skill in writing process
  $(".skill6").removeClass("no-visible");  
  }
  
});


$(".buyCourse6").on("click", function(){
  if(accountBalance > 50000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("50'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 50000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse6").css("border", "0.5px solid lightgreen");
  $(".buyCourse6").css("background-color", "#000");
  $(".buyCourse6").empty();
  $(".buyCourse6").append("<p>SOLD<p>")
  $(".buyCourse6 p").css("color", "lightgreen");
  $(".buyCourse6").attr("disabled", "true");
  $(".buyCourse6").css("cursor", "default");
  
  fastWriting = true;
  
  //Show bought skill in writing process
  $(".skill1").removeClass("no-visible");  
  }
  
});

$(".buyCourse7").on("click", function(){
  if(accountBalance > 75000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("75'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 75000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse7").css("border", "0.5px solid lightgreen");
  $(".buyCourse7").css("background-color", "#000");
  $(".buyCourse7").empty();
  $(".buyCourse7").append("<p>SOLD<p>")
  $(".buyCourse7 p").css("color", "lightgreen");
  $(".buyCourse7").attr("disabled", "true");
  $(".buyCourse7").css("cursor", "default");
  
  moneySavingCourse = true;
  }
  
});

$(".buyCourse8").on("click", function(){
  if(accountBalance > 150000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("150'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 150000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse8").css("border", "0.5px solid lightgreen");
  $(".buyCourse8").css("background-color", "#000");
  $(".buyCourse8").empty();
  $(".buyCourse8").append("<p>SOLD<p>")
  $(".buyCourse8 p").css("color", "lightgreen");
  $(".buyCourse8").attr("disabled", "true");
  $(".buyCourse8").css("cursor", "default");
  
  personalBrandCourse = true;
  }
  
});

$(".buyCourse9").on("click", function(){
  if(accountBalance > 500000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("500'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 500000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse9").css("border", "0.5px solid lightgreen");
  $(".buyCourse9").css("background-color", "#000");
  $(".buyCourse9").empty();
  $(".buyCourse9").append("<p>SOLD<p>")
  $(".buyCourse9 p").css("color", "lightgreen");
  $(".buyCourse9").attr("disabled", "true");
  $(".buyCourse9").css("cursor", "default");
  
  favoriteOfThePublishers = true;
  royaltiesPercent = royaltiesPercent + 0.03;
    
  //Show bought skill in writing process
  $(".skill7").removeClass("no-visible");  
  }
  
});

$(".buyCourse10").on("click", function(){
  if(accountBalance > 1000000){
    //I think it's not necessary
  $(".plusOrMinus").empty();
  $(".operations").empty();
  
  //Add minus and cost of course
  $(".plusOrMinus").append("-$");
  $(".operations").append("1'000'000");
  
  //This is cost, so display it red
  $(".plusOrMinus, .operations").css("color", "red");
  
  //Wait three seconds
  setTimeout(function(){
    //And remove red number
    $(".plusOrMinus").empty();
    $(".operations").empty();
    
    //Substract course price from account
    accountBalance = accountBalance - 1000000;
    //And display new account balance
    $(".accountBalance").empty();
    $(".accountBalance").append(accountBalance);
  }, 2000) 
  
  $(".buyCourse10").css("border", "0.5px solid lightgreen");
  $(".buyCourse10").css("background-color", "#000");
  $(".buyCourse10").empty();
  $(".buyCourse10").append("<p>SOLD<p>")
  $(".buyCourse10 p").css("color", "lightgreen");
  $(".buyCourse10").attr("disabled", "true");
  $(".buyCourse10").css("cursor", "default");
  
  selfPublishingSpecialist = true;
    
  //Show bought skill in writing process
  $(".skill8").removeClass("no-visible");  
  }
  
});














$(".handle").on("click", function(){
  var url = window.location.href; 
});






//Po założeniu wydawanictwa
$(".handle").on("click", function(){
  $(".textEditor").remove();
  $(".menuStart").prepend("<button class='menuOption company firstOption'><p>name of company</p><i class='material-icons'>work</i></button>");
});







//PONIŻSZY SYSTEM ZAPISU DZIAŁA. PAMIĘTAĆ O KONWERSJI ZE STRINGA NA NUMBER, BO LOCAL STORAGE WSZYSTKO CO PRZECHOWUJE ZAMIENIA NA STRING

//save
//$(".socket").on("click", function () {
  
  //localStorage.setItem("savedTitle", $(".bookTitle").val());
  
//});


//wczytaj
//$(".handle").on("click", function(){
  
  //var test = localStorage.getItem("savedTitle"); 
  //$(".bookTitle").val(test);

//});














