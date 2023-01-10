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
  * **I want to know what is this site for**
    * When the page loads it is clear right away what this page is for = budget calculation. The minimalistic approach with layout and colours as well as well-defined inputs and buttons should make the user understand what the page is for.
  * **I want to find additional info/instructions**
    * As per UX standards, the 'About' clickable element is present in the top right of the page. If the user clicks the text, the modal will pop up showing a welcome message and instructions should the user require them.
  * **I want to personalize this site for myself**
    * The page updates the title 'Budget Calculator' to reflect the user's name input and changes to 'User's Budget Calculator adding clear and well defined personalization touch to the page.

#### **Returning User**
  * **I want to do some calculations quickly**
    * The income/expense name can be left out, enabling quick calculation should the user require it.
  * **I want to see the author's other work**
    * As per UX standards, the footer area on the bottom page contains the GitHub icon that when clicked on opens the author's GitHub page profile in a separate tab.  
  * **I want to keep the results for later use**
    * Just below the 'Calculate Budget' button the user will find a handy 'Print' button allowing for printed results of calculation to be saved for future use/bookkeeping/accounting. 

#### **Website Owner**
  * **I want to give a smooth and fast experience**
    * The project consists of only one page and is minimalistic in content that could slow the page down (using only one image). There are no excessive animations/transition, allowing for smooth and fast experience.
  * **I want to use the site regularly**
    * As one of the purposes of the project was to develop something that the author will use regularly himself, the page is set up in a way that will allow for quick or detailed calculations depending on the need. Being fast, stable and easy on the eyes will make users come back to the page (author included).
  * **I want no bugs or issues**
    * The javascript used is robust and bug-free, allowing for fast and stable operations with no issues between html, css and javascript.

---
[Back to top ⇧](#budget-calculator---testing)    

### **Full Testing**

#### **Features**
**Testing features present on all pages of the website:**

* Tooltip showing for 'About' and the logo image, hover effect on 'About' text in the header and modal opening, modal close button hover effect
<!-- image -->

* Hover effect on all the buttons present in the page
<!-- image -->

* Hover effect and new tab opening when the user clicks GitHub icon
<!-- image -->

* Currency selector dropdown menu
<!-- image -->

* Name input welcome message and page title change
<!-- image -->

* Adding more income/expense input fields, removal of added income/expense input fields & inability to remove first income/expense input fields
<!-- image -->

* Inability to calculate budget unless the name is entered, modal
<!-- image -->

* Inability to calculate budget unless positive value number is entered in income/expense, modal
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
The author actually accidentally discovered the ability to enter the letter 'e' while testing the project. It took a lot of research/trial and error before the issue was rectified. The user is no longer able to enter the letter 'e' via keyboard, only by copy/paste the letter into the input field, but if that is the case the modal warning about entering positive values will fire.
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