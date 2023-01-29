// Display the current day at the top of the calender when a user opens the planner.
let presentDay = $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))

$(document).ready(function() {

    $(".saveBtn").on("click", function () {
        let scheduale = $('.col-md-10').val();
        localStorage.setItem("plan", scheduale);
        console.log(scheduale);
})

















});