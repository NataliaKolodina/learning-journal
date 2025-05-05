=====================================================================================
💼 FINAL EXAM – HTML PROJECT
Client Brief: "My Personal Webspace"
======================================================================================

🧠 Project Overview
You’ve been contracted as a Junior Front-End Developer to build a personal website
based on a precise client specification. The website must contain 3 pages, follow best
semantic HTML practices, and include every concept you’ve learned in class.
This is a final technical exam, not a design or content-writing task. The content has
been fully provided. Your job is to focus exclusively on accurate HTML implementation.

======================================================================================
🧩 Concepts Covered in This Project
======================================================================================
HTML anatomy: <!DOCTYPE>, <html>, <head>, <body>
Semantic elements: <header>, <nav>, <main>, <footer>, <article>, <section>, <aside>
Page title and structure
Text elements: <h1>–<h6>, <p>, <br>, <div>, whitespace and indentation
Lists: <ul>, <ol>
Links: absolute, relative, anchor links, open in new tab
Attributes: href, src, alt, target, required, etc.
Tables: <thead>, <tbody>, <tfoot>, colspan, rowspan, borders
Forms: <label>, input types, validation, required fields
Media: <img>, <audio>, <video>, <figure>, <figcaption>, <iframe>
CSS basics: inline or internal styling
Comment syntax: <!-- comment -->

======================================================================================
📁 Required Folder Structure
======================================================================================
my-personal-webspace/
├── index.html
├── portfolio.html
├── contact.html
└── assets/
    ├── images/
    ├── media/
    └── css/

======================================================================================
📝 PAGE 1 — index.html (Homepage)
======================================================================================
Tasks:
- Use correct HTML structure with <!DOCTYPE html>, <html lang="en">, etc.
- Add <meta charset="UTF-8"> and <title> in the head with content: "My Personal Webspace"
- Inside <header>:
  - <h1> with text: "Jane Coder"
  - <p> with text: "Front-End Developer in Training"
  - <nav> with 3 links:
    - Home → index.html
    - Portfolio → portfolio.html
    - Contact → contact.html
- Inside <main>:
  - <section id="about-me">
    - <h2> with text: "About Me"
    - <p> with text: "I’m learning how to build websites using HTML and CSS. This is my first project. My goal is to become a professional web developer."
    - <img src="assets/images/profile.jpg" alt="Cartoon avatar of Jane">
    - <div> containing:
      - <ol> with:
        - Learn HTML and CSS
        - Build a portfolio
        - Apply for internships
      - <br>
      - <ul> with:
        - Visual Studio Code
        - GitHub
        - Google Chrome
    - <aside> with text: "Fun fact: I used to be a math tutor before switching to tech."
    - <figure>
      - <img src="assets/images/sample-project.jpg" alt="Screenshot of my first webpage">
      - <figcaption>Screenshot of my first webpage</figcaption>
    - <video controls>
      - source: assets/media/intro.mp4, type="video/mp4"
- Inside <footer>:
  - <p> with text: "© 2025 Jane Coder. All rights reserved."
  - Internal anchor link:
    - <a href="#bottom">Go to bottom</a> near the top of the page
    - <div id="bottom"></div> at the bottom
  - External link:
    - <a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a>
- Add HTML comment at the bottom:
  <!-- End of homepage -->

======================================================================================
📝 PAGE 2 — portfolio.html (Projects)
======================================================================================
Tasks:
- Reuse same <header> and <nav> as in index.html
- Inside <main>:
  - <h2> with text: "My Projects"
  - <table border="1"> using:
    - <thead> with column titles: Project Name, Description, Tools, Status
    - <tbody> with at least 3 project rows (create fake data)
    - At least 1 row using colspan
    - At least 1 row using rowspan
    - <tfoot> with a summary row
  - Two <figure> elements:
    - First:
      - <img src="assets/images/weather-app.jpg" alt="Weather App Interface">
      - <figcaption>Weather App Interface</figcaption>
    - Second:
      - <img src="assets/images/portfolio-preview.jpg" alt="Home Page of My Portfolio">
      - <figcaption>Home Page of My Portfolio</figcaption>
  - Embed a video:
    - Use <iframe> with a YouTube link or a <video> tag with local file
  - <aside> with text: "Tip: Always keep your code organized."
- Add HTML comment at the bottom:
  <!-- End of portfolio page -->

======================================================================================
📝 PAGE 3 — contact.html (Form)
======================================================================================
Tasks:
- <form> inside <main> and wrapped in an <article> element
- Use proper <label for=""> and matching id for each field:
  - Full Name (text), required, minlength=3
    - Label: "Full Name"
  - Email (email), required
    - Label: "Email Address"
  - Password, required, pattern=".{6,}"
    - Label: "Password"
  - Age (number), min=13, max=120
    - Label: "Age"
  - Satisfaction (range), min=0, max=10
    - Label: "Satisfaction"
  - Message (<textarea>), maxlength=500
    - Label: "Message"
  - <select> with options:
    - Label: "Reason for Contact"
    - Job Offer, Collaboration, Other
  - <datalist> with:
    - Label: "How did you find me?"
    - Options: Google, Friend, LinkedIn
  - Radio buttons:
    - Label: "Preferred Contact Method"
    - Options: Email, Phone
  - Checkboxes:
    - Label: "Subscribe to..."
    - Options: News, Events
  - Submit button with value: "Send Message"
- Add HTML comment at the bottom:
  <!-- End of contact form -->

======================================================================================
✅ SUBMISSION
======================================================================================
- Zip the full folder: my-personal-webspace/
- File name: yourlastname_final_project.zip
- Submit via GitHub
- Deadline: 18.04.2025

======================================================================================


