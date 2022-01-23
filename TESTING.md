# Testing

## Browser Compatibility

### Home Page (Small Screens - Navigation and Highlighted Features)

- The following screenshots show that the hamburger menu correctly displays in Edge, Chrome, and Firefox on small screens.
- Similarly, the highlighted features correctly stack vertically across all browsers.

On Microsoft Edge:

![Home Page Correctly Displays in Edge](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/nav-edge-small.png)

On Chrome:

![Home Page Correctly Displays in Chrome](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/nav-chrome-small.png)

On Firefox:

![Home Page Correctly Displays in Chrome](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/nav-firefox-small.png)

### Home Page (Large Screens - Navigation and Highlighted Features)

- The following screenshots show that the horizontal navigation menu correctly displays in Edge, Chrome, and Firefox on large screens.
- Similarly, the highlighted features correctly display inline across all browsers.

On Microsoft Edge:

![Home Page Correctly Displays in Edge](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/highlighted-features-edge-large.png)

On Chrome:

![Home Page Correctly Displays in Chrome](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/highlighted-features-chrome-large.png)

On Firefox:

![Home Page Correctly Displays in Firefox](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/highlighted-features-firefox-large.png)

### Testimonials

- The following screenshots show that the testmonials correctly display across all browsers.

On Microsoft Edge:

![Testimonials Correctly Displays in Edge](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/testimonials-edge-large.png)

On Chrome:

![Testimonials Correctly Displays in Chrome](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/testimonials-chrome-large.png)

On Firefox:

![Testimonials Correctly Displays in Firefox](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/testimonials-firefox-large.png)

### Contact Form
- While testing the Contact form across browsers, a bug was found in Firefox.
- As shown below, the Submit button on the contact form reads "Submit Query" and so the text does not appropriately fit into the button.
- This was resolved by setting the value attribute on the button, after which all browsers displayed the contact form correctly.

On Microsoft Edge:

![Contact Form Correctly Displays in Edge](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/contact-edge-large.png)

On Chrome:

![Contact Form Correctly Displays in Edge](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/contact-chrome-large.png)

On Firefox (Bug found):

![Contact Form Correctly Displays in Edge](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/contact-ff-large-error.png)

On Firefox (Bug resolved):

![Contact Form Correctly Displays in Edge](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/browser-testing/contact-firefox-large.png)

## Code Validation

### HTML Validation

Several validation errors were identified during the development process, specifically:

- `<p>` elements were used as the child of `<a>` elements on the home page.
- A duplicate `class` attribute was used on one testimonial `<figure>` element on the testimonials.html page.
- A `</p>` tag was found without a corresponding `<p>` tag. This was due to a `<ul>` being contained within the paragraph.

One warning was also found: the `<section>` containing the highlighted features on index.html contains no `<h2>-<h6>` tag. I opted to leave this unresolved as this was appropriate for the particular page.

All other validation errors were resolved and the site was revalidated using the W3C official validator as shown below.

index.html:

![Alternative validation service for index.html](https://laura10101.github.io/volanto-launchpad/documentation/validation/index-validation.png)

programme.html:

![Alternative validation service for programme.html](https://laura10101.github.io/volanto-launchpad/documentation/validation/programme-validation.png)

apply.html:

![Alternative validation service for apply.html](https://laura10101.github.io/volanto-launchpad/documentation/validation/apply-validation.png)

application-confirmation.html:

![Alternative validation service for application-confirmation.html](https://laura10101.github.io/volanto-launchpad/documentation/validation/application-confirmation-validation.png)

testimonials.html:

![Alternative validation service for testimonials.html](https://laura10101.github.io/volanto-launchpad/documentation/validation/testimonials-validation.png)

contact.html:

![Alternative validation service for contact.html](https://laura10101.github.io/volanto-launchpad/documentation/validation/contact-validation.png)

contact-confirmation.html:

![Alternative validation service for contact-confirmation.html](https://laura10101.github.io/volanto-launchpad/documentation/validation/contact-confirmation-validation.png)

Links to the official W3C validator for each page on the site are shown below:

- [index.html](https://validator.w3.org/nu/?doc=https://laura10101.github.io/volanto-launchpad/index.html)
- [programme.html](https://validator.w3.org/nu/?doc=https://laura10101.github.io/volanto-launchpad/programme.html)
- [apply.html](https://validator.w3.org/nu/?doc=https://laura10101.github.io/volanto-launchpad/apply.html)
- [application-confirmation.html](https://validator.w3.org/nu/?doc=https://laura10101.github.io/volanto-launchpad/application-confirmation.html)
- [testimonials.html](https://validator.w3.org/nu/?doc=https://laura10101.github.io/volanto-launchpad/testimonials.html)
- [contact.html](https://validator.w3.org/nu/?doc=https://laura10101.github.io/volanto-launchpad/contact.html)
- [contact-confirmation.html](https://validator.w3.org/nu/?doc=https://laura10101.github.io/volanto-launchpad/contact-confirmation.html)

### CSS Validation

The CSS was validated through the W3C's jigsaw validator and no errors were found.

![CSS Validation Passed](https://laura10101.github.io/volanto-launchpad/documentation/validation/css-validation.png)

## Responsiveness

### Navigation

- The navigation was tested on both desktop and mobile devices and worked as expected.

On Desktop:

![Navigation bar on a desktop](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/nav-desktop.jpg)

On Mobile (Expanded):

![Navigation bar when expanded on mobile devices](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/nav-mobile-expanded.png)

On Mobile (Collapsed):

![Navigation bar when collapsed on mobile devices](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/nav-mobile-collapsed.png)


### Highlighted Features

- The highlighted features were tested on both mobile and desktop devices and worked as expected.

On Desktop:

![Highlighted features on home page on desktop device](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/ctas-desktop.JPG)

On Mobile:

![Highlighted features on home page on mobile device](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/ctas-mobile.png)

### Testimonials

- The testimonials were tested on both mobile and desktop devices and displayed as expected on each device.

On Desktop:

![Testimonials on desktop device](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/testimonials-desktop.JPG)

On Mobile:

![Testimonials on mobile device](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/testimonials-mobile.png)

### Contact Form
- The contact form was also tested on both mobile and desktop devices and worked as expected.

On Desktop:

![Contact form on desktop device](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/contact-desktop.jpg)

On Mobile:

![Contact form on mobile device](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/contact-mobile.png)

## User Story Tests

### Potential Applicant Goals

**As a potential Launchpad applicant, I want to understand more about the Volanto Launchpad programme, so that I can understand how it might help me**

Potential applicants can achieve this goal by visiting the Programme page as shown below:

![Learning more about the Launchpad programme](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/programme-desktop.jpg)

**As a potential Launchpad applicant, I want to understand what benefit previous mentees have gained from the programme, so that I can decide whether or not to apply**

Potential applicants can achieve this goal by visiting the Testimonials page as shown below:

![Learning about the benefit past mentees gained from the Launchpad programme](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/testimonials-desktop.JPG)

**As a potential Launchpad applicant, I need to be able to contact Volanto, so that I can get answers if I have any further questions**

Potential applicants can achieve this goal by submitting the Contact form as shown below:

![Contacting Volanto with follow-up questions](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/contact-desktop.JPG)

Users receive confirmation that they have successfully contacted Volanto:

![Confirmation of successful contact submission](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/contact-confirmation-desktop.JPG)

**As a potential Launchpad applicant, I need to be able to easily navigate the site, so that I can quickly decide whether to apply**

Potential applicants can achieve this goal using the accessible navigation bar as shown below:

![Navigating the launchpad site](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/nav-desktop.jpg)

They can also quickly find the most important information through the highlighted features on the home page:

![Quickly finding information through CTAs](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/ctas-desktop.jpg)

**As a potential Launchpad applicant, I need to be able to apply to the Launchpad scheme, if I wish to proceed**

Potential applicants can achieve this goal by using the application form as shown below:

![Learning more about the Launchpad programme](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/apply-desktop.jpg)

Users receive confirmation that they have successfully applied:

![Confirmation of successful application](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/application-confirmation-desktop.jpg)

### Existing Client Goals

**As an existing Volanto client, I need to be able to gain a more indepth understanding of the Launchpad programme, so that I can better understand Volanto's brand values**

Existing clients can achieve this goal by visiting the Programme page as shown below:

![Learning more about the Launchpad programme](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/programme-desktop.jpg)

**As an existing Volanto client, I need to be able to understand how Volanto has helped people in the past, so that I can better understand the impact Volanto is having**

Existing clients can achieve this goal by visiting the Testimonials page as shown below:

![Learning about the benefit past mentees gained from the Launchpad programme](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/testimonials-desktop.JPG)

**As an existing Volanto client, I need to be able to contact the Launchpad team, so that I can follow up with any further questions**

Existing clients can achieve this goal by submitting the Contact form as shown below:

![Contacting Volanto with follow-up questions](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/contact-desktop.JPG)

Users receive confirmation that they have successfully contacted Volanto:

![Confirmation of successful contact submission](https://laura10101.github.io/volanto-launchpad/documentation/screenshots/features/contact-confirmation-desktop.jpg)

## Bugs

### Fixed Bugs

The following bugs were fixed during the development process:

- Validation error on home page whereby `<p>` elements were used as child of `<a>` elements. The resolution was to use `<span>` as the child element instead.
- Validation error testimonials page whereby a testimonial `<figure>` element had a duplicate `class` attribute. The duplicate attribute was removed.
- A `</p>` tag was found without a corresponding `<p>` tag. This was due to a `<ul>` element within the paragraph. The resolution was to close the paragraph just before the unordered list, and to open a new paragraph immediately after.
- The "Submit" button on the forms were labelled as "Submit Query" when viewed in Firefox, which meant the text overflowed the button. The `value` attribute was explicitly set on all submit buttons.
- The `id` attribute on textareas in the application form did not match the label. The naming was updated to be consistent with the label.
- During testing, it was identified that the fields on the application and contact forms were not set to required. This was corrected.
- Early responsiveness testing found that highlighted features on the home page were not centered in small screen sizes. The corresponding CSS class was updated to set margins to `0 auto`.
- On inital deployment of the site to GitHub Pages, the site could not be accessed through the expected URL. This was due to the site having been created in an src folder rather than in the root of the repository. The site was moved back up to root level.
- During initial testing, the footer was not sticking properly to the bottom of the page. An updated solution was taken from the CSS Tricks "Sticky Footer, Five Ways" tutorial.
- During initial testing, the nav bar overlapped the header image. Additional padding was added to the header image to address this.
- The Responsive TopNav code did not initially work when added to the page as the original code operated directly on the `<a>` tags, whereas the nav bar for the Launchpad site is implemented using `<ul>` tags. The JavaScript was therefore updated accordingly.

### Unfixed Bugs

I opted not to resolve the following bug:

- The index.html page contains a validation error: "Section lacks header for h2-h6".