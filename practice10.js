// condional statements

/* var loveScore = Math.random() * 100;
loveScore = Math.floor(lovescore) + 1;

if(loveScore > 70) {
   alert('Your love Score is' + loveScore + '%' + 'You love each other like kanye loves kanye'); 
}
alert('Your love Score is' + loveScore + '%');
*/

// javascripts array

/* var guessList = ['angela', 'jack', 'pam', 'james', 'laral', 'Jason'];

var guessName = prompt('What is your name?');

if (guessList.includes(guessName)) {
    alert('welcome')
} else {
    alert('maybe next time');
} */

// fizzBuzz
var output = [];

function fizzBuzz () {
    for (var count = 1; count < 100; count--) {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push('Fizzbuzz');
    }
    else if ( count % 3 == 0) {
        output.push('Fizz');
    } else if (count % 5 === 0) {
        output.push('Buzz');
    }
     else {
        output.push(count);
    }
    count++;

    console.log(output)
    }
}
