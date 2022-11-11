Back to [README.md](README.md) file

## Testing

## Table of Contents
1. [Navigation](#navigation)   
2. [Testing User Stories](#testing-user-stories)
3. [Implementation](#implementation)
4. [Devices used](#devices-used)
5. [Browsers](#browsers)
6. [Lighthouse Results](#lighthouse-results)
7. [Validators](#validators)
	* [HTML Validator](#html-validator)
	* [Jigsaw CSS Validator](#jigsaw-css-validator)
	* [JSHint](#jshint)

### Navigation

### User Stories

### Implementation

### Devices Used
The following devices were used to test this site on:

* iPhone 13
* 13 inch MacBook Pro
* iPad (5th generation)

### Browsers
The following Browsers were used to test this site:

* Google Chrome
* Safari

## Lighthouse Results
I have tested my site using Lighthouse in Google Chrome Dev Tools and my results for the testing of the various pages are as follows:

### Home Page Desktop Results:
![Home Page Desktop Results](assets/images/lighthouse/home-desktop-lighthouse-testing.jpg)

### Home Page Mobile Results:
![Home Page Mobile Results](assets/images/lighthouse/home-mobile-lighthouse-testing.jpg)

### About Page Desktop Results:
![About Page Desktop Results](assets/images/lighthouse/about-desktop-lighthouse-testing.jpg)

### About Page Mobile Results:
![About Page Mobile Results](assets/images/lighthouse/about-mobile-lighthouse-testing.jpg)

### Coding Page Desktop Results:
![Coding Page Desktop Results](assets/images/lighthouse/coding-desktop-lighthouse-testing.jpg)

### Coding Page Mobile Results:
![Coding Page Mobile Results](assets/images/lighthouse/coding-mobile-lighthouse-testing.jpg)

### Graphic Design Page Desktop Results:
![Graphic Design Page Desktop Results](assets/images/lighthouse/graphic-design-desktop-lighthouse-testing.jpg)

### Graphic Design Page Mobile Results:
![Graphic Design Page Mobile Results](assets/images/lighthouse/graphic-design-mobile-lighthouse-testing.jpg)

### Illustration Page Desktop Results:
![Illustration Page Desktop Results](assets/images/lighthouse/illustration-desktop-lighthouse-testing.jpg)

### Illustration Page Mobile Results:
![Illustration Page Mobile Results](assets/images/lighthouse/illustration-mobile-lighthouse-testing.jpg)

### Photography Page Desktop Results:
![Photography Page Desktop Results](assets/images/lighthouse/photography-desktop-lighthouse-testing.jpg)

### Photography Page Mobile Results:
![Photography Page Mobile Results](assets/images/lighthouse/photography-mobile-lighthouse-testing.jpg)

### Contact Page Desktop Results:
![Contact Page Desktop Results](assets/images/lighthouse/contact-desktop-lighthouse-testing.jpg)

### Contact Page Mobile Results:
![Contact Page Mobile Results](assets/images/lighthouse/contact-mobile-lighthouse-testing.jpg)


### Validators
### HTML Validator
When I originally ran my code through the W3C HTML validator I had some issues. the issues highlighted to me were:

1. Unclosed div in the nav section.
2. Unclosed section tag in the footer.
3. Script tags outside of the body.

After I'd corrected these mistakes and ran this through the W3C HTML validator I was only left with 3 warnings. These warnings relate to the EmailJS code that I took from EmailJS itself. I looked at amending this so that the W3C validator would be ok with the code that it saw. I tested the form with the type="script/javascript" removed but the form didn't work, so I have had to leave this in.

### Home
![Home HTML Validator](assets/images/validator/w3c-html-home.jpg)

### About
![About HTML Validator](assets/images/validator/w3c-html-about.jpg)

### Coding
![Coding HTML Validator](assets/images/validator/w3c-html-coding.jpg)

### Graphic Design
![Graphic Design HTML Validator](assets/images/validator/w3c-html-graphic-design.jpg)

### Illustration
![Illustration HTML Validator](assets/images/validator/w3c-html-illustration.jpg)

### Photography
![Photography HTML Validator](assets/images/validator/w3c-html-photography.jpg)

### Contact
![Contact HTML Validator](assets/images/validator/w3c-html-contact.jpg)

### Jigsaw CSS Validator
When I first tested my CSS I had two warnings that I had done. There are other warnings but these are coming from Bootstrap.
![CSS Testing](assets/images/validator/jigsaw-css-testing-1.jpg)

After removing the depreciated media feature the validator showed no errors that I had done.
![CSS Testing 2](assets/images/validator/jigsaw-css-testing-2.jpg)

#### JSHint
When I tested the JavaScript Code through JSHint I had the following results:

### Drop-down Menu
![Drop-down Menu 1](assets/images/validator/jshint-menu-dropdown-1.jpg)
After running the JavaScript code through JSHint I saw that I needed the semicolon at the end to the line.

![Drop-down Menu 2](assets/images/validator/jshint-menu-dropdown-2.jpg)
After adding the semicolon at the end and re running the validator this outcome was ok.

### Carousel
![Carousel 1](assets/images/validator/jshint-carousel-1.jpg)
After running the JavaScript code through JSHint I saw that I needed the semicolon at the end to the line.

![Carousel 2](assets/images/validator/jshint-carousel-2.jpg)
After adding the semicolon at the end and re running the validator this outcome was ok.

### Contact Us
![Contact Us](assets/images/validator/jshint-emailjs.jpg)

### Back to top button
![Back to top button](assets/images/validator/jshint-scroll-to-top-button.jpg)



[Back to Table of Contents](#table-of-contents)