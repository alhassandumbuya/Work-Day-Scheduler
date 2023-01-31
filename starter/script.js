// Display the current day at the top of the calender when a user opens the planner.
let presentDay = $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))

// $(document).ready(function() {

//     $(".button").on("click", function (event) {
//         if (event.target.matches("button")) {
//             let taskDescription=$(event.target).siblings("textarea").val() //targeting the save button
//             localStorage.setItem(`${(event.target).attr("data-hour")}`,taskDescription) //should save the string(key/tome/hour) and the value(discription)
//         }
//         console.log(event.target);
//         // let scheduale = $('.col-md-10').val();
//         // localStorage.setItem("plan", scheduale);
//         // console.log(scheduale);
// })



$(document).ready(function () {





let dayHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
let $timeBlockContainerEl = $(".container");
for (let i = 0; i < dayHours.length; i++) {
    //console.log(dayHours);
    $timeBlockContainerEl.append(
       ` 
       <div class="row time-block">
        <div class="col-md-1 hour">${dayHours[i]}${i >= 3 ? "PM" : "AM"}
        </div>
        <textarea class="col-md-10 description" data-hour="${i+9}"> 
        </textarea>
        <button class="col-md-1 saveBtn">
          Save
        </button>
      </div>
     ` 
     
     )
   
    
    
  

    
}

$('.saveBtn').click(()=>{
   let text = $('.description').val(); //this colleccts the user inputs when save is clicked 
    
    let Hday = $('.hour').val();
    console.log(text);
    console.log(Hday);
 });


});
