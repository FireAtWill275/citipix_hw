

// <!-- pseudocode
//     - user inputs city name, abbreviation, or shorthand
//     - user clicks button
//     - Check user input against var city
//     - if match, 
//       - pull up city image
//       - display using attr method
//     - else 
//       - return error
//       - display alert 'WRONG TRY AGAIN JABRONI'
//       - change entry form background to red
//       - do not change image
//       - do not remove user input
    
   $(document).ready(function(){

        // create form for user input

      $('form').submit(addCity);
      function addCity(e){
        event.preventDefault();

        //create variable to store user's "city" input

        var city = $('#city-type').val();
        console.log("User input: ", city);

        // logic to match up user's input to image bank:

        if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'new york' || city === 'nyc' || city === 'new york city') {
          $('body').removeClass('starter-image').addClass('nyc');
        } else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area' || city === 'san francisco' || city === 'sf' || city === 'bay area') {
          $('body').removeClass('starter-image').addClass('sf');
        } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
          $('body').removeClass('starter-image').addClass('la');
        } else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
          $('body').removeClass('starter-image').addClass('austin');
        } else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
          $('body').removeClass('starter-image').addClass('sydney');
        } else if (city === 'Chicago' || city === 'CHI' || city === 'chicago' || city === 'chi') {
          $('body').removeClass('starter-image').addClass('chicago');
        } else if (city === 'Denver' || city === 'DEN' || city === 'Mile High City' || city === 'denver' || city === 'den' || city === 'mile high city') {
          $('body').removeClass('starter-image').addClass('denver');  
        } 
          // - If match, show city matching user input
          // - if no match:

        else {
               $('body').addClass('starter-image');
              alert('Looks like we don\'t have that city in our photobank...');
              console.log('HAHA THIS JABRONI THINKS ', city, ' IS A CITY...')
          }
          //- return error
        }
    });



