// code modified from Aaron Rickle's CSS Rain Effect: 
//  codepen.io/arickle/pen/XKjMZy
function make_it_rain() {
  let increment = 0;
  let drops = "";

  while(increment < 100) {
    // create random number between 98 and 1
    let rand_one = (Math.floor(Math.random() * (98 - 1) + 1));
    // create random number between 5 and 2
    let rand_two = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

    // create random color for each drop
    let random_color = Math.floor(Math.random()*16777215).toString(16);

    // increment
    increment += rand_two;

    // add in a new raindrop with various randomizations to CSS properties
    drops += '<div class="drop"'
          +  'style="left: ' + increment + '%;' 
          +  'bottom: ' + (rand_two + rand_two - 1 + 100) + '%;'
          +  'animation-delay: 0.' + rand_one + 's;'
          +  'animation-duration: 1.5' + rand_one + 's;">'
          +  '<div class="stem"'
          +  'style="animation-delay: 0.' + rand_one + 's;'
          +  'animation-duration: 1.5' + rand_one + 's;'
          +  'background: linear-gradient(to bottom, #fff, #' + random_color + ');">'
          +  '</div>'
          +  '<div class="splat"'
          +  'style="animation-delay: 0.' + rand_one + 's;'
          +  'animation-duration: 1.5' + rand_one + 's;'
          +  'border-top: 0.5vw dotted #' + random_color + ';">'
          +  '</div></div>';
  }

  // add drops to rain div in html file
  let rain_element = document.getElementById("rain");
  rain_element.innerHTML += drops;
}