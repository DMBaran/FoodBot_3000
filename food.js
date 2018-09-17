const restaurant = [
  {
    name: "Chilli's",
    type: "dinner"
  },
  {
    name: "Red Robin",
    type: "dinner"
  },
  {
    name: "Five Guys",
    type: "lunch"
  },
  {
    name: "Outback Steakhouse",
    type: "dinner"
  },
  {
    name: "Denny's",
    type: "breakfast"
  },
  {
    name: "I Hop",
    type: "breakfast"
  },
  {
    name: "O' Charleys",
    type: "dinner"
  },
  {
    name: "Applebees",
    type: "dinner"
  },
  {
    name: "Bad Daddy's",
    type: "dinner"
  },
  {
    name: "Famous Toastry",
    type: "breakfast"
  },
  {
    name: "Barselona Burger",
    type: "lunch"
  },
  {
    name: "Alino Pizza",
    type: "lunch"
  },
  {
    name: "Caruso's",
    type: "dinner"
  },
  {
    name: "Jeffrey's",
    type: "dinner"
  },
  {
    name: "Pisces",
    type: "dinner"
  },
  {
    name: "Panera",
    type: "lunch"
  },
  {
    name: "Field of Greens",
    type: "lunch"
  },
  {
    name: "Epic ChopHouse",
    type: "dinner"
  }
];

const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner =  document.getElementById('dinner');
const place = document.querySelector('.display');

breakfast.addEventListener('click', function(event) {

  const breakfastOnly = restaurant.filter(food => food.type === 'breakfast');
  let randomBreakfast = Math.floor(Math.random() * breakfastOnly.length);
  place.innerHTML = `
  <p class="animated bounceIn slow duration-2s">
  ${breakfastOnly[randomBreakfast].name}
  </p>
  `;
  
  breakfastOnly[randomBreakfast].name;  

});

lunch.addEventListener('click', function (event) {

  const lunchOnly = restaurant.filter(food => food.type === 'lunch');
  let randomLunch = Math.floor(Math.random() * lunchOnly.length);
  place.innerHTML = `
  <p class="animated bounceIn slow duration-2s">
  ${lunchOnly[randomLunch].name}
  </p>
  `;

});

dinner.addEventListener('click', function (event) {

  const dinnerOnly = restaurant.filter(food => food.type === 'dinner');
  let randomDinner = Math.floor(Math.random() * dinnerOnly.length);
  place.innerHTML = `
  <p class="animated bounceIn slow duration-2s">
  ${dinnerOnly[randomDinner].name}
  </p>
  `;

});