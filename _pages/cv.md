---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in Computer Science and Engineering, UC San Diego, 2024-2026
* B.A. in Computer Science, New York University, 2020-2024
* B.A. in Mathematics, New York University, 2020-2024

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Research Experience
======
* 06 2024 - Now: Research Assistant
  * UC San Diego

* 06 2024 - Now: Research Assistant
  * Beijing Information Science and Technology University
  * Conducted literature reviews and benchmark reproductions on medical image segmentation of small organs.
  * Experimented with solutions for better fine-tuning MedSAM model on specific tasks. (AAAI paper in progress)

* 09 2023 - 12 2023: Research Assistant
  * MIT - Design Computation & Digital Engineering (DeCoDe) Lab
  * Created a novel measure of performance for parametric generation models by training a surrogate model.
  * Designed and developed a neural network model for bicycle dimension parameters prediction.

Work Experience
======
* 10 2023 - May 2024: Venture Technology Intern
  * Plum Alley, Inc.
  * Enhanced and modernized the official website using Webflow techniques with HTML, CSS, and JavaScript.
  * Tailored the subscription features, including custom payment methods and real-time display of invested capital.
  * Successfully deployed updates to the live site, available at https://plumalley.co/

* 08 2023 - 01 2024: Backend Software Engineer Intern
  * UrsaTech, Inc.
  * Developed backend APIs for an online evaluation system in TypeScript and Express.
  * Manipulated MySQL database, used Postman and Mocha for testing, Swagger for documentation.

* 04 2023 - 08 2023: Frontend Software Engineer Intern
  * UrsaTech, Inc.
  * Developed a web application with a login system, QA feature, and a Unity-integrated code editor, with backend API integrations, using React, TypeScript, and CSS to align with Figma designs.
  * Refactored function components to class-based structures, and incorporated a web-based code editor leveraging Microsoft's Monaco Editor, featuring auto-complete, editable regions, etc. 
  * Integrated a Unity game into the web platform with an event-driven command sequence, established seamless communication by making key Unity functionalities accessible to React components.
  
Skills
======
* Programming
  * Python, Java, TypeScript, JavaScript, HTML, CSS, C++, MPI, OpenMP
* Frameworks & Libraries
  * PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, React, Node, Express, Flask
* Database & Tools
  * PostgreSQL, MongoDB, Docker, Kubernetes, GitHub Actions, Flask-RESTX
  
<!-- Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul> -->
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Service and leadership
======
* Currently signed in to 43 different slack teams -->

Awards
======
* NYU Magna Cum Laude with High Honors
* NYU Dean's List for Academic Year (2020-2024)
* NYU University Honors Scholar
* [freeCodeCamp's Top Open Source Contributors of 2023](https://www.freecodecamp.org/news/top-open-source-contributors-2023/)