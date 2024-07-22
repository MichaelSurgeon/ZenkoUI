# Welcome to the Zenko UI
---
This UI was build as the front end for the Zenko API which can be found in my repositories its an application in which users can upload transactional data to a specified format, and run some analysis on the data to get some insights on their financials i.e total spend,
number of transactions, most common categories, spend per day and the data is even split out by category so it can provide you a nice view of each.
---
# Getting started 
---
In order to get started you must clone this repo to your local machine then we can get started:

Note
- You must have the latest node version as of today the latest version is v20.15.1 although you might find packages in lower versions in this project
- You must follow the readme file for the ZenkoAPI and be running it in order to use the UI including the database

Setup
- Step 1: Once cloned open the repo in an editor of your choice (VSCode is my preffered choice)
- Step 2: Delete the package.lock.json file from the repo
- Step 3: Run the following comman npm install (this will download all required packages for this project)
- Step 4: Once completed run npm start
- Step 5: Navigate to src/Componenets/Helpers/config.js
- Step 6: Update the host variable to your local host that the ZenkoAPI is running on typically this is host 7128 but it can vary.
- Step 7: Navigate to the local host in your browser and thats it you should be good to go! I will list some of the file validation rules further in this read me so you can upload a file

# Sign up

When you first launch the application it will present you with a sign up page, once completed you will be given a sign in page sign in with the same credentials you should receive an alert stating you have been authorised press okay and then you should be taken into 
the application.

# File Information

In order to upload a file you have to follow this format (CSV ONLY) I have attached an example file to the repo

Name  | Amount | Location | Date | Category
------------- | ------------- | ------------- | ------------- | -------------
Cafe | 22.50 | Edinburgh | 24/06/2024 | Transport

Limitations 
- in current state there is no valdiation for length of data however if the length is to long it might mess with the table (this was out of scope)
- there are a list of accepted categories that you can use listed below the limitations all of which must start with a capital (this will be changed in the future for lower case and upper)

Accepted categories
- Eating Out
- Bills
- Entertainment
- Transport
- Shopping
- Groceries
- General
- Subscriptions
- Debt

# File uploading

once you have a file rady to go you can head over to the data upload page and drag the file into the file upload box (Select file is currently disabled due to a bug). You should then recieve a an alert to say the file has been uploaded
aslong as you have set the API and database correctly, once uploaded a historical data table should appear underneath with your file inside.

# Triggering analysis 

Now your file is ready, you want to press the trigger analysis button in the data upload tab this generates the calculated data for each of the sections and allows you to view KPI's in the home page along with calculated categories information.

# Budget split

Within the categories page you will see wants, needs, debts/savings this is based on the 50/30/20 budgeting rule the logic is as follows:

- Wants
  - red if you exceed 30 percent
  - green if under 30 percent
- Needs
  - red if you exceed 50 percent
  - green if you are under 50 percent
- Debs/Savings
  - red if you exceed 20 percent or if you are under 20 percent
  - green if you are bang on 20 percent (thought this would be a good indication of savings) potentially a use case to add in an amber colour with a tolerance of 5 percent either side.

# What to expect?

Below is some of the pages you can expect to see.

### Sign in page
![image](https://github.com/user-attachments/assets/41442750-f051-48fe-b177-a9890397424b)

### Sign up page
![image](https://github.com/user-attachments/assets/fe58ee52-ad4f-4a8e-a5c0-787caccfb580)

### Part of the home page 
![image](https://github.com/user-attachments/assets/81384b8c-4ebe-4b8e-b33f-12a324049e50)

### Data table on home page
![image](https://github.com/user-attachments/assets/8c68952c-401d-4014-a131-cad32ff32a1d)

### Part of the categories page 
![image](https://github.com/user-attachments/assets/020875fd-1d73-408b-8c9b-08da2575b903)

### Data upload page 
![image](https://github.com/user-attachments/assets/bfeae46b-2f88-413e-b28f-87afde42c732)

### Account update page
![image](https://github.com/user-attachments/assets/583b6fea-bee7-4821-96f6-1bde1fa61ec2)
