$(document).ready(function () {
    //show current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss a"));


    // save button click event: when button is clicked, description saves
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();
        

        // set items to local storage
        localStorage.setItem(time, description);
        console.log(localStorage);
    });

    // save/load descriptions of time blocks on local storage to stay even after refreshing page


    $("#hour-9 .description").val(localStorage.getItem("9AM"));
    $("#hour-10 .description").val(localStorage.getItem("10AM"));
    $("#hour-11 .description").val(localStorage.getItem("11AM"));
    $("#hour-12 .description").val(localStorage.getItem("12PM"));
    $("#hour-13 .description").val(localStorage.getItem("1PM"));
    $("#hour-14 .description").val(localStorage.getItem("2PM"));
    $("#hour-15 .description").val(localStorage.getItem("3PM"));
    $("#hour-16 .description").val(localStorage.getItem("4PM"));
    $("#hour-17 .description").val(localStorage.getItem("5PM"));
    $("#hour-18 .description").val(localStorage.getItem("6PM"));
    
    

    // timekeeper/tracker function here
    function timeTracker() {
        var time = moment();
        var currentHour = time.hour();

        // loop through each hour: select each hour and loop
        $(".time-block").each(function () {

            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(currentHour, hourBlock); 


            // statements for the time blocks to make them different colors
            if (hourBlock < currentHour) {
                $(this).addClass("past");
               
            }
            else if (hourBlock === currentHour) {
                // $(this).removeClass("past");
                $(this).addClass("present");

            }
            else {
                // $(this).removeClass("present");
                // $(this).removeClass("past");
                $(this).addClass("future");
            }

        })
    }
    
    timeTracker();
});









