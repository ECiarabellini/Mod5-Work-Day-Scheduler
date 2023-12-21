// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click',function(){
    var hourId = $(this).parent().attr('id');
    console.log(hourId);
    var hourText = $(this).siblings('textarea').val(); 
    console.log('hourText: ', hourText);
    localStorage.setItem(hourId, hourText);
  })    
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().format('H');
  console.log('currentHour: ', currentHour);
  for (var counter = 9; counter < 18; counter++){
    var hourBlock = $(String('#hour-'+counter));
    if (counter == currentHour){
      hourBlock.addClass('present');
    } else if (counter > currentHour){
      hourBlock.addClass('future');
    } else {
    hourBlock.addClass('past');
    } 
  }
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = $('#currentDay');
  currentDate.text(dayjs().format('dddd, MMMM D h:mm A'));

});

