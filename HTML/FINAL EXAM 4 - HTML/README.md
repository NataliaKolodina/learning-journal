🛠️ Final Project Homework (Descriptive Version): "Mythical Creature Adoption Center"

🔥 Your Mission:
You are tasked with building the official website for the Mythical Creature Adoption Center.
 This center specializes in helping people adopt dragons, unicorns, phoenixes, and other magical creatures.
Your job is to create a complete webpage using everything you learned in this course.
 The website should be fully structured, include different types of content, and show clear use of semantic HTML.

1. Create the Base of Your Page
Start with the proper HTML5 declaration at the very top.


Create an HTML document structure with <html>, <head>, and <body> elements.


Inside the <head>, set: 


A character encoding declaration for UTF-8.


The page title as "Mythical Creature Adoption Center".



2. Build the Website Layout
Inside the <body>, organize the site using semantic HTML elements:
At the top, create a header.


Inside the header, add the main heading with the title "Mythical Creature Adoption Center."


Also in the header, create a navigation menu. This should be an unordered list of links:


A link to the "Home" section within the same page.


A link to the "Adopt" section within the same page.


A link to the "Creatures" section within the same page.


A link to the "FAQ" section within the same page.


An external link to the Encyclopedia of Mythical Creatures website (https://mythicalcreatureslist.com/), set to open in a new tab.


After the header, create the main content area using a main element.


Inside the main element, include four distinct sections:


A section for Home (use the ID "home").


A section for Adopt (use the ID "adopt").


A section for Creatures (use the ID "creatures").


A section for FAQ (use the ID "faq").


At the bottom of the page, create a footer.


In the footer, add the copyright notice:


© 2025 Mythical Creature Adoption Center


Also, add a link in the footer that allows the user to quickly jump back to the top of the page (linking back to the "Home" section).



3. Fill the Home Section ("home")
Inside the Home section:
Add an image that shows a magical landscape with creatures. Use descriptive alternative text to describe the image ("Magical landscape with creatures").


Include a caption under the image that says: "Welcome to your next adventure!"


Embed an audio player that plays a welcome sound or music track, with audio controls visible.


Below the media, write a short welcoming paragraph with the following content:


Highlight the phrase "once-in-a-lifetime" by separating it using a <span> (for example, to allow future CSS styling).


Emphasize the phrase "magical companions" using a <strong> tag.


Italicize the phrase "extraordinary journey" using an <em> tag.


Insert a line break (<br>) where appropriate to make the paragraph easier to read.



4. Create the Adoption Form ("adopt")
Inside the Adopt section:
Build a form that will submit data to a new page called "submit_adoption.html" using the POST method.


Include the following fields in the form:


A text input for the user's full name, labeled clearly.


An email input for the user's email address, labeled clearly.


A number input for the user's age, labeled clearly.


A password input for the user to create a password, labeled clearly.


A dropdown (select) menu allowing users to pick their preferred creature. The dropdown must include these options:


Dragon


Unicorn


Phoenix


Griffin


A text input field paired with a datalist offering pickup city suggestions. The options for pickup locations are:


Avalon


Atlantis


El Dorado


Camelot


A range slider allowing users to select their Magic Compatibility Level, with values between 0 and 100 and a step of 1.


A group of checkboxes allowing users to select their magical skills. The checkbox options must be:


Flying


Spell Casting


Potion Making


A group of radio buttons where users can choose their preferred adoption speed. The choices are:


Urgent


Within a week


No rush


A larger text area where users can explain why they want to adopt a creature.


A submit button labeled "Adopt Now."


Each form field should be properly labeled using a <label> element associated with the corresponding input.

5. Build the Creatures Table ("creatures")
Inside the Creatures section:
Create a table to display available mythical creatures.


Structure the table properly with a table head, body, and footer.


Inside the table head, add a row with the following column titles:


Name


Species


Power Level


Available


Inside the table body, create one row for each of these creatures:


Fira (Phoenix, Power Level 95, Available)


Stormwing (Dragon, Power Level 100, Not Available)


Silvershadow (Unicorn, Power Level 88, Available)


Grumblebeard (Griffin, Power Level 92, Available)


In the table footer, add a row that shows:


In the first column: "Total Creatures"


In the next three columns (spanned into one cell using colspan), write the number 4.


Use scope="col" and scope="row" attributes properly to improve accessibility.

6. Fill the FAQ Section ("faq")
Inside the FAQ section:
Create an unordered list of Frequently Asked Questions.


Each FAQ should have a bolded "Q" and "A" before the respective question and answer.


Include the following FAQs exactly:


Q: How long does adoption take?
 A: Most creatures are ready within 3–5 magical days. Add a link that takes users to the "Adopt" section of the page.


Q: Is training required?
 A: Basic training is required for dragons and griffins. (Bold "required.")


Q: Can I adopt more than one creature?
 A: Yes, if you prove high magical compatibility. (Bold "high magical compatibility.")


Use <strong> tags to emphasize important words like "required" and "high magical compatibility" in the answers.

7. Include Bonus Requirements
Somewhere in the page, embed a video that plays a short magical journey clip with visible video controls. Add a caption under the video that says: "Discover the world of mythical creatures!"


Turn one image into a link. Clicking the image should open the Dragon page of the Encyclopedia of Mythical Creatures (https://mythicalcreatureslist.com/dragon) in a new tab.


Add at least one HTML comment explaining a section (for example, a comment like: "Adoption Form Section").


Use good indentation and whitespace for better code readability.



🏆 Final Checklist
At the end, your webpage must demonstrate all these concepts:
Correct HTML5 structure and syntax.


Full use of semantic HTML elements (header, nav, main, section, footer, etc.).


Internal page links (jumping to sections).


External links (opening in new tabs).


Navigation menu.


Text formatting with <strong>, <em>, <span>, and <br>.


Fully-structured forms with labels, inputs of all types, dropdowns, checkboxes, radio buttons, sliders, datalists, and textarea.


Full table with head, body, footer, scope attributes, and colspan usage.


Accessible image usage with alt text.


Audio and video embedding.


An image used as a link.


Proper indentation, whitespace, and commenting.



