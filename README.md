# burger

A Simple Burger Eatin' Application Built In Node.js, Express, MySQL, and Handlebars

# Description

This app is intended to be a simple demonstration of MVC principles. The user enters a burger name and clicks "Make it!" which adds the burger to the MySQL database. It also displays the burger name on the page alongside a "DEVOUR IT" button. When the user clicks this new button the burger is moved to the right side of the page and the database is updated to reflect the burger's new status. 

![App in action](/public/assets/img/burger.png)

# Demo

[Try it for yourself!](https://agile-brushlands-67640.herokuapp.com/)

# Installation

To run the application locally, first clone this repository with the following command.

<pre>git clone https://github.com/GuyFromHere/burger.git</pre>

Next, install the required modules.

<pre>
cd eat-da-burger
npm install
</pre>

Connect to a local mysql server and run import schema.sql to set up the database.

Finally, start the node server. 

<pre>
node server
</pre>

Open the app: http://localhost:3000/.
