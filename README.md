Project README

Steps to Set Up the Project and Run Locally

1. Clone the Repository

To get started, clone the repository to your local machine. Open your terminal/command prompt and run the following command:

git clone https://github.com/Rishu-89/Project.git

2. Install Dependencies

After cloning the repository, navigate into the project directory to set up both the frontend and backend:

Backend Setup

Navigate to the backend folder:

-cd backend

Install dependencies:

-npm install
-npm install nodemon



Start the Backend Server
In the backend folder terminal, run:

-nodemon server.js

The backend server will typically be accessible at http://localhost:8080.
Frontend Setup

Open a new terminal and navigate to the frontend folder:

-cd frontend

Install dependencies:

-npm install


Start the Frontend Server
In the frontend folder terminal, run:

-npm run dev


The frontend server will typically be accessible at http://localhost:5173.





4. Access the Application

Frontend: Open your browser and navigate to http://localhost:5173.

Backend: The backend API should be running at http://localhost:8080.

5. Admin Login Credentials

To access the admin panel, use the following credentials:

Email: admin@gmail.com

Password: 54321









-------------------------------------------------------------------------------------------Project Features-----------------------------------------------------------------------------------------------------------
Landing Page
The landing page is the public-facing interface designed to engage users and present information dynamically fetched from the backend. Key components include:

-----{"Our Project" Section:}---

Showcases all available projects retrieved from the backend.
Each project entry displays:
A project image.
Name of the project.
A brief description.
A non-functional "Read More" button for UI purposes.
Purpose: Highlights the work portfolio in a visually appealing way.





-----{ "Happy Clients" Section }----

Displays a list of satisfied clients fetched from the backend.
Each client entry includes:
Client’s image.
Name of the client.
Their designation (e.g., CEO, Developer, etc.).
A short description or testimonial.
Purpose: Builds trust by showcasing client relationships.


------{Contact Form}--------

A form where users can enter their personal details to get in touch.
Input fields include:
Full Name.
Email Address.
Mobile Number.
City.
Submitted data will be sent to the backend and stored for administrative purposes.
Purpose: Provides a way for users to connect with the company.


-----{Newsletter Subscription Section}----

Allows users to subscribe to newsletters by providing their email address.
The entered email will be sent to the backend for storage.
Purpose: Expands the company’s outreach by building a subscription list.
Admin Panel
The admin panel is the backend management interface, accessible only to authorized administrators. It allows admins to perform CRUD (Create, Read, Update, Delete) operations on various data entities. Key functionalities include:

----{ Project Management}-----

Add new projects by entering:
Project Image.
Name.
Description.
View, edit, and delete existing project entries.
Purpose: Keeps the project portfolio up-to-date.



----{Client Management}---

Add client details including:
Client Image.
Name.
Description.
Designation (e.g., CEO, Designer).
View and manage client data.
Purpose: Maintains a database of client relationships.


-----{Contact Form Details}----

View all user-submitted contact form entries with the following details:
Full Name.
Email Address.
Mobile Number.
City.
Purpose: Provides insights into potential leads or inquiries.

{ Newsletter Subscription Management:}

View a list of all email addresses subscribed to the newsletter.

