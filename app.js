//$(document).ready(function () {})

  var day = 0;
  var month = 1;
  var year = 2018;
  var zero = "0";
  var paused = false;

  var points = 0;
  
  var accountBalance = 25000;


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


      if (day == 1) {
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
      if (day == 1) {
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
  });
  //Day interval  
  setInterval(changeDate, 500);




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
    if (target.hasClass("start")) {} else {
      $(".menuStart").removeClass("visible");
    }
  });

  //THE END OF OPENING/CLOSING .MENUSTART SECTION  




  //SECTION "OPENING/CLOSING WINDOWS"  

  //Open empty window after click at menuOption
  $(".menuOption").on("click", function () {
    $(".window")
    $(".window").addClass("windowOpen");
  });

  //After click at .close button close .window  
  $(".close").on("click", function () {
    $(".window").removeClass("windowOpen");
    //and remove all content from window
    points = 0;
    
    $(".textEditorContent").removeClass("textEditorContentVisible");
    $(".textEditorContent2").removeClass("textEditorContentVisible");
    $(".textEditorContent3").removeClass("textEditorContentVisible");


    $(".mailContent").removeClass("mailContentVisible");
    $(".bankContent").removeClass("bankContentVisible");
    $(".shopContent").removeClass("shopContentVisible");
    $(".statsContent").removeClass("statsContentVisible");
    $(".settingsContent").removeClass("settingsContentVisible");
    $(".helpContent").removeClass("helpContentVisible");
    $(".authorContent").removeClass("authorContentVisible");
  });

  //After click at .textEditor menuOption make content of text editor visible  
  $(".textEditor").on("click", function () {
    $(".textEditorContent").addClass("textEditorContentVisible");
    
    //Reset variables corelated with book writing
    
    
    //and remove all the content except fisrt stage of text editor
    $(".textEditorContent2").removeClass("textEditorContentVisible");
    $(".textEditorContent3").removeClass("textEditorContentVisible");
    $(".mailContent").removeClass("mailContentVisible");
    $(".bankContent").removeClass("bankContentVisible");
    $(".shopContent").removeClass("shopContentVisible");
    $(".statsContent").removeClass("statsContentVisible");
    $(".settingsContent").removeClass("settingsContentVisible");
    $(".helpContent").removeClass("helpContentVisible");
    $(".authorContent").removeClass("authorContentVisible");
    
  });

  //After click at .mail menuOption make content of mail visible  
  $(".mail").on("click", function () {
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
  $(".bank").on("click", function () {
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
  $(".shop").on("click", function () {
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
  $(".stats").on("click", function () {
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
    $(".settingsContent").removeClass("settingsContentVisible");
    $(".authorContent").removeClass("authorContentVisible");
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
    $(".settingsContent").removeClass("settingsContentVisible");
    $(".helpContent").removeClass("helpContentVisible");
  });

  //THE END OF THIS FUCKING "OPENING/CLOSING WINDOWS" SECTION  




  //SECTION OF BOOK WRITING  

  $(".firstNextButton").on("click", function () {
    //Points = 0

    var genre;   
    //Save book title in var
    var title = $(".bookTitle").val();

    

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

    //console.log(points);
    //console.log(genre);

    $(".textEditorContent").removeClass("textEditorContentVisible");
    $(".textEditorContent2").addClass("textEditorContentVisible");

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

        //console.log(points);

      }); //End of the thirdNextButton function 









      //console.log(points);





    }); //End of the secondNextButton function



  }); //End of the firstNextButton function

  //THE END OF BOOK WRITING SECTION  

  $(".socket").on("click", function () {
    console.log(points);
  });





//}); //End of ready function