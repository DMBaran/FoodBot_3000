const restaurant = [
  {
    name: "Chili's",
    mon: " Monday: 11AM - 11PM",
    tues: "Tuesday: 11AM - 11PM",
    wed: "Wednesday: 11AM - 11PM",
    thurs: "Thursday: 11AM - 11PM",
    fri: "Friday: 11AM - Midnight",
    sat: "Saturday: 11AM - Midnight",
    sun: "Sunday: 11AM - 11PM",
    type: "dinner"
  },
  {
    name: "Red Robin",
    mon: "Monday: 11AM - 10PM",
    tues: "Tuesday: 11AM - 10PM",
    wed: "Wednesday: 11AM - 10PM",
    thurs: "Thursday: 11AM - 10PM",
    fri: "Friday: 11AM - 11PM",
    sat: "Saturday: 11AM - 11PM",
    sun: "Sunday: 11AM - 10PM",
    type: "dinner"
  },
  {
    name: "Tim's Table",
    mon: "Monday: 11AM - 8PM",
    tues: "Tuesday: 11AM - 8PM",
    wed: "Wednesday: 11AM - 8PM",
    thurs: "Thursday: 11AM - 8PM",
    fri: "Friday: 11AM - 10PM",
    sat: "Saturday: 11AM - 2PM",
    sun: "Sunday: Closed",
    type: "lunch"
  },
  {
    name: "Five Guys",
    mon: "Monday: 11AM - 10PM",
    tues: "Tuesday: 11AM - 10PM",
    wed: "Wednesday: 11AM - 10PM",
    thurs: "Thursday: 11AM - 10PM",
    fri: "Friday: 11AM - 10PM",
    sat: "Saturday: 11AM - 10PM",
    sun: "Sunday: 11AM - 10PM",
    type: "lunch"
  },
  {
    name: "Outback Steakhouse",
    mon: "Monday: 11AM - 10PM",
    tues: "Tuesday: 11AM - 10PM",
    wed: "Wednesday: 11AM - 10PM",
    thurs: "Thursday: 11AM - 10PM",
    fri: "Friday: 11AM - 11PM",
    sat: "Saturday: 11AM - 11PM",
    sun: "Sunday: 11AM - 10PM",
    type: "dinner"
  },
  {
    name: "Denny's",
    mon: "Monday: Open 24 Hours",
    tues: "Tuesday: Open 24 Hours",
    wed: "Wednesday: Open 24 Hours",
    thurs: "Thursday: Open 24 Hours",
    fri: "Friday: Open 24 Hours",
    sat: "Saturday: Open 24 Hours",
    sun: "Sunday: Open 24 Hours",
    type: "breakfast"
  },
  {
    name: "I Hop",
    mon: "Monday: 6AM - 11PM",
    tues: "Tuesday: 6AM - 11PM",
    wed: "Wednesday: 6AM - 11PM",
    thurs: "Thursday: 6AM - 11PM",
    fri: "Friday: 6AM - 12PM",
    sat: "Saturday: 6AM - 12PM",
    sun: "Sunday: 6AM - 11PM",
    type: "breakfast"
  },
  {
    name: "O' Charleys",
    mon: "Monday: 11AM - 10PM",
    tues: "Tuesday: 11AM - 10PM",
    wed: "Wednesday: 11AM - 10PM",
    thurs: "Thursday: 11AM - 10PM",
    fri: "Friday: 11AM - 11PM",
    sat: "Saturday: 11AM - 11PM",
    sun: "Sunday: 11AM - 10PM",
    type: "dinner"
  },
  {
    name: "Applebees",
    mon: "Monday: 11AM - Midnight",
    tues: "Tuesday: 11AM - Midnight",
    wed: "Wednesday: 11AM - Midnight",
    thurs: "Thursday: 11AM - Midnight",
    fri: "Friday: 11AM - 1AM",
    sat: "Saturday: 11AM - 1AM",
    sun: "Sunday: 11AM - Midnight",
    type: "dinner"
  },
  {
    name: "Bad Daddy's",
    mon: "Monday: 11AM - 10PM",
    tues: "Tuesday: 11AM - 10PM",
    wed: "Wednesday: 11AM - 10PM",
    thurs: "Thursday: 11AM - 10PM",
    fri: "Friday: 11AM - 11PM",
    sat: "Saturday: 11AM - 11PM",
    sun: "Sunday: 11AM - 10PM",
    type: "dinner"
  },
  {
    name: "Famous Toastry",
    mon: "Monday: 7AM - 3PM",
    tues: "Tuesday: 7AM - 3PM",
    wed: "Wednesday: 7AM - 3PM",
    thurs: "Thursday: 7AM - 3PM",
    fri: "Friday: 7AM - 3PM",
    sat: "Saturday: 7AM - 3PM",
    sun: "Sunday: 7AM - 3PM",
    type: "breakfast"
  },
  {
    name: "Barselona Burger",
    mon: "Monday: 11AM - 9PM",
    tues: "Tuesday: 11AM - 9PM",
    wed: "Wednesday: 11AM - 9PM",
    thurs: "Thursday: 11AM - 9PM",
    fri: "Friday: 11AM - 9PM",
    sat: "Saturday: 11AM - 9PM",
    sun: "Sunday: 11AM - 9PM",
    type: "lunch"
  },
  {
    name: "Alino Pizza",
    mon: "Monday: 11AM - 9PM",
    tues: "Tuesday: 11AM - 9PM",
    wed: "Wednesday: 11AM - 9PM",
    thurs: "Thursday: 11AM - 9PM",
    fri: "Friday: 11AM - 9PM",
    sat: "Saturday: 11AM - 9PM",
    sun: "Sunday: 11AM - 9PM",
    type: "lunch"
  },
  {
    name: "Caruso's",
    mon: "Monday: 5PM - 10PM",
    tues: "Tuesday: 5PM - 10PM",
    wed: "Wednesday: 5PM - 10PM",
    thurs: "Thursday: 5PM - 10PM",
    fri: "Friday: 5PM - 10PM",
    sat: "Saturday: 5PM - 11PM",
    sun: "Sunday: 5PM - 11PM",
    type: "dinner"
  },
  {
    name: "Jeffrey's",
    mon: "Monday: 11AM - 10PM",
    tues: "Tuesday: 11AM - 10PM",
    wed: "Wednesday: 11AM - 10PM",
    thurs: "Thursday: 11AM - 10PM",
    fri: "Friday: 11AM - 10PM",
    sat: "Saturday: 4:30PM - 10PM",
    sun: "Sunday: 4:30PM - 10PM",
    type: "dinner"
  },
  {
    name: "Pisces",
    mon: "Monday: 11:30AM - 2:30PM <br> 5PM - 9:30PM",
    tues: "Tuesday: 11:30AM - 2:30PM <br> 5PM - 9:30PM",
    wed: "Wednesday: 11:30AM - 2:30PM <br> 5PM - 9:30PM",
    thurs: "Thursday: 11:30AM - 2:30PM <br> 5PM - 9:30PM",
    fri: "Friday: 11:30AM - 2:30PM <br> 5PM - 10:30PM",
    sat: "Saturday: 11:30AM - 2:30PM <br> 5PM - 10:30PM",
    sun: "Sunday: Closed",
    type: "dinner"
  },
  {
    name: "Panera",
    mon: "Monday: 6AM - 9PM",
    tues: "Tuesday: 6AM - 9PM",
    wed: "Wednesday: 6AM - 9PM",
    thurs: "Thursday: 6AM - 9PM",
    fri: "Friday: 6AM - 9PM",
    sat: "Saturday: 6AM - 9PM",
    sun: "Sunday: 7AM - 8PM",
    type: "lunch"
  },
  {
    name: "Field of Greens",
    mon: "Monday: 11AM - 8PM",
    tues: "Tuesday: 11AM - 8PM",
    wed: "Wednesday: 11AM - 8PM",
    thurs: "Thursday: 11AM - 8PM",
    fri: "Friday: 11AM - 8PM",
    sat: "Saturday: 11AM - 3PM",
    sun: "Sunday: 11AM - 3PM",
    type: "lunch"
  },
  {
    name: "Epic ChopHouse",
    mon: "Monday: 4PM - 10PM",
    tues: "Tuesday: 4PM - 10PM",
    wed: "Wednesday: 4PM - 10PM",
    thurs: "Thursday: 4PM - 10PM",
    fri: "Friday: 4PM - 10PM",
    sat: "Saturday: 4PM - Midnight",
    sun: "Sunday: 4PM - Midnight",
    type: "dinner"
  }
];

const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner =  document.getElementById('dinner');
const place = document.querySelector('.display');
const time = document.querySelector('.time');

breakfast.addEventListener('click', function() {

  const breakfastOnly = restaurant.filter(food => food.type === 'breakfast');
  let randomBreakfast = Math.floor(Math.random() * breakfastOnly.length);
  place.innerHTML = `
  <p class="animated bounceIn slow duration-2s">
  ${breakfastOnly[randomBreakfast].name}
  </p>
  `; 
  time.innerHTML = `
    <div class="animated bounceInLeft delay-2s">
      <p>${breakfastOnly[randomBreakfast].mon}</p>
      <p>${breakfastOnly[randomBreakfast].tues}</p>
      <p>${breakfastOnly[randomBreakfast].wed}</p>
      <p>${breakfastOnly[randomBreakfast].thurs}</p>
      <p>${breakfastOnly[randomBreakfast].fri}</p>
      <p>${breakfastOnly[randomBreakfast].sat}</p>
      <p>${breakfastOnly[randomBreakfast].sun}</p>
    </div>`;
});

lunch.addEventListener('click', function () {

  const lunchOnly = restaurant.filter(food => food.type === 'lunch');
  let randomLunch = Math.floor(Math.random() * lunchOnly.length);
  place.innerHTML = `
  <p class="animated bounceIn slow duration-2s">
  ${lunchOnly[randomLunch].name}
  </p>
  `;
  time.innerHTML = `
    <div class="animated bounceInLeft delay-2s">
      <p>${lunchOnly[randomLunch].mon}</p>
      <p>${lunchOnly[randomLunch].tues}</p>
      <p>${lunchOnly[randomLunch].wed}</p>
      <p>${lunchOnly[randomLunch].thurs}</p>
      <p>${lunchOnly[randomLunch].fri}</p>
      <p>${lunchOnly[randomLunch].sat}</p>
      <p>${lunchOnly[randomLunch].sun}</p>
    </div>`;
});

dinner.addEventListener('click', function () {

  const dinnerOnly = restaurant.filter(food => food.type === 'dinner');
  let randomDinner = Math.floor(Math.random() * dinnerOnly.length);
  place.innerHTML = `
  <p class="animated bounceIn slow duration-2s">
  ${dinnerOnly[randomDinner].name}
  </p>`;
  time.innerHTML = `
    <div class="animated bounceInLeft delay-2s">
      <p>${dinnerOnly[randomDinner].mon}</p>
      <p>${dinnerOnly[randomDinner].tues}</p>
      <p>${dinnerOnly[randomDinner].wed}</p>
      <p>${dinnerOnly[randomDinner].thurs}</p>
      <p>${dinnerOnly[randomDinner].fri}</p>
      <p>${dinnerOnly[randomDinner].sat}</p>
      <p>${dinnerOnly[randomDinner].sun}</p>
    </div>`;
});