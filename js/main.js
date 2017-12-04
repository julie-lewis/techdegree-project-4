var imageSlides = [
  {
    image : '01.jpg',
    title : 'Hay Bales',
    caption : 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
  },
  {
    image : '02.jpg',
    title : 'Lake',
    caption : 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
  },
  {
    image : '03.jpg',
    title : 'Canyon',
    caption : 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
  },
  {
    image : '04.jpg',
    title : 'Iceberg',
    caption : 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
  },
  {
    image : '05.jpg',
    title : 'Desert',
    caption : 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
  },
  {
    image : '06.jpg',
    title : 'Fall',
    caption : 'Fall is coming, I love when the leaves on the trees start to change color.'
  },
  {
    image : '07.jpg',
    title : 'Plantation',
    caption : 'I drove past this plantation yesterday, everything is so green!'
  },
  {
    image : '08.jpg',
    title : 'Dunes',
    caption : 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
  },
  {
    image : '09.jpg',
    title : 'Countryside Lane',
    caption : 'We enjoyed a quiet stroll down this countryside lane.'
  },
  {
    image : '10.jpg',
    title : 'Sunset',
    caption : 'Sunset at the coast! The sky turned a lovely shade of orange.'
  },
  {
    image : '11.jpg',
    title : 'Cave',
    caption : 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
  },
  {
    image : '12.jpg',
    title : 'Bluebells',
    caption : 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
  },
];


//updated version of writing to doc - interacts with DOM - doesn't do anything yet
function print(message) {
// Finds div with ID 'output' in HTML DOM
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//Creates ul and li to display specified item of defined array (arr)
function buildList(arr) { 
 var listHTML = '<ul>';
  for (var i = 0; i < arr.length; i += 1) {
   listHTML += '<li>' + arr[i] + '</li>'; 
  }
  listHTML += '</ul>';
  return listHTML;
}


for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
//Adds correct question to previously-defined 'correct' array
    correct.push(question);
  } else {
//Adds wrong answer question to previously-defined 'wrong' array
    wrong.push(question);
  }
}

// Builds up message in HTML
html = "You got " + correctAnswers + " question(s) right.";
html += "<h2> You got these questions correct:</h2>";
// Uses buildList function defined above to display list of correct questions
html += buildList(correct);
html += "<h2> You got these questions wrong:</h2>";
html += buildList(wrong);
print(html);


/*
                <div class="slide blue">
                  <div class="grid-half">
                    <h2>DailyFeed</h2>
                    <p>Your number one podcast app</p>
                    <a href="#" class="button">Check it Out</a>
                  </div>
                  <div class="grid-half">
                    <img src="img/slide-dailyFeed.png" alt="" />
                  </div>
                </div><!--/Slide 1-->
*/




























