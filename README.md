# Subscribers Counter

The subscribers counter is a website consisting of a counter to help gaming streamers quickly count the total gifted subscriptions from viewers during special events.
These special events include subathons, spin wheel evenings and other viewer competitions created by the content creators.

- Home Page

![Subscribers Counter Mockup Index](https://fekadon.github.io/subscribers-counter/media/subscriber_counter_mockup.png)

- Counter Page

![Subscribers Counter Mockup Counter](https://fekadon.github.io/subscribers-counter/media/subscriber_counter_mockup2.png)

## Features

### Header

- The Subscribers Counter Heading

    - Featured at the top of the page, the Subscribers Counter heading is easy to see. Upon viewing the page, the user will get a feel for what the websites purpose is.
    - Also with a navigation for the user to easy move between website info and counter.

![Subscribers Counter Heading](https://fekadon.github.io/subscribers-counter/media/subscriber_counter_heading.png)

### Information on main page

- Informational text on the main page about what the website is all about.

![Subscribers Counter Information](https://fekadon.github.io/subscribers-counter/media/subscriber_counter_infotext.png)

### Counter

- This section shows the result of the counting and that it will count addition.

![Subscribers Counter Counter](https://fekadon.github.io/subscribers-counter/media/subscribers_counter_counter.png)

### Buttons

- Buttons with a pre set value, the same values that are used on streamers webpage.
- Every button returns a alert message telling the user the value of the button that has been added to the counter.

![Subscribers Counter Buttons](https://fekadon.github.io/subscribers-counter/media/subscribers_counter_buttons.png)

### Reset Button

- A reset button for easy reset of counter and start counting the next person.
- Button returns a alert message telling the user that the counter is reset.

![Subscribers Counter Reset Button](https://fekadon.github.io/subscribers-counter/media/subscribers_counter_reset.png)

## Testing

- I tested that this page works in different browsers: Chrome, Firefox, Microsoft Edge
- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools device toolbar.
- I confirmed that the header and counter are readable and easy to understand.
- I have confirmed that the counter works, counts correctly, gives the right result and gives the right alerts for every button.
- I have confirmed that the reset button works and brings the counter down to 0.

### Validator Testing

- HTML
    - One error was returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffekadon.github.io%2Fsubscribers-counter%2F)
    - "Warning Empty heading" ignored because it is meant to be empty.

- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](http://jigsaw.w3.org/css-validator/validator?lang=sv&profile=css3svg&uri=https%3A%2F%2Ffekadon.github.io%2Fsubscribers-counter%2F&usermedium=all&vextwarning=&warning=1)

- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
        - The following metrics were returned:
        - There are 7 functions in this file.
        - Function with the largest signature takes 0 arguments, while the median is 0.
        - Largest function has 3 statements in it, while the median is 3.
        - The most complex function has a cyclomatic complexity value of 1 while the median is 1.

- Accessibility
    - I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools

- Index Page

![Accessability rates Index page](https://github.com/fekadon/subscribers-counter/blob/main/media/accessability_rates_index.png)

- Counter Page

![Accessability rates Counter page](https://github.com/fekadon/subscribers-counter/blob/main/media/accessability_rates_counter.png)

![Accessability rates bottom](https://github.com/fekadon/subscribers-counter/blob/main/media/accessability_bottom.png)

### Unfixed Bugs

No unfixed bugs

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - [Subscriber Counter](https://fekadon.github.io/subscribers-counter/)

## Credits

### Content

- All content was written by the developer.

### Media

The favicon was generated using the following graphics from Twitter Twemoji:

- Graphics Title: 2795.svg
- Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
- Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/2795.svg
- Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)