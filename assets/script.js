$(document).ready(function () {
    //show current day and time
   $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // save button click event: when button is clicked, description saves
    $(".saveBtn").on("click", function(){
        
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // set items to local storage
        localStorage.setItem(time, description);
    })
    
    // save/load descriptions of time blocks on local storage to stay even after refreshing page
    $("#9am .description").val(localStorage.getItem("9AM"));
    $("#10am .description").val(localStorage.getItem("10AM"));
    $("#11am .description").val(localStorage.getItem("11AM"));
    $("#12pm .description").val(localStorage.getItem("12PM"));
    $("#1pm .description").val(localStorage.getItem("1PM"));
    $("#2pm .description").val(localStorage.getItem("2PM"));
    $("#3pm .description").val(localStorage.getItem("3PM"));
    $("#4pm .description").val(localStorage.getItem("4PM"));
    $("#5pm .description").val(localStorage.getItem("5PM"));
    $("#6pm .description").val(localStorage.getItem("6PM"));


    // timekeeper/tracker function here
    function timeTracker() {
        var currentHour = moment().hour();

        // loop through each hour: select each hour and loop
        $(".hour-block").each(function () {
            
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(currentHour, timeBlock); //not sure why this is nAn
            

            // statements for moving past the time blocks to make them different colors
            if (timeBlock < currentHour) {
                textArea.addClass("past");
                textArea.removeClass("present");
                textArea.removeClass("future");
            }; 
            if (timeBlock > currentHour) {
                textArea.removeClass("past");
                textArea.removeClass("present");
                textArea.addClass("future");
            }
                
                if  (timeBlock === currentHour) {
                    textArea.removeClass("past");
                    textArea.addClass("present");
                    textArea.removeClass("future");
                    }

            })
    }

    timeTracker();
});







// conditional statements to create different colors for current, past, and future, time blocks




// textArea.addClass("present")

// parse hours into a time (in documentation)
// for loops, use .each
// when hour selected use .each function to run function on each element that matches jquery selector


