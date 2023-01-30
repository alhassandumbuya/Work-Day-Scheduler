// Display the current day at the top of the calender when a user opens the planner.
let presentDay = $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))

$(document).ready(function() {

    $(".saveBtn").on("click", function () {
        let scheduale = $('.col-md-10').val();
        localStorage.setItem("plan", scheduale);
        console.log(scheduale);
})

let dayHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
let $timeBlockContainerEl = $(".container");
for (let i = 0; i < dayHours.length; i++) {
    console.log(dayHours);
    $timeBlockContainerEl.append(
        <div class="row time-block">
        <div class="col-md-1 hour">

        </div>
        <textarea class="col-md-10 description future">
        </textarea>
        <button class="col-md-1 saveBtn i:hover">
          Save
        </button>
      </div>
    )


    
}


// dayHours.forEach((hour, index) => {
//     $timeBlockContainerEl.append(
  
//       <div class="row time-block">
//           <div class="col-md-1 hour">
//             8am
//           </div>
//           <textarea class="col-md-10 description future">
//           </textarea>
//           <button class="col-md-1 saveBtn i:hover">
//             Save
//           </button>
//         </div>








});