// code modified from Aaron Rickle's CSS Rain Effect: 
//  codepen.io/arickle/pen/XKjMZy
/* TODO: ideas to replace rain droplets:
 *  - rather than having an infinite loop of these rain droplets, maybe 
 *    do a few rain droplets that are big and loud and leave a 'paint splatter' 
 *    on the page
 *  - have a few paint splatters hit the screen at random intervals
 *  - do a blocky "rain drop race" where there are 4-5 different streams that start
 *    at the top and then make their way down to the bottom of the screen
 *  - have four droplets come down and once they splash, they light up the background
 *    of one of the navbar items
*/
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
          +  'animation-duration: 3.5' + rand_one + 's;">'
          +  '<div class="stem"'
          +  'style="animation-delay: 0.' + rand_one + 's;'
          +  'animation-duration: 3.5' + rand_one + 's;'
          +  'background: linear-gradient(to bottom, #fff, #' + random_color + ');">'
          +  '</div>'
          +  '<div class="splat"'
          +  'style="animation-delay: 0.' + rand_one + 's;'
          +  'animation-duration: 3.5' + rand_one + 's;'
          +  'border-top: 0.5vw dotted #' + random_color + ';">'
          +  '</div></div>';
  }

  // add drops to rain div in html file
  let rain_element = document.getElementById("rain");
  rain_element.innerHTML += drops;
}

function intro() {
  let header_text = document.getElementById("header_text");

  let intro_h1 = document.createElement("H1");
  let intro_text = document.createTextNode("Hi! What's your name?");
  intro_h1.appendChild(intro_text);
  header_text.appendChild(intro_h1);
  header_text.appendChild(document.createElement("BR"));
  
  let name_input = document.createElement("INPUT");
  name_input.setAttribute("type", "text");
  name_input.setAttribute("id", "name_input");
  name_input.setAttribute("name", "name");
  header_text.appendChild(name_input);
  header_text.appendChild(document.createElement("BR"));
  
  let name = name_input.value;
  console.log(name);
}
