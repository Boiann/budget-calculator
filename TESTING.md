<!-- Code for readme adapted from author's own project (Portfolio 1),
https://github.com/Boiann/boudoir-studio -->

# **Budget Calculator - Testing** 

[Main README.md file](/README.md)

[Visit the live site](https://boiann.github.io/budget-calculator "Link to Budget Calculator")

[GitHub Repository](https://github.com/Boiann/budget-calculator "Link to GitHub Repository")

---
## **Contents**
* [Automated Testing](#automated-testing)
  * [W3C and JSHint Validator](#w3c-and-jshint-validator)
  * [Lighthouse](#lighthouse)

* [Accessibility](#accessibility) 
  * [WAVE WebAim](#wave-webaim) 

* [Manual Testing](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)
    * [Features](#features)
    * [Responsiveness](#responsiveness)

* [Bugs](#bugs)
  * [Known Bugs](#known-bugs)
  * [Solved Bugs](#solved-bugs)

* [Browser Compatibility](#browser-compatibility)      

---

## Automated Testing

### **W3C and JSHint Validator**
The [W3C Markup Validator](https://validator.w3.org/) service was used to validate the HTML and CSS code used and the [JSHint Code Quality Tool](https://jshint.com/) was used to validate Javascript used.

 * Results of HTML validation
 <!-- image -->
 * Results of CSS validation
 <!-- image -->
 * Results of JS validation
 <!-- image -->

### **Lighthouse**
The performance test of all the page was done with Lighthouse through Google Chrome Developer Tools, both for desktop and mobile devices.

* Lighthouse results for desktop site
<!-- image -->
* Lighthouse results for mobile site
<!-- image -->
---
[Back to top ⇧](#budget-calculator---testing)

## **Accessibility**
### **WAVE WebAim**
The [WAVE WebAIM](https://wave.webaim.org/ "Link to WAVE WebAIM home page") web accessibility evaluation tool was used to check for accessibility standards. The page passes with zero errors.
<!-- image -->
---
[Back to top ⇧](#budget-calculator---testing)

## **Manual Testing**
### **Testing User Stories**

#### **First Time Visitor**
  * **title**
    * description

#### **Returning User**
  * **title**
    * description

#### **Website Owner**
  * **title**
    * description

---
[Back to top ⇧](#budget-calculator---testing)    

### **Full Testing**

#### **Features**
**Testing features present on all pages of the website:**

* Hover effect on 'About' text in the header and modal opening, modal close button hover effect
<!-- image -->

* Tooltip showing for 'About' and the logo image
<!-- image  -->

* Hover effect on all the buttons present in the page
<!-- image -->

* Hover effect and new tab opening when the user clicks GitHub icon
<!-- image -->

* Currency selector dropdown menu
<!-- image -->

* Name input welcome message and page title change
<!-- image -->

* Add more income/expense input fields
<!-- image -->

* Removal of added income/expense input fields & inability to remove first income/expense input fields
<!-- image -->

* Inability to calculate budget unless the name is entered, modal
<!-- image -->

* Inability to calculate budget unless positive value number is entered in income/expense
<!-- image -->

* Calculate budget button showing results and selected currency
<!-- image -->

* Calculate budget button showing results from multiple income/expenses
<!-- image -->

* Print button working
<!-- image -->

* Time display updates every second
<!-- image -->

* Reset form button resets everything; name, values, added inputs
<!-- image -->
---
[Back to top ⇧](#budget-calculator---testing)

#### **Responsiveness**
Responsiveness for the website was thoroughly tested for devices up to 320px wide. 
The website still works on a device 295px wide, with visible problems with income/expenses input fields below that width.
<!-- image -->
---
[Back to top ⇧](#budget-calculator---testing)

## **Bugs**

### **Known Bugs**

* To the author's knowledge, there are no bugs present in the project everything is operating as it should.

### **Solved Bugs**

* **User being able to enter the letter 'e' as the value for the amount in the income/expense input fields.** 
The author actually accidentaly discovered the ability to enter the letter 'e' while testing the project. It took a lot of research/trial and error before the issue was rectified. The user is no longer able to enter the letter 'e' via keyboard, only by copy/paste the letter into the input field, but if that is the case the modal warning about entering positive values will fire.
---
[Back to top ⇧](#budget-calculator---testing)

## **Browser compatibility**
The website was tested on the following browsers with no issues found:

* Google Chrome:
<!-- image -->

* Mozzilla Firefox:
<!-- image -->

* Microsoft Edge:
<!-- image -->

* Opera Browser:
<!-- image -->
---

[Back to top ⇧](#budget-calculator---testing)