// Generate 100 random time intervals between 5 and 10 seconds
// randomly generated number from 0 100
// the order in which the interval was created
// the order in which the interval was displayed

// I think that this is the reason why this question is being asked.
// Seems like the person who is asking the question is looking to see if the implementer has an understanding of 
// closure.
//(function generateRandomTimeIntervals()
//{
//  for( var i = 1; i < 101; i++)
//  {
//    var timeInterval = randomTimeInterval(5, 10);
//    setTimeout(
//      function()
//      {
//        console.log( randomIntegerInInterval(0, 100) + " " + i + " " + timeInterval/1000 );
//      },
//      timeInterval);
//  }
//})();

var startTime = Date.now();

(function generateRandomTimeIntervals()
{
  for( var i = 1; i < 101; i++)
  {
    generateSetTimeout(randomTimeInterval(5, 10), i);
  }
})();

// Creates a closure here instead of inside of the for loop variable environment.
function generateSetTimeout(timeInterval, orderCreated)
{
  setTimeout(
  function()
  {
    console.log( randomIntegerInInterval(0, 100) + " " + orderCreated + " " + timeInterval/1000 );
  },
  timeInterval);
}

function randomTimeInterval(min, max)
{
  var randomMultiplier = Math.random() * (max - min) + min;
  var secondMultiplier = 1000;
  var seconds          = randomMultiplier * secondMultiplier;

  return seconds;
}

function randomIntegerInInterval(min, max)
{
  return Math.floor( Math.random() * (max - min + 1) )  + min;
}

process.on('exit',
  function()
  {
    var elapsedTime   = Date.now() - startTime;
    var formattedTime = elapsedTime/1000;

    console.log('Time elapsed for script ' + formattedTime);
  });
