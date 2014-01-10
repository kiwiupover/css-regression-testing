var baseUrl = 'http://localhost:3000',
    delay = '2';

casper.start();
casper.
thenOpen( baseUrl + '/c/1/Seattle-restaurants.html').
then( function should_look_like_this(){
    phantomcss.screenshot('body', delay, '.ad', 'US_city_page');
    console.log('City Page');
} ).
thenOpen( baseUrl + '/n/1/6/Seattle/Capitol-Hill-restaurants?list_horiz_sort_results=d').
then( function should_look_like_this(){
    phantomcss.screenshot('body', delay, '.ad', 'US_list_page');
    console.log('List page');
} ).
thenOpen( baseUrl + '/r/1/1526048/restaurant/Ballard/The-Walrus-and-the-Carpenter-Seattle').
then( function should_look_like_this(){
    phantomcss.screenshot('body', delay, '.ad', 'US_restaurant_page');
    console.log('Restaurant show page');
});
