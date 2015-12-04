// Various greetings to display based on the time of the day.
// Lots of encouragement. :)
var greetings = [
    morning_greetings = [
        'Good Morning, Tyler!',
        'What a Gorgeous Morning!',
        'Start Your Day with Productivity!',
        'Have a Fantastic Morning, Tyler!',
        'You Look Great this Morning, Tyler!'
    ],
    afternoon_greetings = [
        'Done Anything Cool Today?',
        'Still Time for Fun!',
        'Looking Good, Handsome.',
        'What a Gorgeous Afternoon!',
        'Have an Awesome Afternoon, Tyler!'
    ],
    evening_greetings = [
        'Almost Time for Bed, Buddy.',
        'What Was Your Favorite Part of Today?',
        'Reflect on Your Day.',
        'Still Looking Great!',
        'Sure is a Beautiful Night.'
    ]
];

// Primary function
$(document).ready(function() {
    // Get current time.
    var hour = new Date().getHours();

    // The simple method for this would be to simply divide
    // the current time by 3 to determine the time_index, but
    // this isn't possible because the intervals that I want
    // for my times are not consistent.
    var time_index = 0;
    if (hour >= 6 && hour < 12)
        time_index = 0;
    else if (hour >= 12 && hour < 20)
        time_index = 1;
    else
        time_index = 2;

    // Generate the random number 0 - 4 to determine the text.
    var random_index = Math.floor(Math.random() * 5);

    //console.log("Indices Generated:\n\t- time_index:\t" + time_index + "\n\t- random_index:\t" + random_index);

    // Set the greeting based on indices.
    $('#greeting').text(greetings[time_index][random_index]);


    // Background photos are also based on time of day, so I
    // decided on a naming scheme that would reuse the two numbers
    // that were just generated above.
    // 
    // Ex. 14.png
    // The first number is the time_index.
    // The second number is the random_index.
    //
    // This limits the number of photos were time period to ten,
    // but I don't expect to need more than that ever.

    // This line uses the unary conversion operator which converts
    // integers to strings for the purposes of concatenation.
    $('#content').css({'background-image': 'url(img/' + +time_index + +random_index + '.jpg)',
                       'background-repeat': 'no-repeat',
                       'background-size': 'cover'});
});

// Starts the time clock and keeps updating it.
// This function is called onload by <body>.
function StartTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    // Convert to 12 hour time from 24 hour time.
    if (h > 12)
        h -= 12;

    // Add a zero in front if minutes is less than 10.
    if (m < 10)
        m = "0" + m;

    // Set the time and wait half a second
    $('.time-display').text(h + ":" + m);
    var t = setTimeout(StartTime, 500);
}